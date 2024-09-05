import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const handleLogout = () => {
    localStorage.setItem("token", "");
    navigate("./login");
  };

  const handleLogin = () => {
    localStorage.setItem("token", "");
    navigate("./login");
  };

  const getData = () => {
    setLoading(true); // Start loading
    axios
      .get(`https://66bee4e742533c40314461ff.mockapi.io/crud/`)
      .then((res) => {
        setData(res.data);
        setLoading(false); // Data loaded
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Even if there's an error, stop loading
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://66bee4e742533c40314461ff.mockapi.io/crud/${id}`)
      .then(() => {
        toast.success("Data deleted successfully!");
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-4 flex justify-between">
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Log In
        </button>
        <Link to="/create">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Create New Data
          </button>
        </Link>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-full">
          <p className="text-gray-600">
            <button
              disabled
              type="button"
              class="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg    hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
            >
              <svg
                aria-hidden="true"
                role="status"
                class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#1C64F2"
                />
              </svg>
              Loading...
            </button>
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 text-white border border-gray-700 rounded-md shadow-md">
            <thead>
              <tr className="bg-gray-700">
                <th className="py-2 px-4 border-b border-gray-600">ID</th>
                <th className="py-2 px-4 border-b border-gray-600">NAME</th>
                <th className="py-2 px-4 border-b border-gray-600">AGE</th>
                <th className="py-2 px-4 border-b border-gray-600">PHONE NO</th>
                <th className="py-2 px-4 border-b border-gray-600">EMAIL</th>
                <th className="py-2 px-4 border-b border-gray-600">READ</th>
                <th className="py-2 px-4 border-b border-gray-600">EDIT</th>
                <th className="py-2 px-4 border-b border-gray-600">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {data.map((value, index) => (
                <tr key={index} className="hover:bg-gray-700">
                  <td className="py-2 px-4 border-b border-gray-600">
                    {value.id}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-600">
                    {value.name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-600">
                    {value.age}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-600">
                    {value.phoneno}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-600">
                    {value.email}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-600">
                    <Link to={`/read/${value.id}`}>
                      <button className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition duration-300">
                        Read
                      </button>
                    </Link>
                  </td>
                  <td className="py-2 px-4 border-b border-gray-600">
                    <Link to={`/update/${value.id}`}>
                      <button className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 transition duration-300">
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td className="py-2 px-4 border-b border-gray-600">
                    <button
                      onClick={() => handleDelete(value.id)}
                      className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Toaster />
    </div>
  );
}

export default Home;
