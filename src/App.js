import logo from './logo.png';
import './App.css';
import React, { useState } from "react";
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';

const App = () => {

  const [voted, setVoted] = useState(['']);

  const [users, setUsers] = useState([
    {
      id: 1,
      Name: "Chel1",
      Slug: "chel1",
      Description:
        "I am Chel1",
    },
    {
      id: 2,
      Name: "Chel2",
      Slug: "chel1",
      Description:
        "I am Chel2",
    },
  ]);

  const vote = (type) => {
    alert(type);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://mysmailik.ru/_ph/88/2/681041778.jpg?1635241447"
          target="_blank"
          rel="noopener noreferrer"
        >
          Важная ссылка
        </a>
        <div className="row">
          {users.map(function (user) {
            return (
              <div className="col-sm-4">
                <div className="card">
                  <div className="card-header">
                    {user.Name}
                    <span className="float-left">{voted}</span>
                  </div>
                  <div className="card-body">{user.Description}</div>
                  <div className="card-footer">
                    <a onClick={() => {}} className="btn btn-default float-left">
                        <FiThumbsUp />
                    </a>
                    <a onClick={() => {}} className="btn btn-default float-right">
                      <FiThumbsDown />
                    </a>
                  </div>
                </div>
              </div>  
            );
          })}
        </div>

      </header>
    </div>
  );
}

export default App;
