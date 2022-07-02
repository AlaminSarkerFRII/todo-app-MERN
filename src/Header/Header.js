import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import auth from "../Firebase.init";

const Header = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate();

  // logout
  const logout = () => {
    signOut(auth);
    navigate("/login");
  };

  return (
    <div>
      <div class="navbar bg-base-100 shadow-xl grid sm:grid-cols-3">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">Todo App</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0 text-xl">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="flex justify-between items-center">
        {user ? (
          <button
            onClick={() => logout()}
            className="btn btn-success btn-xs px-2 py-1 justify-between"
          >
            Log Out
          </button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </li>
            <li>
              <NavLink to="/task">Completed</NavLink>
            </li>
            <li>
              <NavLink to="/todos">Todo</NavLink>
            </li>
            <li>
              <NavLink to="/calender">Calender</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
