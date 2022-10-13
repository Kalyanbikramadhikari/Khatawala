var config = require('./dbconfig')
const sql = require('mssql');


async function get_Data(){
    try {
        const pool = await sql.connect(config);
        const res = await pool.request().query("select * from Purchase")
        console.log(recordsets)
        return res.recordsets;
    } catch (error) {
       console.log(error) 
    }
}

module.exports = get_Data;
