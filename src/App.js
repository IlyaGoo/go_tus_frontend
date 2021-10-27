import logo from './logo.png';
import './App.css';
import React, { useState, useEffect } from "react";
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';

const App = () => {

  const [users, setUsers] = useState([]);

  const [voted, setVoted] = useState({
    "dolbaeb": "",
    "svarshik": "",
    "yurin_roman": "",
    "billy_harington": "",
    "master_van": ""
  });

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch("http://localhost:8003/users", {
          headers: {

          },
        });

        const responseData = await response.json();

        setUsers(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, []);

  const vote = async (slug, type, index) => {
    try {
      const response = await fetch(
        `http://localhost:8003/users/${slug}/abboutme`,
        {
          method: "POST",
          headers: {
          },
          body: JSON.stringify({ vote: type }),
        }
      );
      // Since this is just for demonstration and we're not actually
      // persisting this data, we'll just set the product vote status here
      // if the product exists
      if (response.ok) {
        setVoted({
          ...voted,
          [slug]: [type],
        });
      } else console.log(response.status);
    } catch (error) {
      console.error(error);
    }
  };

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
          {users.map(function (user, index) {
            const userSlug = user.Slug;
            return (
              <div className="col-sm-4" key={index}>
                <div className="card mb-4">
                  <div className="card-header">{user.Nickname}</div>
                  <div className="card-body">{user.AboutMe}</div>
                  <div className="card-footer">
                  <a onClick={() => vote(user.Slug, "Upvoted", index)}
                      className="btn btn-default float-left">
                      <FiThumbsUp />
                    </a>
                    <small className="text-muted">{voted[userSlug]}</small>
                    <a onClick={() => vote(user.Slug, "Downvoted", index)}
                      className="btn btn-default float-right">
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
