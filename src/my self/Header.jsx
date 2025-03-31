// Header.jsx
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <header style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
            <nav style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 20px",
                background: "linear-gradient(45deg, #ff6b6b, #556270)",
                color: "#fff",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.3)"
            }}>
                <div style={{ fontSize: "1.8rem", fontWeight: "bold", letterSpacing: "1px" }}>
                    Super Shop
                </div>
                <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
                    {["Home", "About", "Services", "Shop", "Blog", "Contact"].map((item, index) => (
                        <motion.li key={index} style={{ margin: "0 15px" }} whileHover={{ scale: 1.1 }}>
                            <a href={`#${item.toLowerCase()}`} style={{ color: "#fff", textDecoration: "none", fontSize: "1.2rem" }}>{item}</a>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
