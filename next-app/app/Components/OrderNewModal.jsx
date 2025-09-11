"use client";
import React, { useState, useRef, useEffect } from 'react';
import Modal from './Modal'
import { Download } from 'lucide-react';
import { Printer } from 'lucide-react';
import { RotateCw } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const OrderNewModal = ({isOpen, onClose, videoRef, loading}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
          <div className='flex flex-col min-h-full'>
          <div className="flex justify-between items-center px-6 py-5 border-b border-neutral-200 bg-primary text-white">
            <h2 className="text-base font-semibold uppercase">
              Đơn hàng mới
            </h2>
            <button
              onClick={onClose}
              className=" hover:text-neutral-200 transition cursor-pointer"
            >
              ✕
            </button>
          </div>
        
          <div className="grid grid-cols-3 gap-6 px-10 py-6">
            <div className="col-span-1">
                <div className="relative rounded-lg border border-solid border-neutral-100/80 h-60 overflow-hidden">
                    <video className="w-full h-full object-cover" ref={videoRef} autoPlay playsInline muted/>
                    {loading && (
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center
             mt-2">
              <div className="w-6 h-6 rounded-full border-2 border-primary border-t-white animate-spin"></div>
             </div>
          )}
                </div>
                <p className='text-xs text-neutral-400/80 mt-3'>* Hướng mã vạch vào camera để quét</p>
            </div>
            <div className="col-span-2">
            <div className="overflow-y-auto max-h-[70vh]">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between px-1">
              <p className="text-base font-semibold uppercase text-neutral-800 flex items-center gap-1">Danh sách sản phẩm <ChevronDown size={18} /></p>
              <div className="text-base font-semibold uppercase text-neutral-800">0₫</div>
            </div>
            <div className="overflow-x-auto rounded-lg border border-solid border-neutral-100/80 shadow-xs">
        <table className="min-w-full min-h-72">
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
                <tr className="text-xs text-neutral-800 text-center">
                <td className="px-4 py-3 flex justify-center"></td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                </tr>
            </tbody>
        </table>
        <div className="flex justify-end p-4 border-t border-neutral-100">
            <span className='text-sm text-neutral-800 font-medium '>Thành tiền: 0₫</span>
        </div>
        </div>
          </div>
          </div>
            </div>
          </div>
          
          <div className="px-10 py-4 flex justify-end items-center gap-2 mt-auto border-t border-neutral-100">
          <button
              onClick={onClose}
              className="flex items-center gap-2 py-2 px-2 rounded-lg cursor-pointer
                bg-primary text-white hover:scale-102 transition text-sm" 
            >
              <Download size={16} /> Lưu đơn hàng
            </button>
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 py-2 px-2 rounded-lg cursor-pointer
                border border-solid border-neutral-400 text-neutral-400 text-xs hover:scale-102 transition"
            >
              <RotateCw size={16} /> Đóng
            </button>
          </div>
        </div>
      </Modal>
  )
}

export default OrderNewModal