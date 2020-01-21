import React from 'react';
class FilterButtons extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
         return (
            <div className="btn-container">
                <Option handleOption={this.props.handleOption} value={'All'}>All</Option>
                <Option handleOption={this.props.handleOption} value={'Completed'}>Completed</Option>
                <Option handleOption={this.props.handleOption} value={'Pending'}>Pending</Option>
            </div>
        )
    }
}

export default FilterButtons;

const Option = (props)=>{
    const value = props.value
    return(
        <button onClick={()=>props.handleOption(value)}>{value}</button>
    )
}
