import React from 'react'

import TodoForm from './TodoForm'
import UpdateTodo from './UpdateTodo'

class List extends React.Component{
    constructor(){
        super()
    this.state = {
        todos:[],
        text:"",
            completed:false,
            todoStatus:"all"
        
       
    }
}

addToList = (todo) =>{
       
    //const newItem = [...this.state.todos,todo]
this.setState({
    todos :[...this.state.todos,todo.text]
   
})

}

removeFromList =(itemTobeDelted) => {
    let newArray =  this.state.todos.filter(function(ele){
        return ele != itemTobeDelted;
    });
    this.setState({
        todos: newArray,
        completed: 'false'
    })
    console.log(newArray)

}



    render(){
        let todos = []
        if(this.state.todoStatus==='all'){
            todos = this.state.todos;
        }
        else if(this.state.todoStatus==='active')
        {
            todos = this.state.todos.filter(todo => todo.completed).length

        }
        else if(this.state.todoStatus==="complete")
        {
            todos = this.state.todos.filter(todo=>!todo.completed).length
        }
        return(
            <div>
                <TodoForm onSubmit={this.addToList}/>
                <ul>
                {
                    todos.map((item,i)=>{
                    return <li key={i} >{item}
                    <button className="remove-item" onClick={()=>this.removeFromList(item)}>X
                    </button>
                    <input type="checkbox" name="status" className="check-box"></input>
                   
                    </li>
                })
                }
            </ul>
           
          todos left: {this.state.todos.filter(todo => !todo.complete).length}
         <UpdateTodo/>
          </div>
      
        )
    }
}

export default List