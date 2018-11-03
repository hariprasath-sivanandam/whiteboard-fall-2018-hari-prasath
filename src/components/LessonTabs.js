import React from 'react'
import LessonTab from "./LessonTab";
import AddLessonText from "./AddLessonText"

export default class LessonTabs extends React.Component{
    constructor(props){
        super(props)
    }

    render = () =>{
        return <ul className="nav nav-tabs">
            {
                this.props.lessons.map((lesson, index) =>
                    <div>
                    <LessonTab
                        selected={this.props.lessonToEdit === lesson}
                        selectLesson={this.props.selectLesson}
                        deleteLesson={this.props.deleteLesson}
                        lesson={lesson}
                        key={index}/>
                    </div>
                )
            }
            <AddLessonText courseId={this.props.courseId} moduleId= {this.props.moduleId}

                           addNewLesson = {this.props.addNewLesson}
            />
        </ul>

    }
}