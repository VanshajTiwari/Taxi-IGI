"use client";
import { useState,useEffect } from 'react';
import { Browsers,Bell, List,CheckSquare, MagnifyingGlass, CaretDown, Lightning, CaretRight, Car, Swap, FileText, ClipboardText, FireSimple, Funnel, Plus, Gear  } from '@phosphor-icons/react/dist/ssr';
export default function PaymentCom(){
    const samplePaymentLogs = [
        { id: 1, date: '2024-01-01', amount: 50.00, method: 'Credit Card' },
        { id: 2, date: '2024-02-01', amount: 75.00, method: 'PayPal' },
        { id: 3, date: '2024-03-01', amount: 60.00, method: 'Bank Transfer' },
    ];
    const [paymentLogs, setPaymentLogs] = useState([]);

    useEffect(() => {
        // This would normally be a fetch call to an API
        // fetch('/api/payment-logs')
        //     .then(response => response.json())
        //     .then(data => setPaymentLogs(data));

        // Using sample data for this example
        setPaymentLogs(samplePaymentLogs);
    }, []);

  return (
    // <div style={{ width: '100%' }}>   
    // {paymentLogs.length > 0 ? (
    //     <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    //         <thead>
    //             <tr>
    //                 <th style={{ border: '1px solid black', padding: '8px' }}>Date</th>
    //                 <th style={{ border: '1px solid black', padding: '8px' }}>Amount</th>
    //                 <th style={{ border: '1px solid black', padding: '8px' }}>Method</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {paymentLogs.map(log => (
    //                 <tr key={log.id}>
    //                     <td style={{ border: '1px solid black', padding: '8px' }}>{log.date}</td>
    //                     <td style={{ border: '1px solid black', padding: '8px' }}>${log.amount.toFixed(2)}</td>
    //                     <td style={{ border: '1px solid black', padding: '8px' }}>{log.method}</td>
    //                 </tr>
    //             ))}
    //         </tbody>
    //     </table>
    // ) : (
    //     <p>No payment logs available.</p>
    // )}
    // </div>
    <section className="transfer-section w-full">
					<div className="transfer-section-header">
						<h2>Latest transfers</h2>
						<div className="filter-options">
							<p>Filter selected: more than 100 $</p>
							<button className="icon-button">
								{/* <i className="ph-funnel"></i> */}
								<Funnel weight="regular"/>
							</button>
							<button className="icon-button">
								{/* <i className="ph-plus"></i> */}
								<Plus weight="regular"/>
							</button>
						</div>
					</div>
					<div className="transfers">
						<div className="transfer">
							<div className="transfer-logo">
								<img src="https://assets.codepen.io/285131/apple.svg" />
							</div>
							<dl className="transfer-details">
								<div>
									<dt>Apple Inc.</dt>
									<dd>Apple ID Payment</dd>
								</div>
								<div>
									<dt>4012</dt>
									<dd>Last four digits</dd>
								</div>
								<div>
									<dt>28 Oct. 21</dt>
									<dd>Date payment</dd>
								</div>
							</dl>
							<div className="transfer-number">
								- $ 550
							</div>
						</div>
						<div className="transfer">
							<div className="transfer-logo">
								<img src="https://assets.codepen.io/285131/pinterest.svg" />
							</div>
							<dl className="transfer-details">
								<div>
									<dt>Pinterest</dt>
									<dd>2 year subscription</dd>
								</div>
								<div>
									<dt>5214</dt>
									<dd>Last four digits</dd>
								</div>
								<div>
									<dt>26 Oct. 21</dt>
									<dd>Date payment</dd>
								</div>
							</dl>
							<div className="transfer-number">
								- $ 120
							</div>
						</div>
						<div className="transfer">
							<div className="transfer-logo">
								<img src="https://assets.codepen.io/285131/warner-bros.svg" />
							</div>
							<dl className="transfer-details">
								<div>
									<dt>Warner Bros.</dt>
									<dd>Cinema</dd>
								</div>
								<div>
									<dt>2228</dt>
									<dd>Last four digits</dd>
								</div>
								<div>
									<dt>22 Oct. 21</dt>
									<dd>Date payment</dd>
								</div>
							</dl>
							<div className="transfer-number">
								- $ 70
							</div>
						</div>
					</div>
				</section>
  )
}
