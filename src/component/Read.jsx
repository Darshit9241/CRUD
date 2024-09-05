import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

function Read() {
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

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <div className="bg-blue-500 text-white p-4 rounded-t-lg text-center">
          <h1 className="text-2xl font-bold">View Data</h1>
        </div>
        <div className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <p className="bg-gray-100 border border-gray-300 p-3 rounded-md text-gray-700">{value.name}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Age:</label>
            <p className="bg-gray-100 border border-gray-300 p-3 rounded-md text-gray-700">{value.age}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Phone No:</label>
            <p className="bg-gray-100 border border-gray-300 p-3 rounded-md text-gray-700">{value.phoneno}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <p className="bg-gray-100 border border-gray-300 p-3 rounded-md text-gray-700">{value.email}</p>
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Read;
