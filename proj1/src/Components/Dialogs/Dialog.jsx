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
  const dialogData = [
    { id: 1, name: "Andy" },
    { id: 2, name: "Jack" },
    { id: 3, name: "Melon" },
    { id: 4, name: "Sore" },
  ];
  let dialogNames = dialogData.map((el) => (
    <DialogItem name={el.name} id={el.id}></DialogItem>
  ));
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftblock}>
        <h1 className={styles.h1}>Dialogs</h1>
        <ul className={styles.listItem}>
          {dialogNames}
        </ul>
      </div>

      <div className={styles.rightblock}>
        <Routes>
          <Route
            path="1"
            element={<RightBlock name="Andy"></RightBlock>}
          ></Route>
          <Route
            path="2"
            element={<RightBlock name="kensi"></RightBlock>}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};
export default Dialog;
