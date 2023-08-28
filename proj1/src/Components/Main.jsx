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
const Main = (props) => {
  const profileImages = {
    image:
      "https://pikuco.ru/upload/test_stable/6d7/6d744c3509179eeb5f3a1474a06b181e.webp",
  };

  let commentsMap = props.messageData.map((m) => (
    <Comments message={m.message} likes={m.likeCount} id={m.id}></Comments>
  ));

  return (
    <main className="main">
      <MainLogo></MainLogo>
      <div className="user">
        <UserImage image={profileImages.image}></UserImage>
        <div className="user-flex">
          <UserInfo
            id={props.userData.id}
            name={props.userData.name}
            birthDate={props.userData.birthDate}
            city={props.userData.city}
            education={props.userData.education}
            gender={props.userData.gender}
          ></UserInfo>
        </div>
      </div>
      <div>
        <InputPost addPostEl={props.addPostEl}></InputPost>
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
