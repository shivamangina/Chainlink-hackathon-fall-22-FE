import { createClient } from "urql";
import { useEffect, useState } from "react";
import Config from "../../Config";
import TableReceived from "./TableReceived";
import TableSent from "./TableSent";
import Widget from "./Widget";
import Chart from "./ChartSent";
import Chart2 from "./ChartReceieved";

const API_URL = Config.GRAPH_PROTOCOL.API_URL;

const query = `
  query {
    transfers(
        first: 5
        orderBy: id
        orderDirection:desc
        ) {
        id
        from
        to
        value
      }
  }
`;

const client = createClient({
  url: API_URL,
});

function App() {
  const [transfers, setTransfers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const response = await client.query(query).toPromise();
    console.log("response:", response);
    setTransfers(response.data.transfers);
  }
  return (
    <>
      <Widget />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TableSent className="relative flex items-center space-x-3" />
        <Chart className="relative flex items-center space-x-3" />
        <TableReceived className="relative flex items-center space-x-3" />
        <Chart2 className="relative flex items-center space-x-3" />
      </div>
    </>
  );
}

export default App;
