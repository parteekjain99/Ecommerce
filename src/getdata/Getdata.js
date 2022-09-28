import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import img from "./logo512.png"

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3004/user");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3004/user/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>

                  <div className="card">
                     <div className="card-body">
                       <div className="main">
                         <h2>{user.name}</h2>
                         <h4>{user.address}</h4>
                         <h4>{user.email}</h4>
                         <h4>{user.phone}</h4>
                         <button type="button" className="btn btn-danger p-10">{user.tags[0]}</button>
                         <button type="button" className="btn btn-primary m-10">{user.tags[1]}</button>
                         <button type="button" className="btn btn-danger">{user.tags[2]}</button>
                         <button type="button" className="btn btn-danger">{user.tags[3]}</button>
                       </div>
                     </div>
                     
                  </div>
                  <Link class="btn btn-primary mr-2" to={`/user/${user.id}`}>
                    edit
                  </Link>
                 
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                {/* </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
