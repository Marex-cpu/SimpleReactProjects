import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import "../css/Home.css";

function Home() {
  return (
    <div className='container'>
      <Header />
      <Main />
      <footer className='footer'>Powered by Marko Petrovic</footer>
    </div>
  );
}

export default Home;
