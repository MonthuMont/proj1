import InputPost from "./Myposts/InputPost/InputPost";
import Comments from "./Myposts/Comments/Comments";
const Main = () => {
  return (
    <main className="main">
      <div className="main-logo ">
        <img
          className="main-img"
          src="https://assets.turbologo.ru/blog/ru/2021/10/30071021/background4.png"
        ></img>
      </div>
      <div className="user">
        <img
          src="https://pikuco.ru/upload/test_stable/6d7/6d744c3509179eeb5f3a1474a06b181e.webp"
          className="user-img"
        ></img>
        <div className="user-flex">
          <p className="user__info nick">Dmitry K</p>
          <p className="user__info">Date of Birthday: 2 Jan</p>
          <p className="user__info">City: Togliatty</p>
          <p className="user__info">Education:TGU</p>
          <p className="user__info">Gender: Male</p>
        </div>
      </div>
      <div>
        <InputPost></InputPost>
        <Comments message="Hello Motherfucker!" likes = "77"></Comments>
        <Comments message= "Wanna play some games?" likes = "11"></Comments>
        <Comments message = "Hello! My name is oleG!" likes = "-9"></Comments>
      </div>
    </main>
  );
};
export default Main;
