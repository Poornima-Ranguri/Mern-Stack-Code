import React, { useState } from "react";
import "./AddUser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AddUser = () => {
  const users = {
    name: "",
    email: "",
    address: "",
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3004/api/user", user)
      .then((response) => {
        toast.success(response.data.message, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="addUser">
      <Link to="/" type="button" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i> Back
      </Link>

      <h3>Add New User</h3>
      <form className="submit-form" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={inputHandler}
            name="name"
            autoComplete="off"
            placeholder="Enter your Name"
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            onChange={inputHandler}
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            onChange={inputHandler}
            name="address"
            autoComplete="off"
            placeholder="Enter your Address"
            className="input"
          />
        </div>
        <div className="inputGroup-btn">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
