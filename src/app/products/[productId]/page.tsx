import React from "react";

const Page = async ({ params }: { params: { productId: string } }) => {
  const productId = await params.productId;
  return <div>Product ID for :{productId}</div>;
};

export default Page;
