import React from "react";
import CourseService from "../services/CourseService";

export default  class AddTopicText extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentText : ""
        }
    }

    handleAddNewTopic = (courseId, moduleId, lessonId)=>{
        const id = Math.floor(Math.random() * 10000000)
        const newTopic = {
            id : id,
            title : this.state.currentText,
            widgets: []
        }
        this.props.addNewTopic(courseId, moduleId, newTopic)
    }

    updateCurrentState=(e)=>{
        this.setState({
            currentText : e.target.value
        })
    }

    render(){
        return <div>
            <li className="nav-item">
                <div className="pull-left">
                    <input type="text" className="form-control" id="exampleInputEmail1"
                           placeholder="New Topic name" onChange={this.updateCurrentState}></input>
                </div>
                <div className="pull-right">
                    <button onClick={()=>this.handleAddNewTopic(this.props.courseId, this.props.moduleId, this.props.lessonId )}
                            disabled={!this.state.currentText}>
                        <i className="fa fa-plus-circle fa-2x" aria-hidden="true"></i>
                    </button>
                </div>
            </li>
        </div>
    }
}