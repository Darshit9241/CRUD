import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

function Update() {
  const [value, setValue] = useState({
    name: "",
    age: "",
    email: "",
    phoneno: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://66bee4e742533c40314461ff.mockapi.io/crud/${id}`)
      .then((res) => {
        setValue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://66bee4e742533c40314461ff.mockapi.io/crud/${id}`, value)
      .then(() => {
        navigate("/");
        toast.success("Data successfully updated!");
      })
      .catch((err) => {
        toast.error("An error occurred while updating data.");
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="bg-blue-500 text-white p-4 rounded-t-lg text-center">
          <h1 className="text-2xl font-bold">Update Data</h1>
        </div>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Enter Name:</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 p-2 rounded-md"
              value={value.name}
              onChange={(e) => setValue({ ...value, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Enter Age:</label>
            <input
              type="number"
              placeholder="Age"
              className="w-full border border-gray-300 p-2 rounded-md"
              value={value.age}
              onChange={(e) => setValue({ ...value, age: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Enter Phone no:</label>
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full border border-gray-300 p-2 rounded-md"
              value={value.phoneno}
              onChange={(e) => setValue({ ...value, phoneno: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Enter Email:</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-2 rounded-md"
              value={value.email}
              onChange={(e) => setValue({ ...value, email: e.target.value })}
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

export default Update;
