import InputPost from "./Myposts/InputPost/InputPost";
import Comments from "./Myposts/Comments/Comments";
const MainLogo = (props) => {
  return (
    <div className="main-logo ">
      <img
        className="main-img"
        src="https://assets.turbologo.ru/blog/ru/2021/10/30071021/background4.png"
      ></img>
    </div>
  );
};
const UserInfo = (props) => {
  return (
    <div>
      <p className="user__info nick">{props.name}</p>
      <p className="user__info">{props.birthDate}</p>
      <p className="user__info">{props.city}</p>
      <p className="user__info">{props.education}</p>
      <p className="user__info">{props.gender}</p>
    </div>
  );
};
const UserImage = (props) => {
  return (
    <div>
      <img src={props.image} className="user-img"></img>
    </div>
  );
};
const Main = () => {
  const profileImages = {
    image:
      "https://pikuco.ru/upload/test_stable/6d7/6d744c3509179eeb5f3a1474a06b181e.webp",
  };
  const messageData = [
    { id: 1, message: "Nice pic!", likeCount: 10 },
    { id: 2, message: "Awful! ", likeCount: -7 },
    { id: 3, message: "You dumb!", likeCount: -19 },
    { id: 4, message: "Hi! My name is oleG", likeCount: -10 },
  ];
  let commentsMap = messageData.map((m) => (
    <Comments message={m.message} likes={m.likeCount} id={m.id}></Comments>
  ));
  const userData = {
    id: 14,
    name: "Name: Dmitry K",
    birthDate: "Date of birth: 2nd of January, 2000 ",
    city: " City: Togliatty",
    education: " Education: TGU",
    gender: " Sex: Male",
  };
  return (
    <main className="main">
      <MainLogo></MainLogo>
      <div className="user">
        <UserImage image={profileImages.image}></UserImage>
        <div className="user-flex">
          <UserInfo
            id={userData.id}
            name={userData.name}
            birthDate={userData.birthDate}
            city={userData.city}
            education={userData.education}
            gender={userData.gender}
          ></UserInfo>
        </div>
      </div>
      <div>
        <InputPost></InputPost>
        {commentsMap}
      </div>
    </main>
  );
};
export default Main;

{
  /* <div className="main-logo ">
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
      </div> */
}
