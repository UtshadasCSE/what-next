import React from "react";

const blogpage = async ({ params }) => {
  const res = await fetch(`https://api.vercel.app/blog/${params.id}`);
  const data = await res.json();

  const { title, content, author, category } = data;

  return (
    <div className="h-[70vh] flex justify-center items-center">
      <div className="bg-orange-200 shadow-lg w-max p-6 rounded-lg relative">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>{content}</p>
        <p className="absolute top-2 right-4">{category}</p>
        <p className="font-medium">{author}</p>
      </div>
    </div>
  );
};

export default blogpage;
