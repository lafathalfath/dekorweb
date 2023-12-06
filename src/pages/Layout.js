import { Outlet, Link, NavLink } from "react-router-dom";
import "./Layout.css";
import logo from '../assets/img/logo(Ls).png';
import { useState } from "react";

const Layout=()=>{
    const [navOpen, setNavOpen] = useState(false);

    const navToggle = ()=>{
        setNavOpen(!navOpen)
    };

    return(
        <>{/* wajib */}
            <header>
                <div>
                    <Link to="/">
                        <img src={logo} alt="logo" className="logo"/>
                    </Link>
                </div>
                <div className="nav-container">
                    <button className="toggle-nav" onClick={navToggle}>&#9776;</button>
                    <nav id="nav-active" className={`navbar ${navOpen?'open' : ''}`}>
                        <NavLink exact to="/" id="beranda" className="navigator" activeClassName="active">Beranda</NavLink>
                        <NavLink to="/services" className="navigator" activeClassName="active">Layanan</NavLink>
                        <NavLink to="/catalog" className="navigator" activeClassName="active">Katalog</NavLink>
                        <NavLink to="/order" className="navigator" activeClassName="active">Pesan</NavLink>
                        <NavLink to="/contact" className="navigator" activeClassName="active">Kontak</NavLink>
                    </nav>
                </div>
            </header>
            <Outlet/>
        </>
    )
};

export default Layout;

