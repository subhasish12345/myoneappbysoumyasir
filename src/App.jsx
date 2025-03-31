import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './mycomponent/MainLayout';
import MapData from './mycomponent/MapData'; // Import MapData
import About from './mycomponent/About'; // Import About
import Contact from './mycomponent/Contact'; // Import Contact
import MyNavigate from './mycomponent/MyNavigate'; // Import Use Effect and Routing
import { MyProvider } from './mycomponent/MyContext'; // Import MyProvider
import DisplayContext from './mycomponent/DisplayContext'; // Import DisplayContext
import MyCallBack from './mycomponent/MyCallBack'; // Import MyCallBack
import FormHandeling from './mycomponent/FormHandeling';
import ApiConnectivity from './mycomponent/ApiConnectivity'; // Import ApiConnectivity

import CIMethod from './mycomponent/CIMethod'; // Import CIMethod

function App() {
    return (
        <MyProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />} />
                    <Route path="/mapdata" element={<MapData />} /> {/* New Route for Map Data */}
                    <Route path="/about" element={<About />} /> {/* Route for About */}
                    <Route path="/contact" element={<Contact />} /> {/* Route for Contact */}
                    <Route path="/myeffect" element={<MyNavigate />} /> {/* Route for Use Effect and Routing */}
                    <Route path="/mycontext" element={<DisplayContext />} /> {/* Route for My Context */}
                    <Route path="/mycallback" element={<MyCallBack />} /> {/* Route for My CallBack */}
                    <Route path="/formhandeling" element={<FormHandeling />} /> {/* Route for My CallBack */}
                    <Route path="/apiconnectivity" element={<ApiConnectivity />} /> {/* Route for My CallBack */}
                    <Route path="/cimethod" element={<CIMethod  favcolor = "blue"/>} /> {/* Route for My CallBack */}
                    </Routes>  
            </BrowserRouter>
        </MyProvider>
    );
}

export default App;
