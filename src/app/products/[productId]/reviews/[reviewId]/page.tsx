import React from "react";

const Page = async ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  const { productId, reviewId } = await params;
  return (
    <div>
      Product {productId} of review {reviewId}
    </div>
  );
};

export default Page;
