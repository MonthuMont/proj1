import "../ComponentsStyles/First.css";
import Dialog from "./Dialogs/Dialog";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import InputPost from "./Myposts/InputPost/InputPost";
import Navbar from "./Navbar";
let a = 11;
const First = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header></Header>
        <Navbar></Navbar>
        <div>
          <Routes>
            <Route path="./profile" element={<Main></Main>} />
            <Route path="/dialogs" element={<Dialog></Dialog>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default First;
