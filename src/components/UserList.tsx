import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { type Tdata } from "../data/Data";
import "../App.css";

function UserList() {
  const [ data, setData ] = useState<Tdata[]>([]);
  const [ inputText, setInputText ] = useState("");
  const filterData = data.filter((user) =>
    user.username.toLowerCase().includes(inputText.toLowerCase()) ||
    user.name.toLowerCase().includes(inputText.toLowerCase())
  );

  const nav = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <div className="search-container">
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="enter your name or username"
        />
      </div>
      <div className="list-container">
      {filterData.map((user) => (
        <div
          className="click-button"
          key={user.id}
          onClick={() => nav(`/user/${user.id}`)}
        >
          <b>{user.name}</b>
          <b> ({user.username})</b>
        </div>
      ))}
    </div>
    </div>
  );
}

export default UserList;
