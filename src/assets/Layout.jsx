import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faEnvelope,
  faCalendarAlt,
  faListAlt,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

function Layout() {
  return (
    <div>
      <div className="container my-5" style={{ height: "100vh" }}>
        <div
          className="row gap-5"
          style={{ backgroundColor: "black", height: "690px" }}
        >
          <div className="col-1"></div>
          <div className="col-2 row ">
            <div
              className="row mx-1 my-2 layout"
              style={{ height: "27%", borderRadius: "20px", color: "white" }}
            >
              <div className="d-flex flex-column justify-content-center">
                <div style={{ marginLeft: "12px" }}>
                  <h4 style={{ color: "#FF545F" }}>Hira R.</h4>
                  <p>UX/UI Designer</p>
                </div>
                <div className="d-flex justify-content-around">
                  <div>
                    <p>
                      <strong>125</strong>
                    </p>
                    <p>Projects</p>
                  </div>
                  <div>
                    <p>
                      <strong>$125</strong>
                    </p>
                    <p>Revenue</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row mx-1 layout "
              style={{ height: "40%", borderRadius: "20px" }}
            >
              <div className="d-flex flex-column justify-content-center align-items-center gap-4">
              <div className='d-flex align-items-center justify-content-center gap-3'>
        <FontAwesomeIcon icon={faTachometerAlt} style={{ color: 'white' }} />
        <p className='m-0'>Dashboard</p>
      </div>
      <div className='d-flex align-items-center justify-content-center gap-3'>
        <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white' }} />
        <p className='m-0'>Email</p>
      </div>
      <div className='d-flex align-items-center justify-content-center gap-3'>
        <FontAwesomeIcon icon={faChartBar} style={{ color: 'white' }} />
        <p className='m-0'>Graph</p>
      </div>
      <div className='d-flex align-items-center justify-content-center gap-3'>
        <FontAwesomeIcon icon={faCalendarAlt} style={{ color: 'white' }} />
        <p className='m-0'>Calendar</p>
      </div>
      <div className='d-flex align-items-center justify-content-center gap-3'>
        <FontAwesomeIcon icon={faListAlt} style={{ color: 'white' }} />
        <p className='m-0'>Form</p>
      </div>
              </div>
            </div>
            <div
              className="row mx-1 layout d-flex flex-column justify-content-center"
              style={{ height: "25%", borderRadius: "20px",backgroundColor:'#3827B1',color:'white' }}
            >
              <h4>Go Pro</h4>
              <p>Upgrade Your Plan to get pro benefit</p>
              <button style={{backgroundColor:'black',borderRadius:'40px 1px 50px 40px',border:'none',color:'white',padding:'7px 0px',width:'100px',marginLeft:'40px'}}>Let's start</button>
            </div>
          </div>
          <div className="col-3 row">
            <div
              className="d-flex align-items-center justify-content-around mx-1 my-2 layout"
              style={{ height:"15%", borderRadius: "20px",color:'white' }}
            >
              <h6 style={{padding:'5px 10px',backgroundColor:'black',borderRadius:'100%'}}>$</h6>
              <div>
              <h5>Total Revenue</h5>
              <h5><strong>$92,983</strong></h5>   
              <div className='d-flex' style={{marginTop:'20px'}}>
                <p style={{borderBottom:'7px solid #3928B0',width:'80px'}}>    </p> 
                <p style={{borderBottom:'7px solid white',width:'30px'}}>    </p> 
             </div>
             </div>
            </div>
            <div
              className="row mx-1"
              style={{
                height: "29%",
                borderRadius: "20px",
                padding: "0",
                margin: "0",
              }}
            >
              <div
                className="col me-3 layout"
                style={{ borderRadius: "20px" }}
              ></div>
              <div
                className="col layout"
                style={{ borderRadius: "20px" }}
              ></div>
            </div>
            <div
              className="row mx-1 layout"
              style={{ height: "47%", borderRadius: "20px" }}
            ></div>
          </div>
          <div className="col-4 row">
            <div
              className="row  mx-1 my-2 layout"
              style={{ height: "20%", borderRadius: "20px" }}
            ></div>
            <div
              className="row mx-1 layout"
              style={{ height: "40%", borderRadius: "20px" }}
            ></div>
            <div
              className="row mx-1 gap-3"
              style={{
                height: "33%",
                borderRadius: "20px",
                padding: "0",
                margin: "0",
              }}
            >
              <div
                className="col-6 layout"
                style={{ borderRadius: "20px" }}
              ></div>
              <div
                className="col layout"
                style={{ borderRadius: "20px" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
