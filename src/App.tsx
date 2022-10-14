import { TaskContainer } from "./components/TaskContainer";
import { RocketLaunch } from "phosphor-react";
import "./global.css";
import "./App.css";

export function App() {
  return (
    <div className="mainContainer">
      <header>
        <div className="logoToDo">
          <RocketLaunch size="2rem" color="#4ea8de" />
          <h1>
            to<span>do</span>
          </h1>
        </div>
      </header>
      <TaskContainer />
    </div>
  );
}
