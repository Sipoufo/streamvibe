import {Route, Routes} from "react-router-dom";
import GeneralIndex from "../pages/general-index";

/**
 * @author SIPOUFO Yvan
 *
 * Function use for define and manage all routes of app
 * @return {JSX.Element}
 * @constructor
 */
const RouterManagement = () => {
    return (
      <Routes>
          <Route path="/" element={<GeneralIndex />}>

          </Route>
      </Routes>
    );
}

export default RouterManagement;