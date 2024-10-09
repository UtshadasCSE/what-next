import Link from "next/link";
import React from "react";

export default function Aboutpage() {
  return (
    <div>
      <Link href={"/about/story"}>Story</Link>
      <Link href={"/about/mission"}>Mission</Link>
    </div>
  );
}
