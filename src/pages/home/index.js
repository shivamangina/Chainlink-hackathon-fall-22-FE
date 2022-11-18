import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/context";
import Config from "../../Config";
import Table from "./Table";
import Widget from "./Widget";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

function App() {
  const {
    organization,
    setOrganization,
    transactions,
    setTransactions,
    addTransaction,
    Contract,
  } = useContext(GlobalContext);
  useEffect(() => {
    (async () => {
      const _transactions = await Contract.getAllTransactions();
      await setTransactions(_transactions);
    })();
  }, []);

  useEffect(() => {
    Contract.on("TransactionAdded", async (transaction) => {
      await addTransaction(transaction);
    });
  }, []);

  return (
    <>
      <Widget transactions={transactions || []} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 mb-7">
        <Table
          className="relative flex items-center"
          transactions={transactions || []}
          tableType=""
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <LineChart
          transactions={transactions || []}
          className="relative flex items-center"
        />
        <BarChart
          transactions={transactions || []}
          className="relative flex items-center space-x-3"
        />
      </div>
    </>
  );
}

export default App;
