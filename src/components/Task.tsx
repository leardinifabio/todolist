import style from "./Task.module.css";
import { Circle, CheckCircle, Trash } from "phosphor-react";

interface Task {
  id: number;
  content: string;
  isNotCompleted: boolean;
}

interface TaskProps {
  id: Task["id"];
  content: Task["content"];
  isNotCompleted: Task["isNotCompleted"];
  onDeleteComment: (taskToDelete: number) => void;
  onFinishTask: (
    taskToFinishId: number,
    taskToFinishIsNotCompleted: boolean
  ) => void;
}

export function Task({
  id,
  content,
  isNotCompleted,
  onDeleteComment,
  onFinishTask,
}: TaskProps) {
  function handleDeleteComment() {
    onDeleteComment(id);
    console.log(id);
  }

  function handleFinishTask() {
    onFinishTask(id, isNotCompleted);
  }

  return (
    <div className={style.taskBox}>
      {isNotCompleted ? (
        <Circle
          className={style.circleButton}
          size="1.5rem"
          onClick={handleFinishTask}
        />
      ) : (
        <CheckCircle
          className={style.circleButton}
          size="1.5rem"
          weight="fill"
          onClick={handleFinishTask}
        />
      )}

      <span
        className={
          isNotCompleted === true ? style.isNotCompleted : style.completed
        }
      >
        {content}
      </span>
      <Trash
        className={style.trashButton}
        size="1.4rem"
        onClick={handleDeleteComment}
      />
    </div>
  );
}
