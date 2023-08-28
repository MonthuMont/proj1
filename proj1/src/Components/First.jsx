import React from "react";
import "../ComponentsStyles/First.css";
import Dialog from "./Dialogs/Dialog";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import InputPost from "./Myposts/InputPost/InputPost";
import Navbar from "./Navbar"; 
import News from "./News/News";
let a = 11;
const First = (props) => {

  return (
    <Router>
      <div className="wrapper">
        <Header></Header>
        <Navbar></Navbar>
        <div>
          <Routes>
            <Route exact path="/profile" element={<Main messageData={props.firstState.profilePage.messageData} userData={props.firstState.profilePage.userData} addPostEl={props.addPostEl}></Main>} />
            <Route exact path="/dialogs/*" element={<Dialog dialogData={props.firstState.messagesPage.dialogData} messageData1={props.firstState.messagesPage.messageData1} ></Dialog>} />
            {/* <Route exact path="/dialogs/" */}
            <Route path="/news" element={<News></News>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default First;
