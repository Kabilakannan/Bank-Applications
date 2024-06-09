import React,{useState,useEffect}from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import { faHome,faInfoCircle, faTools ,faBank} from '@fortawesome/free-solid-svg-icons';
function Header() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/element");
  const history = () => navigate("/TransactionHistory");
  const service=()=>navigate("/service")

  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
        <nav className={`navbar heading ml-auto d-flex gap-5 justtify-content-between ${sticky ? 'sticky' : ''}`} style={{height:'70px',width:'100%',zIndex:'10'}}>
          <div className='d-flex gap-3 mx-3'>
           <FontAwesomeIcon icon={faBank} style={{color:'#EEF7FF',fontSize: '30px' }} />
           <h6
            className="navbar-brand text-white "
            onClick={handleClick}
          >
           
            Banking Application System
          </h6>
          </div>

          <div className='d-flex gap-5 align-items-center'>
          <div className='d-flex align-items-center gap-2' onClick={()=>navigate("/Home")}>
            <FontAwesomeIcon icon={ faHome  } style={{color:'white',fontSize:'23px'}}/>
             <h3 style={{color:'white',margin:0}}>Home</h3>
          </div>
            <div className='d-flex align-items-center gap-2' onClick={()=>navigate("/About")}>
           <FontAwesomeIcon icon={faInfoCircle} style={{color:'white',fontSize:'23px'}} />
           <h3 style={{color:'white',margin:0}}>Loan</h3>
          </div>
          <div className='d-flex align-items-center gap-2' onClick={service} >
           <FontAwesomeIcon icon={faTools} style={{color:'white',fontSize:'26px'}}/>
           <h3 style={{color:'white',margin:0}}>Service</h3>
          </div>
          <div >
            <button className="btn btn-secondary" onClick={history}>
              Transaction History
            </button>
          </div>
          </div>
        </nav>
    
  );
}

export default Header;
