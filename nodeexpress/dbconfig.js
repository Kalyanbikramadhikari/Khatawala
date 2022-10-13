

const config ={
    server: "DESKTOP-K0OTGK8\\SQLEXPRESS",
    database :"SQL Tutorial",
    options:{
        trustedconnection: true,
        enableArithAbort: true
    },
    port : 0 // to find the port address got to the sql server configuration manager 
    // and under sql server network configurationa and then protocols for we need TCP/IP enabled
    // double click and go to ip addresses now at last of IPALL there will be TCP Dynamic Ports
};

module.exports = config;
