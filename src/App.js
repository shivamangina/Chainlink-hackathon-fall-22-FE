import React, { useEffect, useContext } from "react";
import Routing from "./Routing";
import Loader from "./layouts/Loader";
import { GlobalContext } from "./context/context";
import { ethers } from "ethers";
import Config from "./Config";

const App = () => {
  const { loading, addWeb3ProviderToContext, setLoading } =
    useContext(GlobalContext);

  useEffect(() => {
    (async () => {
      try {
        if (!window.ethereum) {
          return;
        }
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.listAccounts();
        const network = await provider.getNetwork();
        if (network.name !== Config.CHAIN_LINK.network)
          throw Error(
            `You are using ${network.name}, Please switch to ${Config.CHAIN_LINK.network} to use our App`
          );
        const signer = provider.getSigner();
        const Contract = new ethers.Contract(
          Config.CHAIN_LINK.GOERLI.CONTRACT_ADDRESS,
          Config.CHAIN_LINK.GOERLI.ABI,
          signer
        );
        await addWeb3ProviderToContext({
          provider,
          signer,
          accounts,
          Contract,
        });
        setLoading(false);

      } catch (error) {
        if (!error.message.includes("No User Found")) alert(error);
        setLoading(false);
      }
    })();
  }, [window.ethereum]);

  return <>{loading ? <Loader /> : <Routing />}</>;
};

export default App;
