"use server";

import React from "react";
import NewBlog from "./NewBlog";
import ListBlog from "./ListBlog";

const Body = () => {
  return (
    <div>
      <NewBlog />
      <ListBlog />
    </div>
  );
};

export default Body;
