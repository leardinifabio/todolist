import { ChangeEvent, FormEvent, useState } from "react";
import { ClipboardText } from "phosphor-react";
import { Task } from "./Task";
import style from "./TaskContainer.module.css";

interface Task {
  id: number;
  content: string;
  isNotCompleted: boolean;
}

export function TaskContainer() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([
      ...tasks,
      { id: tasks.length + 1, content: newTask, isNotCompleted: true },
    ]);
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function deleteComent(taskToDelete: number) {
    const taskWithoutDelete = tasks.filter((task) => task.id !== taskToDelete);
    setTasks(taskWithoutDelete);
  }

  function finishTask(
    taskToFinishId: number,
    taskFinishIsNotCompleted: boolean
  ) {
    const taskToFinish = tasks.find((task) => task.id === taskToFinishId);
    if (taskToFinish) {
      taskToFinish.isNotCompleted = !taskFinishIsNotCompleted;
      setTasks([...tasks]);
    }
  }

  const isCompleted = tasks.filter(
    (task) => task.isNotCompleted === false
  ).length;

  return (
    <div className={style.container}>
      <header>
        <form onSubmit={handleNewTask} className={style.inputNewTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={handleNewTaskChange}
            required
          />
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
                key={task.id}
                id={task.id}
                content={task.content}
                isNotCompleted={task.isNotCompleted}
                onDeleteComment={deleteComent}
                onFinishTask={finishTask}
              />
            );
          })
        )}
      </main>
    </div>
  );
}
