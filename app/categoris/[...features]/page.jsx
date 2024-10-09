import React from "react";

const categorisFeaturespage = ({ params }) => {
  if (params.length > 3) {
    return <diV>{params.fetaures[2]}</diV>;
  }
  return <div>Hello cate deatisl</div>;
};

export default categorisFeaturespage;
