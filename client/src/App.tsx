import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <NewTodoForm />
      <TodoList />
    </Provider>
  );
}

export default App;
