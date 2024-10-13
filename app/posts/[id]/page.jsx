import React from "react";

const Postpage = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await res.json();

  return (
    <div>
      <div>
        <h2>Hello: {data.title}</h2>
        <p>{data.body}</p>
      </div>
    </div>
  );
};

export default Postpage;
