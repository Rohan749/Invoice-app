import React from "react";
import InputBox from "./Invoice/InputInvoice/InputBox";
import Invoices from "./Invoice/Invoices";
import Search from "./Invoice/SearchInvoice/Search";
import useFetch from "./useFetch";


function App() {

const {data, loading, error} = useFetch('https://rscdev.taxadda.com/api/invoice/list');

  if(loading) {
    return (
      <div class="text-center mt-50 border border-primary m-100">
        <div class="spinner-border" role="status">
          
        </div>
      </div>
    )
  }

  if(error) console.log(error);


  const onSubmitNewData = (newData) => {
    console.log(newData);
  }

  

  return (
    <div className="App" class="text-center">
     <nav className="navbar nav-expand navbar-dark bg-primary">
        <ul className="navbar-nav fs-5 text-white">
            <h1>INVOICE APP</h1>
        </ul>
     </nav>
       <InputBox newInvoiceData={onSubmitNewData}/>
       <Invoices data={data} />
    </div>
    
  );
}

export default App;
