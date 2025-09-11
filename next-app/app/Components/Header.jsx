"use client";
import { useState, useRef } from 'react';
import { FileText } from "lucide-react"
import { Search } from "lucide-react"
import OrderNewModal from './OrderNewModal';

const Header = () => {
  const [newOrder, setNewOrder] = useState(false);
  const [loading, setLoading] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [error, setError] = useState(null);
  const openModal = async () => {
    setNewOrder(true)
    try {
      setError(null);
      setLoading(true)
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      setError('Không thể truy cập camera: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setNewOrder(false);
  };

  console.log(error)
  return (
    <div className='px-10 py-6 border-b border-solid border-neutral-100/80'>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 w-64 h-9 border border-solid border-neutral-200/80 rounded-xl px-2.5">
            <Search className=' text-neutral-400' size={16} />
            <input type="text" placeholder='Tìm kiếm...' className='w-full outline-none text-sm text-neutral-400' />
        </div>
        <button onClick={openModal} className="bg-primary w-32 h-9 rounded-lg flex items-center justify-center 
            gap-2 px-1 cursor-pointer hover:scale-95 duration-300">
            <FileText className="text-white" size={16}/>
            <span className="text-white text-sm">Đơn hàng mới</span>
        </button>
      </div>
      <OrderNewModal isOpen={newOrder} onClose={closeModal} videoRef={videoRef} loading={loading}/>
    </div>
  )
}

export default Header