import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

if (!MONGODB_DB) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  );
}

let cachedClient: MongoClient | null = null;
let cachedDb: any = null; // Typescript doesn't have a specific type for Db in global

interface GlobalWithMongo {
  mongo: {
    client: MongoClient | null;
    db: any;
  };
}

const globalWithMongo = global as typeof globalThis & GlobalWithMongo;

if (!globalWithMongo.mongo) {
  globalWithMongo.mongo = { client: null, db: null };
}

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined in environment variables.');
  }

  try {
    cachedClient = new MongoClient(MONGODB_URI);
    await cachedClient.connect();
    cachedDb = cachedClient.db(MONGODB_DB);

    return { client: cachedClient, db: cachedDb };
  } catch (e) {
    console.error("Error connecting to MongoDB:", e);
    if (e instanceof Error) { // Narrow down the type to Error to access .message
      throw new Error(`Failed to connect to MongoDB: ${e.message}`);
    } else {
      throw new Error("Failed to connect to MongoDB: Unknown error");
    }
  }
}

export default connectToDatabase;