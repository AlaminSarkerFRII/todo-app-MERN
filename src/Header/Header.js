import React from "react";

const Header = () => {
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0 text-xl">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Completed Task</a>
            </li>
            <li>
              <a>Todo</a>
            </li>
            <li>
              <a>Calender</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;