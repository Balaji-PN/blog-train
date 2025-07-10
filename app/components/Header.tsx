import React from "react";
import Logo from "./Logo";
import User from "./User";

const Header = () => {
  return (
    <div className="flex justify-between bg-background text-foreground px-4 py-2">
      <Logo />
      <User />
    </div>
  );
};

export default Header;
