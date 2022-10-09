import React  from 'react';
import '../style.css'
import Materialpurchase from './Materialpurchase';
function Purchase() {


    return ( 
        < div className="Purchase-section">
            <h1 className="Purchase-heading">Purchase Bill</h1>
            <div className="box">
                <div className="bill-input">
                    <div className="margin-around"> 
                        <span>Bill NO:</span>
                        <input placeholder="Enter bill No here."></input>
                    </div>
                    <div className="margin-around">
                        <span>PAN NO:</span>
                        <input placeholder="Enter VAT No here."></input>
                    </div>
                    <div className="margin-around">
                        <span>Bill type:</span>
                        <input placeholder="Enter bill Type."></input>
                    </div>

                </div>
                    
                <div className="bill-input2">
                    <div className="margin-around"> 
                        <span> Supplier's Name:</span>
                        <input placeholder="Customer's Name here."></input>
                    </div>
                    <div className="margin-around"> 
                        <span>Supplier's Phone Number:</span>
                        <input placeholder="Phone Number here."></input>
                    </div>
                    <div className="margin-around"> 
                        <span>Supplier's Address:</span>
                        <input placeholder="Phone Number here."></input>
                    </div>
                </div>
            </div>

            <Materialpurchase/>

            
        </div>
     );
}

export default Purchase;