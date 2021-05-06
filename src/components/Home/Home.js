import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/context";
import Form from "../Form/Form";

const Home = () => {
  const [data, setData] = useContext(DataContext);
  const [invoices, setInvoices] = useState(data);
  const [filter, setFilter] = useState("all");

  //change filter status on button click
  const filterData = (status) => {
    setFilter(status);
  };

  //return filtered invoices after the status changes
  useEffect(() => {
    returnFiltered(filter);
  }, [filter]);

  //filter invoice function
  const returnFiltered = (status) => {
    //check if there are no filters
    if (status === "all") {
      setInvoices(data);
      //if there are filters, apply them
    } else {
      const filteredData = invoices.filter(
        (invoice) => invoice.status === status
      );
      setInvoices(filteredData);
    }
  };

  const addInvoice = (invoice) => {
    setData([...data, invoice]);
    setInvoices([...invoices, invoice]);
  };

  console.log(invoices);

  return (
    <div>
      <Form addInvoice={addInvoice} />
      <button onClick={() => filterData("all")}>All Invoices</button>
      <button onClick={() => filterData("paid")}>Paid</button>
      <button onClick={() => filterData("pending")}>Pending</button>
      <button onClick={() => filterData("draft")}>Draft</button>

      {invoices.map((invoice) => (
        <Link
          to={{
            pathname: `/invoice/${invoice.id}`,
            state: { invoice },
          }}
          key={invoice.id}
        >
          <div>{invoice.id}</div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
