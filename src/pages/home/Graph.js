import { createClient } from "urql";
import { useEffect, useState } from "react";
import Config from "../../Config";

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
    <div>
      <table>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Value</th>
        </tr>
        {transfers.map((transfer, index) => (
          <tr key={index}>
            <td>{transfer.from}</td>
            <td>{transfer.to}</td>
            <td>{transfer.value}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
