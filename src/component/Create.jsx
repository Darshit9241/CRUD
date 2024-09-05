import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

function Create() {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    age: "",
    email: "",
    phoneno: "",
  });

  const validate = () => {
    if (!value.name || !value.age || !value.email || !value.phoneno) {
      toast.error("All fields are required.");
      return false;
    }
    if (!/^\d+$/.test(value.age)) {
      toast.error("Age must be a number.");
      return false;
    }
    if (!/^\d{10}$/.test(value.phoneno)) {
      toast.error("Phone number must be 10 digits.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(value.email)) {
      toast.error("Email is invalid.");
      return false;
    }
    return true;  
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    axios
      .post("https://66bee4e742533c40314461ff.mockapi.io/crud", value)
      .then((res) => {
        toast.success("Data created successfully!");
        navigate("/");
      })
      .catch((err) => {
        toast.error("An error occurred while creating data.");
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="bg-blue-500 text-white p-4 rounded-t-lg text-center">
          <h1 className="text-2xl font-bold">Create Data</h1>
        </div>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Enter Name:</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 p-2 rounded-md"
              onChange={(e) => setValue({ ...value, name: e.target.value })}
              value={value.name}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Enter Age:</label>
            <input
              type="number"
              placeholder="Age"
              className="w-full border border-gray-300 p-2 rounded-md"
              onChange={(e) => setValue({ ...value, age: e.target.value })}
              value={value.age}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Enter Phone no:</label>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-300 p-2 rounded-md"
              onChange={(e) => setValue({ ...value, phoneno: e.target.value })}
              value={value.phoneno}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Enter Email:</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-2 rounded-md"
              onChange={(e) => setValue({ ...value, email: e.target.value })}
              value={value.email}
            />
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
        <Toaster />
      </div>
    </div>
  );
}

export default Create;
