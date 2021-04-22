import React from "react";
import { useLocation } from "react-router";

const Invoice = () => {
  const data = useLocation();
  const invoice = data.state.invoice;
  console.log(invoice);
  return (
    <div>
      <h1>{invoice.id}</h1>
    </div>
  );
};

export default Invoice;
