import DashboardNav from '../navbar';
import { Browsers,Bell, List,CheckSquare, MagnifyingGlass, CaretDown, Lightning, CaretRight, Car, Swap, FileText, ClipboardText, FireSimple, Funnel, Plus, Gear  } from '@phosphor-icons/react/dist/ssr';
import "../style.scss";
import Link from 'next/link';
import PaymentCom from './paymentCom';
// Sample data for payment logs (this can be replaced with real data from an API)


const PaymentLogPage = () => {


    return (
        <>
            <DashboardNav/>
            <div className="app-body">
                <div className="app-body-navigation">
                    <nav className="navigation">
                        <Link href="/dashboard">
                            <Browsers weight="regular" size={20}/>
                            <span>Dashboard</span>
                        </Link>
                        <a href="#">
                            {/* <i className="ph-check-square"></i> */}
                            <CheckSquare weight="regular"  size={20}/>
                            <span>Scheduled</span>
                        </a>
                        <a href="#">
                            {/* <i className="ph-swap"></i> */}
                            <Swap weight="regular"  size={20}/>
                            <span>Transfers</span>
                        </a>
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
                        <h1>Taxi IGI<small>©</small></h1>
                        <div>
                            Project IGI ©<br />
                            All Rights Reserved 2024
                        </div>
                    </footer>
                </div>
                <div className='w-[1200px] flex justify-center'>
                    <PaymentCom/>
                </div>

           
         </div>
        </>
    );
};

export default PaymentLogPage;
