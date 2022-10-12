import style from "./Task.module.css";
import { Circle, Trash } from "phosphor-react";

export function Task() {
  return (
    <div className={style.taskBox}>
      <Circle size="1.5rem" color="#4ea8de" />
      <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        suscipit iste blanditiis autem?
      </span>
      <Trash size="1.4rem" color="#808080" />
    </div>
  );
}
