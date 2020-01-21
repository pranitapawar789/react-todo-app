import React from 'react'
import List from './List';

class UpdateTodo extends React.Component {
    render(props) {
        console.log('current filter:', this.props.option)

        let { item } = this.props.todos.filter((item, i) => {
            if (this.props.option == 'Completed') {
                return item.complete;
            } else if (this.props.option == 'active') {
                return !item.complete;
            }
            return item;
        })
        return (
            <ul>



                {this.props.todos.map((todo, i) => {

                    return <List todo={todo} key={i} todoChange={() => this.props.onTodoChange(todo.id)} ></List>
                })}

            </ul>



        );


    }
}

export default UpdateTodo
const Filter = (props) => {
    const value = props.value;
    return (
        <button onClick={() => props.filterClicked(value)}>{value}</button>
    )
}
