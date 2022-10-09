import "./global.css";
import "./App.css";

export function App() {
  return (
    <div>
      <header>
        <div className="logoToDo">
          <img src="../public/rocket.svg" />
          <h1>
            to<span>do</span>
          </h1>
        </div>
      </header>
      <label className="inputNewTask">
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar <span>+</span>
        </button>
      </label>
    </div>
  );
}
