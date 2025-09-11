import Image from "next/image";
import Logo from "../assets/pomo-logo.png";
import { LayoutDashboard } from "lucide-react";
import { ChartPie } from "lucide-react";
import { FileText } from "lucide-react";
import { Bell } from "lucide-react";
import { Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <div className=" flex flex-col min-h-screen pl-6 pr-3.5 bg-neutral-50">
        <Image src={Logo} alt="Logo" className="py-4 cursor-pointer" width={110} height={36}/>
        <div className="flex flex-col py-5 gap-4 border-b border-solid border-neutral-200">
            <p className="text-sm text-neutral-400/80 px-2.5">Quản lý</p>
            <div className="flex items-center gap-2 px-6 h-9 text-neutral-500/80 cursor-pointer">
                <LayoutDashboard size={18} />
                <span className="text-base">Tổng quan</span>
            </div>
            <div className="flex items-center gap-2 px-6 h-9 text-white bg-primary rounded-lg cursor-pointer">
                <FileText size={18} />
                <span className="text-base">Đơn hàng</span>
            </div>
            <div className="flex items-center gap-2 px-6 h-9 text-neutral-500/80 cursor-pointer">
                <ChartPie size={18} />
                <span className="text-base">Phân tích</span>
            </div>
        </div>
        <div className="flex flex-col py-5 gap-3">
            <p className="text-sm text-neutral-400/80 px-2.5 pb-1.5">Cá nhân</p>
            <div className="flex items-center gap-2 px-6 h-9 text-neutral-500/80 cursor-pointer">
                <Bell size={18} />
                <span className="text-base">Thông báo</span>
            </div>
            <div className="flex items-center gap-2 px-6 h-9 text-neutral-500/80 cursor-pointer">
                <Settings size={18} />
                <span className="text-base">Cài đặt</span>
            </div>
        </div>
        <div className="mt-auto flex items-center py-4 px-1 gap-2 cursor-pointer">
            <img src="https://anviethouse.vn/wp-content/uploads/2022/06/thiet-ke-nha-sach-chu-de-5.jpg" alt="Logo" 
                className="w-8 h-8 rounded-full"/>
            <div className="flex flex-col">
                <p className="text-xs text-neutral-800/80 font-semibold">Nhà sách Pomo</p>
                <p className="text-xs text-neutral-600/80">pomobookstore@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar