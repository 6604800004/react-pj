import { useNavigate } from "react-router";
import "../App.css";

function NotFound() {
  const nav = useNavigate();

  return (
    <div className="my-custom-face-container">
      <div>
        <p>404</p>
        <p className="not-found-text">ไม่มีหน้านี้</p>
      </div>
      <button
        className="my-custom-face-container-click"
        onClick={() => nav("/")}
      >
        กลับไปหน้าแรก
      </button>
    </div>
  );
}

export default NotFound;
