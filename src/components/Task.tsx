import style from "./Task.module.css";
import { Circle, Trash } from "phosphor-react";

export function Task() {
  return (
    <div className={style.taskBox}>
      <Circle className={style.circleButton} size="1.5rem" />
      <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        suscipit iste blanditiis autem?
      </span>
      <Trash className={style.trashButton} size="1.4rem" />
    </div>
  );
}
