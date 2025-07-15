"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      Hello Dashboard
      <button onClick={handleClick}>Order Now</button>
    </div>
  );
};

export default Page;
