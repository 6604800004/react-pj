import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import type { Tdata } from "../data/Data";
import "../App.css";

function UserList() {
  const [data, setData] = useState<Tdata[]>([]);
  const nav = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setData);
  }, []);
  
  return (
    <div>
      {data.map((user) => (
        <div
          key={user.id}
          className="click-button"
          onClick={() => nav(`/user/${user.id}`)}
        >
          <b>{user.name}</b>
          <b> ({user.username})</b>
        </div>
      ))}
    </div>
  );
}

export default UserList;
