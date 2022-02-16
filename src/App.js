import Loader from "./loaders/Loader";
import React, { useState, useEffect } from "react";
import "./App.css";
import { Grid, IconButton } from "@material-ui/core";
import { List_Item } from "./styled_component";
import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";

function App() {
  const [show, setShow] = useState(false);
  useEffect(() => setTimeout(() => setShow(!show), 1000), []);
  return (
    <>
      {!show ? (
        <Loader />
      ) : (
        <div className="container">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8} md={6}>
              <div className="picture-container">
                <img
                  className="picture"
                  src="https://media-exp1.licdn.com/dms/image/D5603AQGwB1lM13mHng/profile-displayphoto-shrink_800_800/0/1638289276949?e=1650499200&v=beta&t=PCuikM0DDIOqepXVrONKZkH6oWR0g-AiEm9z_8A8Ppw"
                  alt="my_picture"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={4} md={6} spacing={2}>
              <div className="about-skills">
                <div className="about">
                  <h3>Ahmed Izaz Bhuiyan</h3>
                  <p>
                    Working as a Full Stack developer in Javascript specially
                    ReactJS, NodeJS, MySQL. MongoDB and Django framework of
                    Python about 4 year
                  </p>
                </div>
                <div className="skills">
                  <h3>Skills</h3>
                  <ul>
                    <List_Item>Javascript</List_Item>
                    <List_Item>NodeJS</List_Item>
                    <List_Item>React JS</List_Item>
                    <List_Item>Next JS</List_Item>
                    <List_Item>Express JS</List_Item>
                    <List_Item>Typescript</List_Item>
                  </ul>
                  <ul>
                    <List_Item>Bootstrap</List_Item>
                    <List_Item>Material UI</List_Item>
                    <List_Item>Tailwind CSS</List_Item>
                    <List_Item>Python</List_Item>
                    <List_Item>Django</List_Item>
                    <List_Item>REST Framework</List_Item>
                  </ul>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8} md={6}>
              <div className="experience">
                <h3>Experience</h3>
                <p>
                  I have worked with a team called Proton Seed since 2018.. Have
                  perticipated at some projects about Employee Information
                  Management, Employement ,Forum etc. Also I developed myself a
                  Resturant Web Application using MERN Stack
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} md={6}>
              <div className="contact">
                <h3>Contact</h3>
                <p>Mobile : 01839465030</p>
                <p>Email : asif32803@gmail.com</p>
                <div className="icons">
                  <IconButton>
                    <Facebook />
                  </IconButton>
                  <IconButton>
                    <Instagram />
                  </IconButton>
                  <IconButton>
                    <LinkedIn />
                  </IconButton>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
}

export default App;
