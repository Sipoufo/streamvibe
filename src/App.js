import {BrowserRouter} from "react-router-dom";
import RouterManagement from "./routes/route-management";

/**
 * @author SIPOUFO Yvan
 *
 * Entry app
 * @return {JSX.Element}
 * @constructor
 */
function App() {
  return (
    <BrowserRouter>
      <RouterManagement />
    </BrowserRouter>
  );
}

export default App;
