"use client";
import { ChevronDown } from 'lucide-react'
import { CalendarDays } from 'lucide-react'
import { Ellipsis } from 'lucide-react'
import { useState } from 'react';
import OrderDetailModal from './OrderDetailModal';

const OrderDataTable = () => {
    const orders = [
        {number: "228-3844-931-7589", date: "9/9/2025 9:00 AM", quantity: "2", amount: "100000" },
        {number: "123-4567-890-1234", date: "8/9/2025 9:00 AM", quantity: "2", amount: "100000" },
        {number: "234-5678-901-2345", date: "7/9/2025 9:00 AM", quantity: "2", amount: "100000" },
        {number: "234-5678-901-2345", date: "6/9/2025 9:00 AM", quantity: "2", amount: "100000" },
        {number: "234-5678-901-2345", date: "5/9/2025 9:00 AM", quantity: "2", amount: "100000" },
        {number: "234-5678-901-2345", date: "4/9/2025 9:00 AM", quantity: "2", amount: "100000" },
        {number: "234-5678-901-2345", date: "10/9/2025 9:00 AM", quantity: "2", amount: "100000" },
        {number: "234-5678-901-2345", date: "8/9/2025 10:00 AM", quantity: "2", amount: "100000" },
      ]
      const sortedOrders = [...orders].sort((a, b) => new Date(b.date) - new Date(a.date));
      const [detailOrder, setDetailOrder] = useState(null);
  return (
    <div>
        <div className="flex flex-col pb-5 gap-1">
            <h1 className='text-xl capitalize font-semibold'>Quản lý đơn hàng</h1>
            <div className="flex items-center justify-between text-neutral-400 text-sm">
            <p>Tối ưu hóa quy trình bán hàng</p>
            <div className="flex items-center justify-between text-neutral-800 gap-3">
                <div className="text-xs">Tổng <span className='text-primary font-medium'>{orders.length}</span> đơn hàng</div>
                <div className="flex items-center gap-2 px-2 py-1 cursor-pointer
                    rounded-lg border border-solid border-neutral-200/80 text-xs"> Mới nhất
                <span><ChevronDown size={14} /></span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1 cursor-pointer
                    rounded-lg border border-solid border-neutral-200/80 text-xs"> Hôm nay
                <span><CalendarDays size={14}/></span>
                </div>
            </div>
            </div>
        </div>
        <div className="overflow-x-auto rounded-xl border border-solid border-neutral-100/80 ">
        <table className="min-w-full">
            <thead className='text-neutral-800 text-xs text-left border-b border-solid border-neutral-100/80'>
            <tr className='bg-neutral-50 text-center'>
                <th className="px-4 py-4 text-center">#</th>
                <th className="px-4 py-4">Mã đơn hàng</th>
                <th className="px-4 py-4">Ngày mua</th>
                <th className="px-4 py-4">Số lượng</th>
                <th className="px-4 py-4">Tổng tiền</th>
                <th className="px-4 py-4">Chi tiết</th>
            </tr>
            </thead>
            <tbody>
            {sortedOrders.map((o, index) => (
                <tr key={index} className="odd:bg-white even:bg-neutral-50 
                    text-xs text-neutral-800 text-center">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{o.number}</td>
                <td className="px-4 py-3">{o.date}</td>
                <td className="px-4 py-3">{o.quantity}</td>
                <td className="px-4 py-3">{Number(o.amount).toLocaleString('vi-VN') + '₫'}</td>
                <td className="px-4 py-3 flex justify-center hover:opacity-60 cursor-pointer"
                onClick={() => setDetailOrder(o)}><Ellipsis size={18}/></td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
        <OrderDetailModal order={detailOrder} onClose={() => setDetailOrder(null)} />
  </div>
  )
}

export default OrderDataTable