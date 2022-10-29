import React, { useEffect, useContext } from "react";
import Routing from "./Routing";
import Loader from "./layouts/Loader";
import { GlobalContext } from "./context/context";

const App = () => {
  const { loading, setLoading } = useContext(GlobalContext);

  useEffect(() => {
    (async () => {
      try {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        alert(error);
        setLoading(false);
      }
    })();
  }, []);

  return <>{loading ? <Loader /> : <Routing />}</>;
};

export default App;
