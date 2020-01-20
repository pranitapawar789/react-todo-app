import React from 'react'

import './styleTodo.css'
class TodoForm extends React.Component {
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit({
            text: this.state.text,
            completed: false
        })
        console.log(this.state.text);
    }



    render() {
        return (
            <div className="todo-input">
                <form>
                    <input type="text" placeholder="enter todo" onChange={this.handleChange} name="text" value={this.props.text} />
                    <button className="add" onClick={(e) => this.handleSubmit(e)}>Add</button>
                </form>




            </div>
        )
    }
}

export default TodoForm;