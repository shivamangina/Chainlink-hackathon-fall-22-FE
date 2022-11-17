import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/context";
import Config from "../../Config";
import Table from "./Table";
import Widget from "./Widget";
import Chart from "./ChartSent";
import Chart2 from "./ChartReceieved";


function App() {
  const { organization, setOrganization, transactions, setTransactions, addTransaction, Contract } = useContext(GlobalContext);
  useEffect(() => {
    (async() => {
      // const _organisation = await Contract.functions.getAllOrganisation("something")
      // await setOrganization(_organisation);

      const _transactions = await Contract.functions.getAllTransactions()
      await setTransactions( _transactions[0]);
    })();
  }, [])

  useEffect(() => {
    Contract.on("TransactionAdded", async (transaction) => {
      await addTransaction(transaction);
    });
  }, [])

  return (
    <>
      <Widget transactions={transactions || []} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
        <Table className="relative flex items-center space-x-12" transactions={transactions || []} tableType=""  />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Chart className="relative flex items-center space-x-3" />
        {/* <Table className="relative flex items-center space-x-3" transactions={transactions || []} tableType="Recieved"  /> */}
        <Chart2 className="relative flex items-center space-x-3" />
      </div>
    </>
  );
}

export default App;
