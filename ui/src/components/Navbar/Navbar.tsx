"use client";

import { useState } from "react";
import "./Navbar.scss";
import Link from "next/link";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  const navItems = [
    { title: "Technical Interview Practice", link: "/interviews" },
    { title: "Behavorial Practice", link: "/behavorial" },
  ];
  return (
    <nav>
      <Link href="/">
        <span>SWEPrepPilot</span>
      </Link>
      <div>
        {navItems.map((item, index) => (
          <a key={index} href={item.link}>
            {item.title}
            <span></span>
          </a>
        ))}
      </div>
      <button>
        <Link href="/login">
          <span>{loggedIn ? "Sign Out" : "Login"}</span>
        </Link>
      </button>
    </nav>
  );
}
