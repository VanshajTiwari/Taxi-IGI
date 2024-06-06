"use client";
import { MagnifyingGlass, Bell, List } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Image from "next/image";
import {  usePathname } from "next/navigation";
import { useEffect } from "react";
export default function TopNavbar(){
	const route=usePathname();
	useEffect(()=>{

		// 
	},[]);
  return (
    <>
            <header className="app-header">
			<div className="app-header-logo">
				<div className="logo">
					<span className="logo-icon">
						{/* <img src="https://assets.codepen.io/285131/almeria-logo.svg" /> */}
						<Image  src="/site/img/view-3d-car_23-2150998595-removebg-preview.png" alt="logo" width={400} height={400} className=""/>
					</span>
					<h1 className="logo-title">
						<span>Taxi IGI</span>
						<span className='text-[10px]'>Powered by Project IGI</span>
					</h1>
				</div>
			</div>
			<div className="app-header-navigation">
				<div className="tabs">
					<Link href="/dashboard" className={route=="/dashboard"?"active":""}>
						Overview
					</Link>
					<Link href="/dashboard/paymentlog" className={route=="/dashboard/paymentlog"?"active":""}>
						Payments Log
					</Link>
					<Link href="/dashboard/notifications" className={route=="/dashboard/notifications"?"active":""}>
						Notifications
					</Link>
					{/* <a href="#">
						Account
					</a>
					<a href="#">
						Settings
					</a> */}
					{/* <a href="#">
						Business
					</a> */}
				</div>
			</div>
			<div className="app-header-actions">
				<Link href="/Profile" className="user-profile">
					<span>Vanshaj Tiwari</span>
					<span>
						<img src="https://assets.codepen.io/285131/almeria-avatar.jpeg" />
					</span>
				</Link>
				<div className="app-header-actions-buttons">
					<button className="icon-button large">
					<MagnifyingGlass />
					</button>
					<button className="icon-button large">
						
						<Bell/>
					</button>
				</div>
			</div>
			<div className="app-header-mobile">
				<button className="icon-button large">
					<List/>
				</button>
			</div>

		</header>
    </>
  )
}