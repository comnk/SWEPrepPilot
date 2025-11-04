"use client";

import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error("Error fetching:", error));
  }, []);

  return (
    <div>
      <Navbar />
      <p>{message}</p>
    </div>
  );
}
