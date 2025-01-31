import React, { useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../actions/auth";


const Layout = ({ checkAuthenticated, load_user, children }) => {
  
  useEffect(() => {
   
    checkAuthenticated();
    load_user();
  }, [checkAuthenticated,load_user]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user})(Layout);
