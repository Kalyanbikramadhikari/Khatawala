import React  from 'react';
import './App.css';
import Bill from './components/bill';
import Purchase from './components/Purchase';
import Sales from './components/sales';

function App() {

  // const getData = async (url)=>{
  //   const newData = await fetch(url, {
  //     method: 'GET'
  //   })
  //   .then(res=>res.json());
  //   console.log(newData)

  // }
  // getData('/api');
  return (
    <div className="App">
      {/* <Purchase/> */}
      {/* <Sales/> */}
      <Bill/>
    
    </div>
  );
}

export default App;
