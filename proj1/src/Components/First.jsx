import "../ComponentsStyles/First.css";
import Header from "./Header";
import Main from "./Main";
import InputPost from "./Myposts/InputPost/InputPost";
import Navbar from "./Navbar";
let a = 11;
const First = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <Navbar></Navbar>
      <Main></Main>
    </div>
  );
};
export default First;
