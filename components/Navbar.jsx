import React from "react";

export default function Navbar() {
  return (
    <div>
      <div>
        <nav className="bg-slate-800 text-white flex justify-between p-3">
          <div>Logo</div>
          <div>
            <ul className="flex gap-4">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
