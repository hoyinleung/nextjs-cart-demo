import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db'; // Adjust path if needed
import stripe from 'stripe';
import { handleError } from '@/lib/util';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    if (!db) {
      return NextResponse.json({ message: 'Database connection failed' }, { status: 500 });
    }

    const collection = db.collection('order'); // Replace with your collection name
    const data = await collection.find({}).toArray(); // Fetch data
    const result = await collection.insertOne({ name: 'John Doe', email: 'john@example.com', amount: 99.99 });
    if (!result.acknowledged) {
      return NextResponse.json({ message: 'Failed to create data' }, { status: 500 });
    }

    return NextResponse.json({ data });

  } catch (e: any) {
    console.error("API Error:", e);
    return NextResponse.json({ message: 'Server error', error: e instanceof Error ? e.message : String(e) }, { status: 500 });
  }
}
export async function POST(request: Request) {
console.log("🚀 ~ POST ~ request:", request)

  const body = await request.text();
  const sig = request.headers.get("stripe-signature") as string;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  //驗証是否從Stripe過來的請求
  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    return Response.json({ message: "Webhook error", error: err });
  }

  if (event.type === "checkout.session.completed") {

    const {
      //id, 
      amount_total,
      //metadata, 
      //payment_intent, 
      //currency, 
      customer_details
    } = event.data.object;

    try {
      const { db } = await connectToDatabase();

      // Create new Order to DB-------------
      const customerEmail = customer_details?.email || "N/A"
      const customerName = customer_details?.name || "無名客人"

      const collection = db.collection('order'); // Replace with your collection name
      const newOrderQ = await collection.insertOne(
        {
          name: customerName,
          email: customerEmail,
          amount: amount_total
        }
      );
      console.log("🚀寫入了新Order", newOrderQ)
    } catch (err) {
      handleError(err)
    }

    return new Response("", { status: 200 });
  }
}