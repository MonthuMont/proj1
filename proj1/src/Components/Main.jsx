const Main = () => {
    return(
        <main className="main">
        <div className="main-logo ">
          <img
            className="main-img"
            src="https://pluspng.com/img-png/new-balance-logo-png-new-balance-logo-jpg-1598.jpg"
          ></img>
        </div>
        <div className="user">
          <img
            src="https://img.freepik.com/premium-vector/cool-man-profile-photo-icon-profile-icon-male-head-face-flat-design-vector-illustration_750364-393.jpg"
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
        <div className="input">Input</div>
      </main>
    )
}
export default Main;