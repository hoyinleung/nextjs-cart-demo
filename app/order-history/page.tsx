import React from 'react'
import {getAll} from '@/actions/transaction'

export default async function OrderHistory() {

  const orderData: Order[] = await getAll()
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Order History</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2">Order ID</th>
              <th className="border border-gray-200 px-4 py-2">Name</th>
              <th className="border border-gray-200 px-4 py-2">Email</th>
              <th className="border border-gray-200 px-4 py-2">Amount</th>
              <th className="border border-gray-200 px-4 py-2">購買時間</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((order) => (
              <tr key={order._id.toString()}>
                <td className="border border-gray-200 px-4 py-2">{order._id.toString()}</td>
                <td className="border border-gray-200 px-4 py-2">{order.name}</td>
                <td className="border border-gray-200 px-4 py-2">{order.email}</td>
                <td className="border border-gray-200 px-4 py-2">${(order.amount / 100).toFixed(1)}</td>
                <td className="border border-gray-200 px-4 py-2">{order.orderedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
