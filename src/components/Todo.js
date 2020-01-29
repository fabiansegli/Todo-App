import React, { Component } from 'react'


class Todo extends Component {
    state = {
        text: '', 
        listItems: []
    }

    handleTextChange = (e) => {
        this.setState({ text: e.target.value})
    }

    handleClicked = () => {
        const items = [ ...this.state.listItems ]
        items.push(this.state.text)
        this.setState({ listItems: items })
    }

    render() {
        return (
           <div style={{ marginTop: '30px' }}>
                <input type="text" onChange={this.handleTextChange} />
                <button style={{ backgroundColor: 'gray', boxShadow: '5px 5px 5px black' }} onClick={this.handleClicked}>Add Task</button>
                {
                 this.state.listItems.map(value => {
                    return <p>{ value }</p>
               })
             }
           </div>
        )
    }
}

export default Todo