import {Outlet} from "react-router-dom";
import Header from "../components/header";

/**
 * @author SIPOUFO Yvan
 *
 * General index use for centralize all component
 * @return {JSX.Element}
 * @constructor
 */
const GeneralIndex = () => {
    return (
        <div className="h-screen w-screen flex justify-center bg-black-08">
            <div className="relative flex flex-col max-w-screen-2xl w-full h-full">
                {/*Header*/}
                <Header />

                {/* Entries components*/}
                <Outlet/>
            </div>
        </div>
    );
}

export default GeneralIndex;