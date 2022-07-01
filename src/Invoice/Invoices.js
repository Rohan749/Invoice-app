import React from "react";
import IndividualInvoice from "./IndividualInvoice";

const Invoices = (props) => {


    const productName = props.data?.invoices[0].lineItem[0].productName;    
    const productId = props.data?.invoices[0].lineItem[0].productId;
    const quantity = props.data?.invoices[0].lineItem[0].quantity;
    const price = props.data?.invoices[0].lineItem[0].price;
    const amount = props.data?.invoices[0].lineItem[0].amount;
    const gstAmount = props.data?.invoices[0].lineItem[0].gstRate;

    let listItems = props.data?.invoices.map(
        (invoice) => {
          return (
            <IndividualInvoice 
            key={invoice._id}
            name={invoice.name}
            dueDate={invoice.dueDate}
            billNo={invoice.billNo}
            billDate={invoice.billDate}                   
            grossAmount={invoice.grossAmount}
            netAmount={invoice.netAmount}
            notes={invoice.notes}
            status={invoice.status}
            createdAt={invoice.createdAt}
            updatedAt={invoice.update}

            productId={productId}
            productName={productName}
            quantity={quantity}
            price={price}
            gstAmount={gstAmount}
            amount={amount}
            />
          )
        })
        

    return listItems;
}

export default Invoices;