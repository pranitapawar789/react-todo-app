import React, { Component } from 'react'



class UpdateTodo extends Component{
    
    allTodo  = () =>{
        this.setState({
            [this.props.completed]:false
            
        })
    
        console.log([this.props.completed]);
    }

    activeTodo = () =>{
       this.setState({ 
           [this.props.completed] : false
       })
       console.log([this.props.completed]);
    }

    completedTodo = () =>{
        this.setState({
            [this.props.completed]:true
        })
        console.log([this.props.completed]);
    }

    render(){
        return(
            <div>
               <button onClick={this.allTodo}>All</button>
               < button onClick={this.activeTodo}> Active</button>
                <button onClick={this.activeTodo}>completed</button> 
            </div>

    

        )
    }
}
    
    export default UpdateTodo