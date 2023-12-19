import React from "react";
import PlanSelector from "./components/PlanSelector";
import {
  Add,
  AddCircle,
  ArrowRightAlt,
  CloudUploadOutlined,
  DoneAll,
  MailOutline,
  Menu,
  Notifications,
  PersonOutline,
} from "@mui/icons-material";
import { Badge } from "@mui/material";

const Landing = () => {
  return (
    <div className="hero">
      <h1>choose a plan that's just right for you !</h1>
      <PlanSelector></PlanSelector>
      {/* CARDS  */}
      <div className="cards">
        {/* card first row  */}
        <div className="cardOne">
          <h1>Basic</h1>
          <h2>$89.99/mo</h2>
          <h3>$9.99/mo</h3>
          <button>
            Get Started<ArrowRightAlt></ArrowRightAlt>
          </button>
          <hr />
          <div className="features">
            <span>What you'll get :</span>
            <p>
              <PersonOutline sx={{ fontSize: "20px" }}></PersonOutline>Upto 25
              users
            </p>
            <p>
              <CloudUploadOutlined
                sx={{ fontSize: "20px" }}
              ></CloudUploadOutlined>
              Upto 25gb Storage
            </p>
            <p>
              <MailOutline sx={{ fontSize: "20px" }}></MailOutline>Email Support
            </p>
            <a href="">EXPLORE FEATURES</a>
          </div>
        </div>
        <div className="cardOne">
          <h1>Standard</h1>
          <h2>$189.99/mo</h2>
          <h3>$99.99/mo</h3>
          <button>
            Get Started<ArrowRightAlt></ArrowRightAlt>
          </button>
          <hr />
          <div className="features">
            <span>What you'll get :</span>
            <p>
              <PersonOutline sx={{ fontSize: "20px" }}></PersonOutline>Upto 50
              users
            </p>
            <p>
              <CloudUploadOutlined
                sx={{ fontSize: "20px" }}
              ></CloudUploadOutlined>
              Upto 60gb Storage
            </p>
            <p>
              <MailOutline sx={{ fontSize: "20px" }}></MailOutline>Email + chat
              Support
            </p>
            <a href="">EXPLORE FEATURES</a>
          </div>
        </div>
        <div className="cardOne">
          <h1>Premium</h1>
          <h2>$389.99/mo</h2>
          <h3>$199.99/mo</h3>
          <button>
            Get Started<ArrowRightAlt></ArrowRightAlt>
          </button>
          <hr />
          <div className="features">
            <span>What you'll get :</span>
            <p>
              <PersonOutline sx={{ fontSize: "20px" }}></PersonOutline>Upto 75
              users
            </p>
            <p>
              <CloudUploadOutlined
                sx={{ fontSize: "20px" }}
              ></CloudUploadOutlined>
              Upto 100gb Storage
            </p>
            <p>
              <MailOutline sx={{ fontSize: "20px" }}></MailOutline>Email + chat
              + whatsapp Support
            </p>
            <a href="">EXPLORE FEATURES</a>
          </div>
        </div>
      </div>
      <div className="cards-landscape">
        <div className="card-landscape">
          <div className="card-first-col">
            <span>free forever</span>
            <h1>Free Starter</h1>
            <p>
              The quickest and easy way to try protocols with basic
              functionalities
            </p>
            <button>
              Get Started<ArrowRightAlt></ArrowRightAlt>
            </button>
          </div>
          <div>
            <div className="features">
              <span>What you'll get :</span>
              <p>
                <PersonOutline sx={{ fontSize: "20px" }}></PersonOutline>Upto 50
                users
              </p>
              <p>
                <CloudUploadOutlined
                  sx={{ fontSize: "20px" }}
                ></CloudUploadOutlined>
                Upto 60gb Storage
              </p>
              <p>
                <MailOutline sx={{ fontSize: "20px" }}></MailOutline>Email
                Support
              </p>

              <p>
                <DoneAll
                  sx={{ fontSize: "20px", marginBottom: "3.5rem" }}
                ></DoneAll>
                Basics of documents,task
                flow,voting,accounting,banking,notes,investor,director and team
                management included
              </p>
            </div>
          </div>
        </div>
        <div className="card-landscape">
          <div className="card-first-col">
            <span style={{ backgroundColor: "rgb(156, 220, 255)" }}>
              Lets connect
            </span>
            <h1>Enterprise plan</h1>
            <p>
              Effortlessly customize and fine-tune services as your needs
              shift,ensuring the perfect tools for success
            </p>
            <button style={{ backgroundColor: "rgb(156, 220, 255)" }}>
              Contact us<ArrowRightAlt></ArrowRightAlt>
            </button>
          </div>
          <div>
            <div className="features" style={{ paddingRight: "3.8rem" }}>
              <span>What you'll get :</span>
              <p>
                <PersonOutline sx={{ fontSize: "20px" }}></PersonOutline>More
                than 75 users
              </p>
              <p>
                <DoneAll
                  sx={{ fontSize: "20px", marginBottom: "1rem" }}
                ></DoneAll>
                Customization of all other features
              </p>
            </div>
          </div>
        </div>
      </div>

        <div className="notification">
          <Badge badgeContent={4} color="error">
            <Notifications sx={{ color: "rgb(77, 193, 255);"}}></Notifications>
          </Badge>
        </div>
         
            <div className="white-sidebar" style={{backgroundColor:"white", width:"20px",height:"100px"}}></div>
            <Add className="add-sidebar" sx={{backgroundColor:"rgb(77, 193, 266)",borderRadius:"50%"}}></Add>
          
          
     
    </div>
  );
};

export default Landing;
