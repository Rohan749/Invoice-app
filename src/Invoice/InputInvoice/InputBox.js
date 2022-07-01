import React, { useState } from "react";

const initialValues = {
    ProductName: "",
    Quantity: "",
    Price: "",
    Amount: "",
    Created: "",
    Updated: "",
    DueDate: "",
    BillNo: "",
    GrossAmount: "",
    GstAmount:"",
    NetAmount: "",
    Status: "",
    Note: "" 
  }

const InputBox = (props) => {
  const [status, setStatus] = useState(false);
  const [values, setValues] = useState(initialValues);

  const statusHandler = () => {
    if (!status) setStatus(true);
    else setStatus(false);
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    setValues({
        ...values,
        [name]: value
    })
  }

  const addButtonHandler = (event) => {
    event.preventDefault();
    props.newInvoiceData(values);
  }

  return (
    <>
      <button
        type="button"
        onClick={statusHandler}
        class="btn btn-primary mt-2"
      >
        Add new Content
      </button>
      {status && (
        <div className="container shadow mt-10 p-10 w-50">
          <div className="row w-100 mt-5 h-50 ">
            <div className="mx-5 col-5">
              <p>
                Product Name:<input type="text" name="ProductName" onChange={inputChangeHandler}></input>
              </p>
              <p>
                Quantity: <input type="number" name="Quantity" onChange={inputChangeHandler}></input>
              </p>
              <p>
                Price: $<input type="number" name="Price" onChange={inputChangeHandler}></input>
              </p>
              <p>
                Amount: $<input type="number" name="Amount" onChange={inputChangeHandler}></input>
              </p>
            </div>
            <div className="col-5">
              <p>
                Created: <input type="date" name="Created" onChange={inputChangeHandler}></input>
              </p>
              <p>
                Updated: <input type="date" name="Updated" onChange={inputChangeHandler}></input>
              </p>
              <p>
                Due Date: <input type="date" name="DueDate" onChange={inputChangeHandler}></input>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-5 mx-5">
              <p>
                Bill No: <input type="number" name="BillNo" onChange={inputChangeHandler}></input>
              </p>
              <p>
                Gross Amount: $<input type="number" name="GrossAmount" onChange={inputChangeHandler}></input>
              </p>
              <p>
                GST Amount: $<input type="number" name="GstAmount" onChange={inputChangeHandler}></input>
              </p>
            </div>
            <div className="col-5">
              <p>
                Net Amount: $<input type="number" name="NetAmount" onChange={inputChangeHandler}></input>
              </p>
              <p>
                Status: <input type="text" name="Status" onChange={inputChangeHandler}></input>
              </p>
              <p>
                Note: <input type="text" name="Note" onChange={inputChangeHandler}></input>
              </p>
            </div>
            <button type="button" onClick={addButtonHandler} class="btn btn-primary mt-2 w-50">
              Add
            </button>
            <button type="button" onClick={statusHandler} class="btn btn-danger mt-2 w-50">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default InputBox;
