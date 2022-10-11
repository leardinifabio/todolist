import style from "./TaskContainer.module.css";

export function TaskContainer() {
  return (
    <header className={style.taskContainer}>
      <span>Tarefas Criadas</span>
      <span>Concluídas</span>
    </header>
  );
}
