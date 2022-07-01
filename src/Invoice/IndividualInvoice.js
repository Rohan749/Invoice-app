import React, { useState } from "react";
import Moment from 'moment';

const IndividualInvoice = (props) => {

  let duedate = props.dueDate;
  let createddate = props.createdAt;
  let updateddate = props.updatedAt;

  let newDueDate = Moment(duedate).format('DD-MM-YYYY')
  let newCreatedDate = Moment(createddate).format('DD-MM-YYYY')
  let newUpdatedDate = Moment(updateddate).format('DD-MM-YYYY') 

  

  const [val, setVal] = useState(false);

  const valChangeHandler = () => {
      if(!val)
        setVal(true);

      else setVal(false);
  }

  return (
    <div>
      
      <div className="container shadow mt-5 p-5 " onClick={valChangeHandler}>
        <h2>{props.name}</h2>
      </div>
      {val && <div className="container shadow mt-10 p-10 w-50">
        <div className="card-header bg-primary text-white">
          <h3 className="mt-2 p-3">Product Name: {props.productName}</h3>
        </div>
        <div className="row">
          <div className="mx-5 col-5">
            <p>Quantity: {props.quantity}</p>
            <p>Price: ${props.price}</p>
            <p>Amount: ${props.amount}</p>
          </div>
          <div className="col-5">
            <p>Created: {newCreatedDate}</p>
            <p>Updated: {newUpdatedDate}</p>
            <p>Due Date: {newDueDate}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-5 mx-5">
            <p>Bill No: {props.billNo}</p>
            <p>Gross Amount: ${props.grossAmount}</p>
            <p>GST Amount: ${props.gstAmount}</p>
          </div>
          <div className="col-5">
            <p>Net Amount: ${props.amount}</p>
            <p>Status: {props.status}</p>
            <p>Note: {props.notes}</p>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default IndividualInvoice;
