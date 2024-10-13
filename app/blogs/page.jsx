import Link from "next/link";
import React from "react";

const getBlogs = async () => {
  const res = await fetch("https://api.vercel.app/blog");
  const data = res.json();
  return data;
};

const Blogspage = async () => {
  const allblogs = await getBlogs();
  //   console.log(allblogs);

  return (
    <div>
      <div className="grid grid-cols-3 gap-3 my-4 mx-3">
        {allblogs?.map((blog) => (
          <div
            key={blog.id}
            className="border-2 rounded p-4 flex flex-col gap-3"
          >
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <Link href={`/blogs/${blog.id}`}>
              <button className="p-2 bg-amber-500 rounded-lg">Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogspage;
