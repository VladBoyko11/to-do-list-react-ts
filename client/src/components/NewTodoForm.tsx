import {useState} from 'react'
import { useAppDispatch } from '../hook'
import { addTodo } from '../redux/Reducers/TodoSlice'

const NewTodoForm: React.FC = () => {
    const [text, setText] = useState<string>('')
    const dispatch = useAppDispatch()

    const handleAction = () => {
        if(text.trim().length) {
            dispatch(addTodo(text))
            setText('')
        }
    }

    const updateText = (value: string) =>{
        setText(value)
    }

    return <label className='container mt-2'>
        <input placeholder="new todo" value={text} onChange={(e) => updateText(e.target.value)}/>
        <button className='btn-primary' onClick={handleAction}>Add todo</button>
    </label>
}

export default NewTodoForm