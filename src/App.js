import React, { useState, useEffect } from "react";
import Axios from "axios";
import './App.css';
import NavBar from "./components/NavBar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Console from "./components/Console/Console";

function App() {

  const [list, setList] = useState([]);
  
  useEffect(() => {
    Axios({
      url: "https://api.rawg.io/api/platforms?key=f77360e856514e8c8460919630d845d5",
    })
      .then((response) => {
        setList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);

  return (
    <Router>
      <div className="container-page">
        <NavBar />
        <Console list={list}/>
      </div>
    </Router>
  );
}

export default App;
