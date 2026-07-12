import { Link } from "react-router-dom";
import "./index.css";

export default function RoleSelection() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>CampusConnect</h1>
        <p className="subtitle">Choose how you'd like to continue</p>

        <Link to="/login/student">
          <button>👨‍🎓 Student Login</button>
        </Link>

        <Link to="/login/organizer">
          <button>🧑‍💼 Organizer Login</button>
        </Link>

        <Link to="/login/admin">
          <button>🛡️ Admin Login</button>
        </Link>

        <hr style={{ margin: "20px 0" }} />

        <Link to="/signup/student">
          <button>👨‍🎓 Student Sign Up</button>
        </Link>

        <Link to="/signup/organizer">
          <button>🧑‍💼 Organizer Sign Up</button>
        </Link>
      </div>
    </div>
  );
}