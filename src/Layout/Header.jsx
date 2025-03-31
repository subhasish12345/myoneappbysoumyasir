import { Link } from "react-router-dom";

function Header() {
    return (
       <>
        <p>ohoh JHIM JHIM</p>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/myeffect"}>Use Effect And Routing</Link>
        <Link to={"/myapth"}>Navigation</Link> <Link to={"/mapdata"}>Map Data</Link> {/* New Link for Map Data */}
        <Link to={"/mycontext"}>My Context</Link>
        <Link to={"/mycallback"}>My CallBack</Link> {/* New Link for My CallBack */}
        <Link to={"/formhandeling"}>Form Handeling</Link> {/* New Link for Form Handeling */}
        <Link to={"/apiconnectivity"}>API Connectivity</Link> {/* New Link for API Connectivity */}
        <Link to ={"/cimethod"}>CI Method  </Link>
        
       </>
    )
}

export default Header;
