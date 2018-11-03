import React from 'react'
import LessonTab from "./LessonTab";
import AddTopicText from "./AddTopicText"
import TopicPill from "./TopicPill";

export default class TopicPills extends React.Component{
    constructor(props){
        super(props)
    }

    render = () =>{
        return <ul className="nav nav-tabs">
            {
                this.props.topics.map((topic, index) =>
                    <div>
                        <TopicPill
                            selected={this.props.topicToEdit === topic}
                            selectTopic={this.props.selectTopic}
                            deleteTopic={this.props.deleteTopic}
                            topic={topic}
                            key={index}/>
                    </div>
                )
            }
            <AddTopicText courseId={this.props.courseId} moduleId= {this.props.moduleId} lessonId = {this.props.lessonId}
                           addNewTopic = {this.props.addNewTopic}
            />
        </ul>

    }
}