import React from "react";
import CourseService from "../services/CourseService";

export default  class EditableModule extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            currentText : ""
        }

    }

    handleUpdateModule = (courseId )=>{
        const newModule = {...this.props.module, title : this.state.currentText}
    }

    componentDidMount(){
        this.setState({
            currentText : this.props.module.title
        })
    }

    updateCurrentState=(e)=>{
        this.setState({
            currentText : e.target.value

        })
    }
    render(){
        return <div>
            <li  className= "list-group-item" >

                <input type="text" className="form-control" id="exampleInputEmail1" value={this.state.currentText}
                       placeholder="New Module name " onChange={this.updateCurrentState}></input>
                <button className="btn btn-block btn-outline-primary" onClick={()=>this.props.updateModuleTitle(this.state.currentText)} disabled={!this.state.currentText}> Update </button>
            </li>


        </div>
    }
}
