import React from "react";
import CourseService from "../services/CourseService";

export default  class AddLessonText extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentText : ""
        }
        console.log("add lesson")
        console.log(this.props)
    }

    handleAddNewLesson = (courseId, moduleId)=>{
        const id = Math.floor(Math.random() * 10000000)
        const newLesson = {
            id : id,
            title : this.state.currentText,
            topics:[]
        }
        this.props.addNewLesson(courseId, moduleId, newLesson)
    }

    updateCurrentState=(e)=>{
        this.setState({
            currentText : e.target.value
        })
    }

    render(){
        return <div>
            <li className="nav-item ">
                <input type="text" className="form-control" id="exampleInputEmail1"
                       placeholder="New Lesson name " onChange={this.updateCurrentState}></input>
                <button className="btn btn-block btn-outline-primary" onClick={()=>this.handleAddNewLesson(this.props.courseId, this.props.moduleId)}
                        disabled={!this.state.currentText}> Add new Lesson </button>
            </li>
        </div>
    }
}
