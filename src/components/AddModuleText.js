import React from "react";
import CourseService from "../services/CourseService";

export default  class AddModuleText extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentText : ""
        }
    }

    handleAddNewModule = (courseId)=>{

        const id = Math.floor(Math.random() * 10000000)
        const newModule = {
            id : id,
            title : this.state.currentText,
            lessons:[]
        }
        this.props.addNewModule(courseId, newModule)
    }

    updateCurrentState=(e)=>{
        this.setState({
            currentText : e.target.value

        })
    }

    render(){
        return <div>
            <li  className= "list-group-item" >

                <input type="text" className="form-control" id="exampleInputEmail1"
                       placeholder="New Module name " onChange={this.updateCurrentState}></input>
                <button className="btn btn-block btn-outline-primary" onClick={()=>this.handleAddNewModule(this.props.courseId)} disabled={!this.state.currentText}> Add new module </button>
            </li>


        </div>
    }
}
