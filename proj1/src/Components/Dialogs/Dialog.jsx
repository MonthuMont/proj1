import styles from "./Dialog.module.css";
import { NavLink } from "react-router-dom";
import RightBlock from "./RightBlock";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const DialogItem = (props) => {
  return (
    <li className={styles.item}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </li>
  );
};

const Dialog = (props) => {
  let dialogNames = props.dialogData.map((el) => (
    <DialogItem name={el.name} id={el.id}></DialogItem>
  ));
  let route = props.dialogData.map((el) => (
    <Route
      path={String(el.id)}
      element={
        <RightBlock messageData1={props.messageData1} name={el.name}></RightBlock>
      }
    ></Route>
  ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftblock}>
        <h1 className={styles.h1}>Dialogs</h1>
        <ul className={styles.listItem}>{dialogNames}</ul>
      </div>

      <div className={styles.rightblock}>
        <Routes>
          {/* <Route
            path="1"
            element={<RightBlock name="Andy"></RightBlock>}
          ></Route> */}
          {route}
        </Routes>
      </div>
    </div>
  );
};
export default Dialog;
