import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/context";

const Home = () => {
  const [data, setData] = useContext(DataContext);
  return (
    <div>
      {data.map((invoice) => (
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
