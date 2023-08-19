import React from "react";
import "../ComponentsStyles/First.css";
import Dialog from "./Dialogs/Dialog";
import { BrowserRouter as Router,Routes , Route  } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import InputPost from "./Myposts/InputPost/InputPost";
import Navbar from "./Navbar";
let a = 11;
const First = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header></Header>
        <Navbar></Navbar>
        <div>
          <Routes>
            <Route exact path="/profile" element={<Main></Main>} />
            <Route exact path="/dialogs" element={<Dialog></Dialog>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default First;
