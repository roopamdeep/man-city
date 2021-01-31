import React from "react";

import Header from "../components/header_footer/Header";
const Layout = (props) => {
  return (
    <div>
      <Header />
      Layout{props.children}
    </div>
  );
};

export default Layout;
