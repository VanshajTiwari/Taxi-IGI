"use client";
import Link from "next/link";
import {Swap,Browsers,CheckSquare, FileText, ClipboardText,} from '@phosphor-icons/react/dist/ssr';
import { usePathname } from "next/navigation";
export default function SideNav(){
    const pathname=usePathname();
    return(
        <div className="app-body-navigation">
        <nav className="navigation">
            <Link href="/dashboard" className={pathname=="/dashboard"?"active-sidetab":""}>
                <Browsers weight="regular" size={20}/>
                <span>Dashboard</span>
            </Link>
            <Link href="#">
                {/* <i className="ph-check-square"></i> */}
                <CheckSquare weight="regular"  size={20}/>
                <span>Scheduled</span>
            </Link>
            <Link href="#">
                {/* <i className="ph-swap"></i> */}
                <Swap weight="regular"  size={20}/>
                <span>Transfers</span>
            </Link>
            <a href="#">
                {/* <i className="ph-file-text"></i> */}
                <FileText weight="regular"  size={20}/>
                <span>Templates</span>
            </a>
            <a href="#">
                {/* <i className="ph-clipboard-text"></i> */}
                <ClipboardText weight="regular"  size={20}/>
                <span>Exchange</span>
            </a>
        </nav>
        <footer className="footer">
            {pathname=="/Profile" && <Link href="#" className="flex justify-center items-center p-3 mb-6 border-2 border-gray-400 rounded-md text-gray-400 duration-500 hover:bg-gray-200 hover:text-black">
                {/* <i className="ph-clipboard-text"></i> */}
                <ClipboardText weight="regular"  size={20}/>
                <span>Account</span>
            </Link>}
            <h1>Taxi IGI<small>©</small></h1>
            <div>
                Project IGI ©<br />
                All Rights Reserved 2024
            </div>
        </footer>
    </div>
    )
}