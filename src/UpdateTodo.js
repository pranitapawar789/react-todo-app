import React from 'react'
import List from './List';
import FilterButtons from './FilterButtons';

class UpdateTodo extends React.Component {
    render(props) {
        console.log('current filter:', this.props.option)

        let items = this.props.todos.filter((item, i) => {
            if (this.props.option == 'Completed') {
                return item.complete;
            } else if (this.props.option == 'active') {
                return !item.complete;
            }
            return item;
        })
        return (
            <ul>
            {items.map((todo, i) => {
                 return (
                    <li key={i} >{todo}
                   
                    
                </li>
                 )
                })}
            </ul>
 );
 }
}

export default UpdateTodo

