import { useState } from "react";
import { ClipboardText } from "phosphor-react";
import { Task } from "./Task";
import style from "./TaskContainer.module.css";

export function TaskContainer() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isNotCompleted: true,
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isNotCompleted: false,
    },
    {
      id: 3,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isNotCompleted: true,
    },
  ]);

  const isCompleted = tasks.filter(
    (task) => task.isNotCompleted === false
  ).length;

  return (
    <div className={style.container}>
      <header>
        <form className={style.inputNewTask}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            Criar <span>+</span>
          </button>
        </form>
        <div className={style.headerContainer}>
          <h5>
            Tarefas Criadas<span>{tasks.length}</span>
          </h5>
          <h5>
            Concluídas
            <span>
              {isCompleted} de {tasks.length}
            </span>
          </h5>
        </div>
      </header>
      <main className={style.tasksContainer}>
        {tasks.length === 0 ? (
          <div className={style.emptyContainer}>
            <ClipboardText size="4.5rem" color="var(--gray-400)" />
            <span>Você ainda não tem tarefas cadastradas</span>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        ) : (
          tasks.map((task) => {
            return (
              <Task
                id={task.id}
                content={task.content}
                isNotCompleted={task.isNotCompleted}
              />
            );
          })
        )}
      </main>
    </div>
  );
}
