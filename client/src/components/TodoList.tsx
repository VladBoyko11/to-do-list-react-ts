import { useAppSelector } from "../hook"
import TodoItem from "./TodoItem"

const TodoList: React.FC = () => {
    const todos = useAppSelector(state => state.todosReducer.todos)
    return <div>{
        todos.map(todo => <TodoItem {...todo} key={todo.id}/>)
    }</div>
}

export default TodoList