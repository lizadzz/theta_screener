import "./App.css"; // Importing the main CSS file for styling the application
import RoutesComponent from "./routes"; // Importing the RoutesComponent for handling different routes
import { Helmet } from "react-helmet"; // Importing Helmet for managing document head elements
import favicon from "./assets/img/tokens/wtheta.png"; // Importing a favicon image

function App() {
    return (
        <div className="App">
            <Helmet>
                <title>Theta Screener</title> {/* Set the title of the webpage */}
                <link rel="icon" type="image/png" href={favicon} sizes="16x16" /> {/* Set favicon */}
            </Helmet>
            
            {/* Render routes defined in RoutesComponent */}
            <RoutesComponent />
        </div>
    );
}

// Exporting the App component as default for use in other parts of the application
export default App;
