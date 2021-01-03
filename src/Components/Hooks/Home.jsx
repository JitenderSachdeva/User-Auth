import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3000/users");
    setUsers(result.data.reverse());
  }

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1 style={{ fontWeight: '400' }}>Home</h1>
        <div class="table-responsive">
        <table className="table  border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th colSpan="3" scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users && users.map((user, index) => {
                return (
                  <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td> <Link className="btn btn-primary">View</Link> </td>
                <td> <Link className="btn btn-outline-primary" to={`/edituser/${user.id}`}>Edit</Link> </td>
                <td> <Link className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link> </td>
            </tr>
                )
              })
            }
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default Home;