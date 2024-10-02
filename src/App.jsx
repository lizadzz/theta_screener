import "./App.css";
import RoutesComponent from "./routes";
import { Helmet } from "react-helmet";
import favicon from "./assets/img/tokens/wtheta.png";
import { useEffect, useState } from "react";
import Web3 from "web3";

function App() {
    const [web3, setWeb3] = useState(null);
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const initWeb3 = async () => {
            if (window.ethereum) {
                try {
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const web3Instance = new Web3(window.ethereum);
                    setWeb3(web3Instance);
                    const accounts = await web3Instance.eth.getAccounts();
                    setAccounts(accounts);
                } catch (error) {
                    console.error("Error connecting to MetaMask:", error);
                }
            } else {
                alert("Please install MetaMask");
            }
        };
        initWeb3();
    }, []);

    return (
        <div className="App">
            <Helmet>
                <title>Theta Screener</title>
                <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
            </Helmet>
            <RoutesComponent />
            <h1>Connected Accounts</h1>
            <ul>
                {accounts.map(account => (
                    <li key={account}>{account}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
