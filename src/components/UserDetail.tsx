import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import type { Tdata } from "../data/Data";
import "../App.css";

function UserDetail() {
  const [ user, setUser ] = useState<Tdata | null>(null);
  const { id } = useParams();
  const nav = useNavigate();
  

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await res.json();

      if (!data.id) {
        nav("/404", { replace: true });
      } else {
        setUser(data);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) return <div className="loading">Loading...</div>;
  return (
    <div className="detail-container">
      <button className="buttonnn" onClick={() => nav(-1)}>Back</button>
      <div className="eiei">
        <b className="username">{user.name}</b>
        <b className="name"> ({user.username})</b>
        <p>Email : {user.email}</p>
        <p>Address : {user.address.street}, {user.address.suite},{" "}{user.address.city}, {user.address.zipcode}</p>
        <p>Website : {user.website}</p>
        <p>Company : {user.company.name}, {user.company.bs}</p>
      </div>
    </div>
  );
}

export default UserDetail;
