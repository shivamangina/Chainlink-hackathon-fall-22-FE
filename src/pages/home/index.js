import Config from "../../Config";
import TableReceived from "./TableReceived";
import TableSent from "./TableSent";
import Widget from "./Widget";
import Chart from "./ChartSent";
import Chart2 from "./ChartReceieved";


function App() {
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
