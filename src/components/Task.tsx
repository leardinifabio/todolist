import style from "./Task.module.css";
import { Circle, CheckCircle, Trash } from "phosphor-react";

interface Task {
  id: number;
  content: string;
  isNotCompleted?: boolean;
}

export function Task({ content, isNotCompleted }: Task) {
  return (
    <div className={style.taskBox}>
      {isNotCompleted ? (
        <Circle className={style.circleButton} size="1.5rem" />
      ) : (
        <CheckCircle
          className={style.circleButton}
          size="1.5rem"
          weight="fill"
        />
      )}

      <span
        className={
          isNotCompleted === true ? style.isNotCompleted : style.completed
        }
      >
        {content}
      </span>
      <Trash className={style.trashButton} size="1.4rem" />
    </div>
  );
}
