import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDesktop, faServer, faTools, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from '@mui/material';
const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [showArrows, setShowArrows] = useState(true);
  
// lets change the tabs to Languages, frameworks/libraries, and tools 
  const skillsData = {
    frontend: ["JavaScript", "React.js", "HTML5", "CSS", "Bootstrap", "Material UI"],
    backend: ["Node.js", "Express.js", "Python", "Flask", "MongoDB", "SQL", "PostgreSQL"],
    tools: ["Git", "GitHub", "VS Code", "Insomnia", "Postico"],
    // Add more skills as needed
  };

  const listItemStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "10px",
    textAlign: "center",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowArrows(false);
  };

  return (
    <div id="skills" className="container-fluid">
      <div className="container p-5 rounded">
        <div className="coding-divider">
          <FontAwesomeIcon icon={faCode} style={{ fontSize: "3rem", color: "#fff" }} />
        </div>
        <motion.h2
          className="text-center"
          style={{ color: "#fff", fontSize: "2rem", marginBottom: "1.5rem", marginTop: "0%" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          SKILLS
        </motion.h2>
        <div style={buttonContainerStyle} className="button-container">
          {Object.keys(skillsData).map((tab, index) => (
            <div key={index} style={{ position: "relative", margin: "5px", }}>
              <motion.button
                style={{
                  background: "#0d1117",
                  border: `2px solid ${activeTab === tab ? "#fff" : "transparent"}`,
                  color: "#fff",
                  fontSize: "1rem",
                  maxWidth:'100%',
                  width:'auto',
                  margin:'5px',
                  fontWeight: "bold",
                  padding: "15px 20px",
                  cursor: "pointer",
                  borderRadius: "8px",
                  transform: activeTab === tab ? "scale(1.05)" : "scale(1)",
                }}
                whileHover={{ scale: 1.1, backgroundColor: "#0d1117" }}
                onClick={() => handleTabClick(tab)}
              >
                <FontAwesomeIcon
                  icon={tab === "frontend" ? faDesktop : tab === "backend" ? faServer : faTools}
                  style={{ marginRight: "0px", color:'#b1916e', fontSize:'1rem' }} //hey dumy thid si ehere you problem was
                />
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
              {showArrows && (
                <motion.div
                  key={`arrow-${index}`}
                  initial={{ y: 10 }}
                  animate={{ y: -10 }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                  style={{
                    position: "absolute",
                    left: "45%",
                    bottom: "-7vh",
                    transform: "translateX(-50%)",
                    fontSize: "1.5rem",
                    color: "#fff",
                  }}
                >
                  {/* <FontAwesomeIcon icon={faArrowUp} /> */}
                </motion.div>
              )}
            </div>
          ))}
        </div>
        <motion.div className="list-group" style={{ ...listItemStyle, textAlign: "center" }}>
          {activeTab && skillsData[activeTab].map((skill, index) => (
            <motion.div
              key={index}
              style={listItemStyle}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
