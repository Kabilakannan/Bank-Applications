import React from "react";
import Background from "../images/background.avif";
import img1 from "../images/image1.webp";
import img2 from "../images/image2.avif";
import img3 from "../images/image3.avif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
function Home() {
  return (
    <div className=" home">
      <div className="container d-flex" style={{ height: "100vh" }}>
        <div className="row w-10">
          <div
            className="col-md-5 d-flex flex-column gap-5"
            style={{ position: "relative", top: "100px", left: "70px" }}
          >
            <button
              className="border-0 button-home"
              style={{ width: "50%", borderRadius: "25px", color: "white" }}
            >
              Certified Payment Partners
            </button>
            <h1 style={{ Width: "200px" }}>
              Suite of Financial and Payment
              <br />
              Products
            </h1>
            <p style={{ width: "200px", marginTop: "10px" }}>
              <small>
                Millions of companies of all sizes use Bank servieces and in
                person to accept payments,send payouts,automate financial
                process and grow
              </small>
            </p>
            <div className="d-flex gap-5">
              <button
                className="border-0 rounded-pill p-2 px-3"
                style={{ backgroundColor: "#254336", color: "white" }}
              >
                Open an Account
              </button>
              <button className="border-0 rounded-pill p-2 px-3">
                Contact Sales
              </button>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <div className="d-flex flex-wrap" style={{ gap: "10px" }}>
              <img
                src={img1}
                alt="Image 1"
                style={{ width: "250px", height: "auto" }}
              />
              <img
                src={img2}
                alt="Image 2"
                style={{ width: "250px", height: "auto" }}
              />
              <img
                src={img3}
                alt="Image 3"
                style={{ width: "510px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "100vh", width: "100%" }}>
        <div style={{ height: "30vh" }}></div>
        <div
          className="contact d-flex flex-column justify-content-center align-items-center"
          style={{ height: "70vh" }}
        >
          <div className="text-center my-3" style={{color:'white'}}>
            <h1>Contact us</h1>
            <p style={{ width: "700px" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              soluta dolores dicta nesciunt temporibus magni expedita architecto
              nisi repudiandae velit commodi voluptatum praesentium alias, quos
              illo aspernatur modi quam corrupti!
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-around " style={{width:'80%'}}>
            <div className="d-flex flex-column gap-5 " style={{color:'white'}}>
               <div className='d-flex align-items-center gap-5'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{marginRight:'10px'}}/>
                    <p style={{margin:'0'}}><strong>Address </strong><br /> 4671 Ambattur Chennai-60077 </p>
              </div>
              <div className='d-flex align-items-center gap-5'> 
              <FontAwesomeIcon icon={faPhone} style={{marginRight:'10px'}}/>
              <p style={{margin:'0'}}><strong>Phone</strong> <br /> 809-907-345-567</p>
              </div>
              <div className='d-flex align-items-center gap-5'> 
              <FontAwesomeIcon icon={faEnvelope} style={{marginRight:'10px'}}/>
              <p style={{margin:'0'}}>  <strong>Email</strong> <br /> kabilakann@gmail.com </p>
              </div>

            </div>
            <div>
              <form style={{backgroundColor:'white',width:'400px',height:'100%', padding: "20px", }}
              >
                <h1>Send Message</h1>
                <div className="input-data my-5">
                  <input type="text" className="mb-3"></input>
                  <label>Email</label>
                </div>
                <div className="input-data my-2">
                  <input
                    type="text"
                    className=" mb-3"
                  ></input>
                  <label>Type your Message</label>
                </div>
                <button className='btn' style={{backgroundColor:'#254336',color:'white',border:'none',borderRadius:'30px',padding:'5px 20px'}}>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
