import React from "react";

const Page = async ({ params }: { params: { blogId: string } }) => {
  const blogId = (await params).blogId;
  return (
    <div>
      <h4>Blog for ID:{blogId} </h4>
    </div>
  );
};

export default Page;
