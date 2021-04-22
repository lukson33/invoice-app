import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/context";

const Home = () => {
  const [data, setData] = useContext(DataContext);
  const [invoices, setInvoices] = useState(data);
  const [filter, setFilter] = useState("all");

  const filterData = (status) => {
    setFilter(status);
  };

  useEffect(() => {
    // if (filter === "paid") {
    //   const filteredData = data.filter((invoice) => invoice.status === "paid");
    //   setInvoices(filteredData);
    // } else if (filter === "pending") {
    //   const filteredData = data.filter(
    //     (invoice) => invoice.status === "pending"
    //   );
    //   setInvoices(filteredData);
    // }
    returnFiltered(filter);
  }, [filter]);

  const returnFiltered = (status) => {
    if (status === "all") {
      setInvoices(data);
    } else {
      const filteredData = data.filter((invoice) => invoice.status === status);
      setInvoices(filteredData);
    }
  };

  return (
    <div>
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
