import React, {Components} from 'react'

class Todo extends Component {
state = {
    text: 'initial'
}
    render() {
    return (
    <div>
        <input type='text'/>
        <button> Add Task</button>
    </div>
    )
}
}

export default Todo 