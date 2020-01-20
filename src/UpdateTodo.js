import React from 'react'

class UpdateTodo extends React.Component{
    render(){
        return(
            <div className="btn-container">
            <button handleOption={this.props.handleOption} value={'all'}>All</button>
            <button handleOption={this.props.handleOption} value={'active'}>Active</button>
            <button handleOption={this.props.handleOption} value={'completed'}>Completed</button>
            </div>
        )
    }
}

export default UpdateTodo
