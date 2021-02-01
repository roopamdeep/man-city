import React from "react";
import Footer from "../components/header_footer/Footer";

import Header from "../components/header_footer/Header";
import Home from "../components/home";
const Layout = (props) => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default Layout;
