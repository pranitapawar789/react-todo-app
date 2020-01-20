import React from 'react'
import './styleTodo.css'
import TodoForm from './TodoForm'
import UpdateTodo from './UpdateTodo'

class List extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            text: "",
            completed: '' ,
            option:'all'
            


        }
    }

    addToList = (todo) => {


        this.setState({
            todos: [...this.state.todos, todo.text]

        })

    }

    removeFromList = (itemTobeDelted) => {
        let newArray = this.state.todos.filter(function (e) {
            return e != itemTobeDelted;
        });
        this.setState({
            todos: newArray,
            completed: 'false'
        })
        console.log(newArray);


    }

    // updateTodoToShow = (todos) => {
    //     this.setState({
    //         todoToShow: todos
    //     })
    //     console.log("rhru")
    // }
    
    handleOption = (newOption) =>{
        this.setState({
            option:newOption
        })
        console.log("hello")
    }
    check = () =>{
        this.setState({
            completed:true
        })
        console.log(this.state.completed);
    }
    render() {
        if(this.state.option==='all')
        {
        
        // let todos = [];
        // if (this.state.todoStatus === 'all') {
        //     todos = this.state.todos;
        //     console.log(this.state.todo);

        // }
        // else if (this.state.todoStatus === 'active') {
        //     todos = this.state.todos.filter(todo => todo.completed).length



        // }
        // else if (this.state.todoStatus === "complete") {
        //     todos = this.state.todos.filter(todo => !todo.completed).length

        // }
        return (
            <div>
                <TodoForm onSubmit={this.addToList} />
                <ul className="todo-items">
                    {
                        this.state.todos.map((item, i) => {
                           
                            return <li key={i} >{item}
                                <button className="remove-item" onClick={() => this.removeFromList(item)}>X
                                </button>
                                <input type="checkbox" name="status" className="check-box" onClick={this.check}></input>

                            </li>
                        
                        })
                    }
                </ul>
            

                <span>No of  Todos :</span> {this.state.todos.filter(todo => !todo.completed).length}
                <UpdateTodo/>
            </div>

        )
    }
}
}

export default List