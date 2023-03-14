import { useAppDispatch } from "../hook";
import { toggleComplete, removeTodo } from "../redux/Reducers/TodoSlice";

interface TodoItemProps {
    id: string,
    text: string,
    completed: boolean
}

const TodoItem: React.FC<TodoItemProps> = ({id, text, completed}) => {
    const dispatch = useAppDispatch()
    return <div className="d-flex justify-content-between w-50">
        <input className="col-1" type='checkbox' checked={completed} onChange={() => dispatch(toggleComplete(id))}/>
        <span className="col-10 text-break align-self-center fs-5 p-1">{text}</span>
        <span className="btn col-1 align-self-center fs-2" onClick={() => dispatch(removeTodo(id))}>&times;</span>
    </div>
}

export default TodoItem