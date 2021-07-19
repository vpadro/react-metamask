import { useStoreApi } from "./storeApi";
import useWeb3 from "./useWeb3";


import "./App.css";
import EthLogo from "./img/Eth.png";

function App() {
  const { balance, address, message, setAddress,  } = useStoreApi();
  const web3 = useWeb3();

  // get user account on button click
  const getUserAccount = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        web3.eth.getAccounts().then(accounts => {
          setAddress(accounts[0]);
       
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Nie wykryto rozszerzenia MetaMask!");
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={EthLogo} className="App-logo" alt="logo" />
        <p>

        </p>
        
        {address ? (
          <>
            <p> Adres konta {address}</p>
            <p> Saldo: {balance} </p>
          </>
        ) : null}
        <button
          onClick={() => getUserAccount()}
          variant="outlined"
          color="primary"
          class="button"
        >
         Połącz z MetaMask
        </button>
        {message ? (
          <p>
            <code>{message}</code>
          </p>
        ) : null}
      </header>
    </div>
  );
}

export default App;
