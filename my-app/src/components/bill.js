import '../style.css'
import React from 'react';
function Bill() {
    return ( 
        <div>
            
            <div className="bill-header">
                <div className = "colored-box">
                    
                </div>
            </div>
            <div className='bill-body'>
                <div className='bill-top'>
                    {/* <div className='image'>
                            <img src="" alt=""/>
                    </div> */}
                    <div className='company'>
                        <span>Khatawala</span><br/>
                        <span><i class="fa-solid fa-location-dot"></i> Kathmandu, Nepal</span><br/>
                        <span><i class="fa-solid fa-mobile-screen-button"></i> 9861342678</span>
                        
                        
                    </div>
                    <div className='Buyers-details'>
                        Name: Kalyan Bikram Adhikari<br/>
                        VAT_NO: 3498217309h9832hye<br/>
                        Phone Number: 34109237974

                        
                    </div>
                    <div className='fields'>
                        <span>Date:<input type="datetime-local" id="birthdaytime" name="birthdaytime"/></span>
                    </div>
                 </div>
            </div>
            <div className='bill-table'>
                <table>
                    <th>
                        <td>S.N.</td>
                        <td>Product Name</td>
                        <td>Unit Price</td>
                        <td>Quantity</td>
                        <td>Total</td>

                    </th>
                    <tr>
                        <td>1</td>
                        <td>soiwek Name</td>
                        <td>4</td>
                        <td>8</td>
                        <td>6465</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>soiwek Name</td>
                        <td>4</td>
                        <td>8</td>
                        <td>6465</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>soiwek Name</td>
                        <td>4</td>
                        <td>8</td>
                        <td>6465</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>soiwek Name</td>
                        <td>4</td>
                        <td>8</td>
                        <td>6465</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>soiwek Name</td>
                        <td>4</td>
                        <td>8</td>
                        <td>6465</td>
                    </tr>
                </table>
            </div>
            <div className='payment-details'>
                <span>Subtotal:</span><br/>
                <span>VAT Amount:</span><br/>
                <span>Payable Amount</span>

                
            </div>
            <div className='bill-printer'>
                <button className='Print-bill' type="submit"><i class="fa-sharp fa-solid fa-print"></i>Print</button>
            </div>
            {/* <div className='bill-footer'>
                Thank you 
            </div> */}
            
            <div className='bill-footer'>
            {/* <div className='footer-texts'>
                    <span>Thank you for buying with us. </span>
                </div> */}
               <div className='texts-footer'>
                    <span>Thank you for buying with Khatawala</span>
               </div>
             
                
            </div>
            <div className = "colored-box1">
                    
                    
            </div>
        </div>
     );
}

export default Bill;