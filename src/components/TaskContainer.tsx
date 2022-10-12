import { useState } from "react";
import { ClipboardText } from "phosphor-react";
import { Task } from "./Task";
import style from "./TaskContainer.module.css";

interface Task {
  id: number;
  content: string;
  isNotCompleted?: boolean;
}

export function TaskContainer() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, content: "Task 1", isNotCompleted: false },
    { id: 2, content: "Task 2", isNotCompleted: false },
    { id: 3, content: "Task 3", isNotCompleted: false },
  ]);

  const isCompleted = tasks.filter(
    (task) => task.isNotCompleted === false
  ).length;

  return (
    <div className={style.container}>
      <header className={style.headerContainer}>
        <h5>
          Tarefas Criadas<span>{tasks.length}</span>
        </h5>
        <h5>
          Concluídas<span>{isCompleted}</span>
        </h5>
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
            return <Task />;
          })
        )}
      </main>
    </div>
  );
}
