import DashboardNav from '../topNav';
import { Browsers,Bell, List,CheckSquare, MagnifyingGlass, CaretDown, Lightning, CaretRight, Car, Swap, FileText, ClipboardText, FireSimple, Funnel, Plus, Gear  } from '@phosphor-icons/react/dist/ssr';
import "../style.scss";
import Link from 'next/link';
import PaymentCom from './paymentCom';
import SideNav from '../sideNav';
// Sample data for payment logs (this can be replaced with real data from an API)


const PaymentLogPage = () => {


    return (
        <>
            <DashboardNav/>
            <div className="app-body">
                <SideNav/>
                <div className='w-[1200px] flex justify-center'>
                    <PaymentCom/>
                </div>

           
         </div>
        </>
    );
};

export default PaymentLogPage;
