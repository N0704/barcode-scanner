import React from 'react'
import Modal from './Modal'
import { RotateCw } from 'lucide-react'
import { Printer } from 'lucide-react'
import { Download } from 'lucide-react'

const OrderDetailModal = ({order, onClose}) => {
    const items = [
        {product: "Thám tử lừng danh Conan - Tập 1", image: "http://books.google.com/books/content?id=2wBREQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", price: "16000", quantity: "2"},
        {product: "Sớm mai trong trẻo", image: "http://books.google.com/books/content?id=zSFhEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", price: "16500", quantity: "1"},
        {product: "Thám tử lừng danh Conan - Tập 2", image: "http://books.google.com/books/content?id=HQJREQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", price: "16000", quantity: "2"},
      ]
    
      const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0).toLocaleString("vi-VN") + "₫"
  return (
    <Modal isOpen={!!order} onClose={onClose}>
        {order && (
          <div className='flex flex-col min-h-full'>
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-5 border-b border-neutral-200 bg-primary text-white">
            <h2 className="text-base font-semibold uppercase">
              Đơn hàng {order.number}
            </h2>
            <button
              onClick={onClose}
              className=" hover:text-neutral-200 transition cursor-pointer"
            >
              ✕
            </button>
          </div>
        
          {/* Body */}
          <div className="overflow-y-auto max-h-[70vh]">
          <div className="flex flex-col gap-4 px-10 py-6">
            <div className="flex justify-between">
              <p className="text-sm text-neutral-800">Ngày: {order.date}</p>
              <div className="flex items-center justify-between text-neutral-800 gap-3">
                <div className="flex items-center gap-2 px-2 py-1 cursor-pointer
                    rounded-lg border border-solid border-neutral-200/80 text-xs"> Xuất file
                <span><Download size={14} /></span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1 cursor-pointer
                    rounded-lg border border-solid border-neutral-200/80 text-xs"> In hóa đơn
                <span><Printer size={14} /></span>
                </div>
            </div>
            </div>
            <div className="overflow-x-auto rounded-xl border border-solid border-neutral-100/80 shadow-xs">
        <table className="min-w-full">
            <thead className='text-neutral-800 text-xs text-left'>
            <tr className='text-center border-b border-neutral-100'>
                <th className="px-4 py-4">Ảnh</th>
                <th className="px-4 py-4">Sản phẩm</th>
                <th className="px-4 py-4">Giá tiền</th>
                <th className="px-4 py-4">Số lượng</th>
                <th className="px-4 py-4">Tổng tiền</th>
            </tr>
            </thead>
            <tbody>
            {items.map((i, index) => (
                <tr key={index} className="text-xs text-neutral-800 text-center">
                <td className="px-4 py-3 flex justify-center"><img src={i.image} className='w-13 h-18 rounded-xs' /></td>
                <td className="px-4 py-3">{i.product}</td>
                <td className="px-4 py-3">{Number(i.price).toLocaleString('vi-VN') + '₫'}</td>
                <td className="px-4 py-3">{i.quantity}</td>
                <td className="px-4 py-3">{Number(i.price * i.quantity).toLocaleString('vi-VN') + '₫'}</td>
                </tr>
            ))}
            </tbody>
        </table>
        <div className="flex justify-end-safe text-neutral-800 text-sm font-medium uppercase px-10 pb-4">Thành tiền: {total}</div>
        </div>
          </div>
          </div>
          
        
          {/* Footer */}
          <div className="px-10 py-4 flex justify-end mt-auto border-t border-neutral-100">
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 py-2 px-4 rounded-lg cursor-pointer
                border border-solid border-neutral-400 text-neutral-400 text-xs hover:scale-102 transition"
            >
              <RotateCw size={16} /> Đóng
            </button>
          </div>
        </div>
        
        )}
      </Modal>
  )
}

export default OrderDetailModal