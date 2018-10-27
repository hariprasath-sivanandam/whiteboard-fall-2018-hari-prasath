import React from "react";
import CourseService from "../services/CourseService";

export default  class AddTopicText extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentText : ""
        }
        console.log("topics")
        console.log(this.props)
    }

    handleAddNewTopic = (courseId, moduleId, lessonId)=>{
        const id = Math.floor(Math.random() * 10000000)
        const newTopic = {
            id : id,
            title : this.state.currentText,
            widgets: []
        }
        this.props.addNewTopic(courseId, moduleId, lessonId, newTopic)
    }

    updateCurrentState=(e)=>{
        this.setState({
            currentText : e.target.value
        })
    }

    render(){
        return <div>
            <li className="nav-item">
                <input type="text" className="form-control" id="exampleInputEmail1"
                       placeholder="New Topic name" onChange={this.updateCurrentState}></input>
                <button className="btn btn-block btn-outline-primary"
                        onClick={()=>this.handleAddNewTopic(this.props.courseId, this.props.moduleId, this.props.lessonId )}
                        disabled={!this.state.currentText}> Add Topic </button>
            </li>
        </div>
    }
}