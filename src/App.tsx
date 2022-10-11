import { Header } from "./components/Header";
import { TaskContainer } from "./components/TaskContainer";
import "./global.css";
import "./App.css";

export function App() {
  return (
    <div className="mainContainer">
      <Header />
      <TaskContainer />
    </div>
  );
}
