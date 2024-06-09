import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAccount, deleteAccount } from "../Api/ListAccounts";
import Spinner from "../images/Spinner.gif";

function Service() {
  const [user, setUser] = useState("");
  const [balance, setBalance] = useState("");
  const [id, setId] = useState(" ");
  const [page, setPage] = useState(true);
  const navigate = useNavigate();
  const accountSubmit = (e) => {
    e.preventDefault();
    setBalance(false);
    if (user != " " && balance != " ") {
      setPage(false);
      setTimeout(() => {
        createAccount(user, balance);
        navigate("/element");
        alert("Account Created Successfully");
      }, 3000);
    }
  };
  const deleteSubmit = (e) => {
    e.preventDefault();
    if (id > 0 && id != " ") {
      setPage(false);
      setTimeout(() => {
        deleteAccount(id);
        navigate("/element");
        alert("Deleted Successfully");
      }, 3000);
    }
  };
  return (
    <div>
      {page ? (
        <div className="grid service">
          <div className="row mx-3 py-5">
            <div className="col-md-1"></div>
            <div className="col-md-3 ">
              <form
                className="d-flex flex-column justify-content-between p-3 form"
                style={{
                  borderRadius: "20px",
                  padding: "20px",
                  height: "400px",
                }}
                onSubmit={accountSubmit}
              >
                <h1 >Add Account</h1>
                <div className="input-data">
                  <input
                    type="text"
                    className="inputborder mb-3"
                    value={user}
                    required
                    onChange={(e) => setUser(e.target.value)}
                  ></input>
                  <label>HolderName</label>
                </div>
                <div className="input-data">
                  <input
                    type="text"
                    name="balance"
                    className="inputborder mb-3"
                    value={balance}
                    required
                    onChange={(e) => setBalance(e.target.value)}
                  ></input>
                  <label>Balance</label>
                </div>
                <button
                  className="btn btn-dark mt-2 "
                  sytle={{ width: "50%" }}
                  type="submit"
                >
                  Add
                </button>
              </form>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-4">
              <form
                className="d-flex flex-column justify-content-between p-3 form"
                style={{ padding: "20px", height: "300px" }}
                onSubmit={deleteSubmit}
              >
                <h2 >Delete Account</h2>
                <div className="input-data">
                  <input
                    type="text"
                    name="balance"
                    className="inputborder mb-3"
                    required
                    onChange={(e) => setId(e.target.value)}
                  ></input>
                  <label>Enter the Id</label>
                </div>
                <button className="btn btn-dark mt-2 " type="submit">
                  Delete
                </button>
              </form>
            </div>
            <div className='col-md-1'></div>
          </div>
        </div>
      ) : (
        <div
          className="d-flex align-items-center justify-content-center "
          style={{ height: "100vh" }}
        >
          <img src={Spinner} />
        </div>
      )}
    </div>
  );
}

export default Service;
