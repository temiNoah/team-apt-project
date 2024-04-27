import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { SiFramer } from "react-icons/si";
//import "../../styles/header.scss";
import "./header.scss"



const navLinks = [
    {
        id: 1,
        path: "/home",
        display: "Dashboard",
    },
    {
        id: 2,
        path: "/about",
        display: "Payment",
    },
    {
        id: 3,
        path: "/transaction",
        display: "Transaction",
    },
    {
        id: 4,
        path: "/cards",
        display: "Cards",
    },
    {
        id: 5,
        path: "/invoices",
        display: "Invoices",
    },
    {
        id: 6,
        path: "/insights",
        display: "Insights",
    },
];

const Header = () => {
    const menuRef = useRef<HTMLDivElement | null>(null);
    const toggleMenu = () => {
        if (menuRef.current) menuRef.current.classList.toggle("menu__active");
    }

    return (
        <header className="header">
            {/* ============ header top ============ */}
            {/* <div className="header__top">
                <Container>
                    <Row>
                        <Col lg="6" md="12" sm="12" xs="12">
                            <div className="header__top__left">
                                coolschgvhvhvhjjbjbjb
                            </div>
                        </Col>
                        <Col lg="6" md="12" sm="12" xs="12">
                            <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                                jdjfdkf
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div> */}


            {/* <div className="main__navbar" style={{ border: '1px solid #000', padding: 0 }}> */}
            <div style={{ display: 'flex', flex: 1, flexDirection: 'row', margin: 0, padding: 0 }}>
                <div className="logo" style={{ borderColor: 'red', backgroundColor: 'transparent', flex: 4, border: '0px solid #000', display: 'flex', flexDirection: 'row' }}>
                    <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-around', }}>
                        <Link to="/home" className=" d-flex align-items-center gap-2 App-log" style={{ border: '0px solid #000', justifyContent: 'center', textDecoration: 'none' }}>
                            {/* <img src={require('../../assets/all-images/header-logotype-autline-min.png')} /> */}

                        </Link>
                        <Link to="/home" className=" d-flex align-items-center gap-2 App-log" style={{ border: '0px solid red', justifyContent: 'center', alignItems: 'center', padding: 0, margin: 0, textDecoration: 'none', color: '#fff' }}>
                            {/* <img src={require('../../assets/all-images/header-logotype-autline-min.png')} /> */}
                            <SiFramer style={{ color: 'rgba(3,153,255,1)' }} />
                            <div style={{ border: '0px solid red' }}><span>Framer</span></div>
                            <div style={{ display: 'flex', flexDirection: 'column', border: '0px solid green', padding: 0, marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <i className="ri-arrow-drop-up-line" style={{ width: "10px", height: "10px", padding: 0, margin: 0 }} ></i>
                                <i className="ri-arrow-drop-down-line" style={{ width: "10px", height: "10px", padding: 0, margin: 0 }}></i>
                            </div>
                        </Link>
                    </div>
                    <div style={{ flex: 1 }}>

                    </div>

                </div>

                {/* <div className="navigation__wrapper d-flex align-items-center justify-content-betwee"> */}

                <div className="navigation" ref={menuRef} style={{ display: 'flex', flex: 8, border: '0px solid #000', height: '80px' }}>
                    <div className="menu" style={{ border: '0px solid #000', justifyContent: 'center', alignItems: 'center' }}>
                        {navLinks.map((item, index) => (
                            <NavLink
                                to={item.path}
                                className={(navClass) => {
                                    // console.log(navClass)
                                    return navClass.isActive ? "nav__active nav__item" : "nav__item"
                                }
                                }
                                key={index}
                                onClick={toggleMenu}
                            >
                                {item.display}

                            </NavLink>

                        ))
                        }
                    </div>
                </div>

                <div className="nav__righ" style={{ display: 'flex', flex: 3, backgroundColor: 'transparent', border: '0px solid transparent', alignItems: 'center', gap: 20 }}>
                    <div style={{ display: 'flex', flexDirection: 'row', border: '0px solid #000', gap: 10 }}>
                        <div className="search__bo">
                            {/* <input type="text" placeholder="Search" /> */}
                            <span>
                                <i className="ri-search-line" style={{ color: "#fff" }}></i>
                            </span>
                        </div>
                        <div>
                            <span><i className="ri-notification-4-line" style={{ color: "#fff" }}></i></span>
                        </div>
                    </div>
                    <div><span>|</span></div>
                    <div style={{ display: 'flex', flexDirection: 'row', border: '0px solid #000', justifyContent: 'center', alignItems: 'center', gap: 10 }} >
                        <div style={{ flex: 1 }}>
                            {/* <i className="ri-nft-line" style={{ color: "#fff" }}></i> */}
                            <i className="ri-settings-line" style={{ color: "#fff" }}></i>
                        </div>
                        <div style={{ borderRadius: '50%', border: '0px solid #000', flex: 1 }}>
                            <img src={require('../../assets/user.jpg')} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}
export default Header;