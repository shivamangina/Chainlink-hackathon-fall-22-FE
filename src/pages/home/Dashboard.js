import React, { useContext, useState } from "react";
import { getName } from "../../utils/contractUtil";
import { GlobalContext } from "../../context/context";

const Dashboard = () => {
  const { Contract } = useContext(GlobalContext);
  const [name, setName] = useState(null);

  const getNameContract = async () => {
    const name = await getName(Contract);
    setName(name);
  };

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={getNameContract}>Get Contract Name</button>
      <h3>name: {name}</h3>
    </>
  );
};

export default Dashboard;
