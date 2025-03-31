import React from "react";
import { motion } from "framer-motion";

const Body = () => {
    const products = [
        { name: "Superman", description: "The Man of Steel, protector of Metropolis with super strength and flight.", bgColor: "linear-gradient(to right, #ff0000, #0000ff)", logo: "superman.png" },
        { name: "Batman", description: "The Dark Knight, Gotham's detective with unmatched intellect and combat skills.", bgColor: "linear-gradient(to right, #000000, #434343)", logo: "batman.png" },
        { name: "Wonder Woman", description: "Amazonian warrior princess with divine power and indestructible bracelets.", bgColor: "linear-gradient(to right, #ffcc00, #ff0000)", logo: "wonderwoman.png" },
        { name: "Spider-Man", description: "The friendly neighborhood hero with spider-sense and web-slinging agility.", bgColor: "linear-gradient(to right, #ff0000, #0000ff)", logo: "spiderman.png" },
        { name: "Iron Man", description: "Genius billionaire in an advanced suit of armor, defending justice with tech.", bgColor: "linear-gradient(to right, #ff4500, #ffcc00)", logo: "ironman.png" },
        { name: "Captain America", description: "Super soldier with an unbreakable shield, symbolizing courage and leadership.", bgColor: "linear-gradient(to right, #0000ff, #ff0000)", logo: "captainamerica.png" },
        { name: "Thor", description: "The Norse God of Thunder, wielding the mighty Mjolnir to protect realms.", bgColor: "linear-gradient(to right, #808080, #0000ff)", logo: "thor.png" },
        { name: "Hulk", description: "A brilliant scientist who transforms into a green powerhouse when enraged.", bgColor: "linear-gradient(to right, #008000, #004d00)", logo: "hulk.png" },
        { name: "Black Widow", description: "A skilled spy and martial artist, trained in espionage and combat.", bgColor: "linear-gradient(to right, #ff0000, #000000)", logo: "blackwidow.png" },
        { name: "Flash", description: "The fastest man alive, using his speed to battle crime and time itself.", bgColor: "linear-gradient(to right, #ff0000, #ffcc00)", logo: "flash.png" },
        { name: "Green Lantern", description: "Intergalactic protector wielding a power ring fueled by willpower.", bgColor: "linear-gradient(to right, #008000, #00ff00)", logo: "greenlantern.png" },
        { name: "Aquaman", description: "King of Atlantis, commanding the seas with super strength and telepathy.", bgColor: "linear-gradient(to right, #00c6ff, #0072ff)", logo: "aquaman.png" },
        { name: "Doctor Strange", description: "Master of mystic arts, defending reality with powerful spells.", bgColor: "linear-gradient(to right, #800080, #ff00ff)", logo: "doctorstrange.png" },
        { name: "Black Panther", description: "King of Wakanda, enhanced by the heart-shaped herb and Vibranium suit.", bgColor: "linear-gradient(to right, #000000, #4b0082)", logo: "blackpanther.png" },
        { name: "Deadpool", description: "Mercenary with healing powers and an unmatched sense of humor.", bgColor: "linear-gradient(to right, #ff0000, #000000)", logo: "deadpool.png" },
        { name: "Wolverine", description: "Mutant with adamantium claws and an incredible healing factor.", bgColor: "linear-gradient(to right, #808080, #ffd700)", logo: "wolverine.png" },
        { name: "Shazam", description: "Teen who transforms into a magical superhero with divine powers.", bgColor: "linear-gradient(to right, #ffcc00, #ff0000)", logo: "shazam.png" },
        { name: "Ant-Man", description: "Scientist with the ability to shrink and control ants using a specialized suit.", bgColor: "linear-gradient(to right, #ff0000, #a9a9a9)", logo: "antman.png" },
        { name: "Star-Lord", description: "Intergalactic adventurer and leader of the Guardians of the Galaxy.", bgColor: "linear-gradient(to right, #003366, #ff6600)", logo: "starlord.png" },
        { name: "Groot", description: "Tree-like alien with regenerative powers and a lovable personality.", bgColor: "linear-gradient(to right, #8b4513, #a0522d)", logo: "groot.png" },
        { name: "Rocket Raccoon", description: "A brilliant tactician and weapons expert with a feisty attitude.", bgColor: "linear-gradient(to right, #654321, #d2691e)", logo: "rocketraccoon.png" },
        { name: "Scarlet Witch", description: "Powerful sorceress with reality-warping abilities.", bgColor: "linear-gradient(to right, #800000, #ff0000)", logo: "scarletwitch.png" },
        { name: "Vision", description: "Synthetic android with incredible intelligence and phasing abilities.", bgColor: "linear-gradient(to right, #800080, #ffcc00)", logo: "vision.png" },
        { name: "Hawkeye", description: "Master archer with pinpoint accuracy and unmatched marksmanship skills.", bgColor: "linear-gradient(to right, #8b0000, #ff4500)", logo: "hawkeye.png" },
        { name: "Cyborg", description: "Half-human, half-machine hero with advanced technology and AI integration.", bgColor: "linear-gradient(to right, #696969, #b0c4de)", logo: "cyborg.png" },
        { name: "Nightwing", description: "Acrobatic vigilante and former Robin, protecting Blüdhaven with skill.", bgColor: "linear-gradient(to right, #000080, #000000)", logo: "nightwing.png" },
        { name: "Daredevil", description: "Blind lawyer by day, fearless vigilante by night, relying on heightened senses.", bgColor: "linear-gradient(to right, #8b0000, #ff0000)", logo: "daredevil.png" }
    ];

    return (
        <main style={{ paddingTop: "80px", minHeight: "100vh", textAlign: "center" }}>
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
                <h2 style={{ fontSize: "2.5rem", color: "#fff", margin: "20px 0" }}>Super Heroes</h2>
                <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                    {products.map((product, index) => (
                        <motion.div key={index} 
                            style={{ 
                                background: product.bgColor, 
                                padding: "20px", 
                                borderRadius: "10px", 
                                boxShadow: "5px 5px 15px rgba(0,0,0,0.3)", 
                                width: "250px", 
                                textAlign: "center", 
                                transformStyle: "preserve-3d",
                                perspective: "1000px"
                            }}
                            whileHover={{ rotateY: 10, rotateX: 10 }}
                        >
                            <img src={product.logo} alt={product.name} style={{ width: "50px", height: "50px", marginBottom: "10px" }} />
                            <h3 style={{ color: "white" }}>{product.name}</h3>
                            <p style={{ color: "white" }}>{product.description}</p>
                            <motion.button whileTap={{ scale: 0.9 }} style={{
                                background: "#ff6b6b", color: "#fff", border: "none", padding: "10px 15px", borderRadius: "5px",
                                cursor: "pointer", fontSize: "1rem"
                            }}>Buy Now</motion.button>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </main>
    );
};

export default Body;
