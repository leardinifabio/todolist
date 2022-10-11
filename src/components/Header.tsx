import style from "./Header.module.css";

export function Header() {
  return (
    <div>
      <header className={style.headerComponentContainer}>
        <div className={style.logoToDo}>
          <img src="../public/rocket.svg" />
          <h1>
            to<span>do</span>
          </h1>
        </div>
      </header>
      <label className={style.inputNewTask}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar <span>+</span>
        </button>
      </label>
    </div>
  );
}
