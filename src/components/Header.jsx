import { useTheme, createTheme, Button, useMediaQuery } from "@mui/material";
import { useState } from "react"; // Import useState for managing wallet connection state
import Logo from "../assets/img/logo.png";
import HeaderLogo from "../assets/img/Topbar-Logo.png";
import Web3 from "web3"; // Import Web3 for wallet connection
import "./style.css";
import "../App.css";

const Header = () => {
  const theme = createTheme({
    // Define the theme within the component
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1360, // Change the value of lg breakpoint here
        xl: 1920,
      },
    },
  });

  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg")); // Use the theme with useMediaQuery

  const [web3, setWeb3] = useState(null); // State to hold the Web3 instance
  const [accounts, setAccounts] = useState([]); // State to hold connected Ethereum accounts

  // Function to initialize Web3 and connect to MetaMask
  const initWeb3 = async () => {
    if (window.ethereum) { // Check if MetaMask is installed
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' }); // Request account access
        const web3Instance = new Web3(window.ethereum); // Create a new Web3 instance
        setWeb3(web3Instance); // Set the web3 instance in state
        const accounts = await web3Instance.eth.getAccounts(); // Get connected accounts
        setAccounts(accounts); // Update state with connected accounts
      } catch (error) {
        console.error("Error connecting to MetaMask:", error); // Log any errors during connection
      }
    } else {
      alert("Please install MetaMask!"); // Alert user if MetaMask is not installed
    }
  };

  return isLargeScreen ? (
    <div className="header-background">
      <div className="header-justify">
        <img src={Logo} alt="Logo image" className="logo-image" />
        <img
          src={HeaderLogo}
          alt="Header Logo image"
          className="header-logo-image"
        />
        
        {/* Container for buttons */}
        <div style={{ display: 'flex', gap: '10px' }}> {/* Flex container for buttons */}
          {/* Connect Wallet Button */}
          <Button
            variant="contained"
            className="gradient-button font-header flow-container" 
            onClick={initWeb3} 
            sx={{
              paddingY: "5px", // Reduced padding for smaller buttons
              paddingX: "10px", // Reduced horizontal padding for smaller buttons
              fontSize: "0.875rem", // Smaller font size for buttons
            }}
          >
            <div className="not-flow-content font-header">Connect Wallet</div>
          </Button>

          {/* Trade on Thetaswap Button */}
          <Button
            variant="contained"
            className="gradient-button font-header flow-container" 
            href="https://swap.thetatoken.org/swap" 
            target="_blank" 
            rel="noopener noreferrer" 
            sx={{
              paddingY: "5px", // Reduced padding for smaller buttons
              paddingX: "10px", // Reduced horizontal padding for smaller buttons
              fontSize: "0.875rem", // Smaller font size for buttons
            }}
          >
            <div className="not-flow-content font-header">Trade on Thetaswap</div>
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <>
      <div className="header-background">
        <div className="header-justify" style={{ marginBottom: "20px" }}>
          <img
            src={Logo}
            alt="Logo image"
            className="logo-image"
            style={{ width: "50%" }}
          />
          
          {/* Container for buttons */}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}> {/* Flex container for buttons */}
            {/* Connect Wallet Button for smaller screens */}
            <Button
              variant="contained"
              className="gradient-button font-header flow-container" 
              onClick={initWeb3} 
              sx={{
                paddingY: "5px", // Reduced padding for smaller buttons
                paddingX: "10px", // Reduced horizontal padding for smaller buttons
                fontSize: "0.875rem", // Smaller font size for buttons
                width: '50%', // Optional width adjustment (can be removed)
              }}
            >
              <div className="not-flow-content font-header">Connect Wallet</div>
            </Button>

            {/* Trade on Thetaswap Button */}
            <Button
              variant="contained"
              className="gradient-button font-header flow-container" 
              href="https://swap.thetatoken.org/swap" 
              target="_blank" 
              rel="noopener noreferrer" 
              sx={{
                paddingY: "5px", // Reduced padding for smaller buttons
                paddingX: "10px", // Reduced horizontal padding for smaller buttons
                fontSize: "0.875rem", // Smaller font size for buttons
                width: '50%', // Optional width adjustment (can be removed)
              }}
            >
              <div className="not-flow-content font-header">
                Trade on Thetaswap
              </div>
            </Button>
          </div>
        </div>
        
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={HeaderLogo}
            alt="Header Logo image"
            className="header-logo-image"
          />
        </div>
      </div>
    </>
  );
};

export { Header };
