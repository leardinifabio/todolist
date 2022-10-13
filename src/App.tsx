import { TaskContainer } from "./components/TaskContainer";
import "./global.css";
import "./App.css";

export function App() {
  return (
    <div className="mainContainer">
      <header>
        <div className="logoToDo">
          <img src="../public/rocket.svg" />
          <h1>
            to<span>do</span>
          </h1>
        </div>
      </header>
      <TaskContainer />
    </div>
  );
}
