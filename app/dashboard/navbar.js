import { MagnifyingGlass, Bell, List } from "@phosphor-icons/react/dist/ssr"
export default function DashboardNav(){
  return (
    <>
            <header className="app-header">
			<div className="app-header-logo">
				<div className="logo">
					<span className="logo-icon">
						<img src="https://assets.codepen.io/285131/almeria-logo.svg" />
					</span>
					<h1 className="logo-title">
						<span>Taxi IGI</span>
						<span className='text-[10px]'>Powered by Project IGI</span>
					</h1>
				</div>
			</div>
			<div className="app-header-navigation">
				<div className="tabs">
					<a href="#" className="active">
						Overview
					</a>
					<a href="#">
						Payments Log
					</a>
					<a href="#">
						Notifications
					</a>
					<a href="#">
						Account
					</a>
					<a href="#">
						Settings
					</a>
					{/* <a href="#">
						Business
					</a> */}
				</div>
			</div>
			<div className="app-header-actions">
				<button className="user-profile">
					<span>Vanshaj Tiwari</span>
					<span>
						<img src="https://assets.codepen.io/285131/almeria-avatar.jpeg" />
					</span>
				</button>
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