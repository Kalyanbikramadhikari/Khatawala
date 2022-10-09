import React, { useState } from 'react'
import "../style.css"
import MaterialTable from 'material-table'
function Materialpurchase() {
    const [tableData, setTableData]= useState([
        {product_name: "Noodles", unit_price:20, quantity:3,},
        {product_name: "Noodles", unit_price:30, quantity:3,},
        {product_name: "Noodles", unit_price:40, quantity:3,},
        {product_name: "Noodles", unit_price:50, quantity:3,},
        {product_name: "Noodles", unit_price:20, quantity:3,},
        {product_name: "Noodles", unit_price:60, quantity:3,},
        {product_name: "Noodles", unit_price:90, quantity:3,},
    ])

    const columns = [
        {title:"Product Name" , field:'product_name', filterPlaceholder:"Filter By Product Name"},
        {title:"Unit Price" , field:'unit_price', align:"left", filtering: false, type: "currency", currencySetting:{currencyCode:"NPR"}},
        {title:"Quantity" , field:'quantity', filtering: false},
        {title:"Total Price" , field:'numeric',filtering: false},
        // {title:"" field:'name'},
        // {title:"Product Name" field:'name'},
    ]
    return (  
        <div className='material-body'>
            
        
            <div className='table-body'>
                <MaterialTable columns={columns} data = {tableData} title = "Purchase Information" 
                editable={{
                    onRowAdd:(newRow)=>new Promise ((resolve, reject)=>{
                        // setTableData([...tableData, newRow])
                        
                        console.log(newRow)
                        setTimeout(() => {
                            resolve()
                        }, 500);
                        
                    }),
                    onRowUpdate: (newRow, oldRow)=>new Promise((resolve, reject)=>{
                        const Datas = [...tableData]
                        Datas[oldRow.tableData.id]=newRow
                        setTableData(Datas)

                        setTimeout(() => {
                            resolve()
                        }, 500);
                    }), 
                    onRowDelete: (selectedrow)=>new Promise((resolve, reject)=>{
                        const datas = [...tableData]
                        datas.splice(selectedrow.tableData.id,1)
                        setTableData(datas)

                        setTimeout(() => {
                            resolve()
                        }, 500);
                    })
                }}
                options={{
                    searchFieldAlignment:"right",  searchAutoFocus: true , searchFieldVariant: "outlined" , 
                    filtering: true,
                    paging:true, pageSizeOptions:[5,10,50,100], showFirstLastPageButtons:false, paginationPosition:"top",
                    exportButton: true, 
                    addRowPosition: "first", actionsColumnIndex:-1,
                }}
                />
            </div>

            <div className='table-right'>
                <span>No of Products:</span><br/>
                <span> VAT Amount:</span><br/>
                <span>Total Price:</span><br/>
                <button type="button"className="sales-submit"><a href="#">Print Bill</a></button>
               
            </div>

        </div>
    );
}

export default Materialpurchase;