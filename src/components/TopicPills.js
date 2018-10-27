import React from 'react'
import LessonTab from "./LessonTab";
import AddTopicText from "./AddTopicText"
import TopicPill from "./TopicPill";

export default class TopicPills extends React.Component{
    constructor(props){
        super(props)
        console.log("topics")
        console.log(this.props)
    }
//     return  <ul className="list-group">
//
// // <AddModuleText courseId={this.props.courseId}
// addNewModule = {this.props.addNewModule}
// />
// {
//     this.props.modules.map((module, index) =>
//         <div>
//             <EditableModuleListItem
//                 selected={this.props.moduleToEdit === module}
//                 selectModuleToEdit={this.props.selectModuleToEdit}
//                 deleteModule={this.props.deleteModule}
//                 updateModule={this.props.updateModule}
//                 courseId={1234}
//                 updateModuleTitle ={this.props.updateModuleTitle}
//                 selectModule = {this.props.selectModule}
//                 selectedModule = {this.props.selectedModule}
//                 key={index}
//                 module={module}/>
//         </div>
//
//     )
// }
    render = () =>{
        return <ul className="nav nav-tabs">
            {
                this.props.topics.map((topic, index) =>
                    <div>
                        <TopicPill
                            selected={this.props.topicToEdit === topic}
                            selectTopic={this.props.selectTopic}
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

// const LessonTabs = ({lessons, selectLesson, selectedLesson}) =>
//     <ul className="nav nav-tabs">
//         {
//             lessons.map((lesson, index) =>
//                 <LessonTab
//                     selected={selectedLesson === lesson}
//                     selectLesson={selectLesson}
//                     lesson={lesson}
//                     key={index}/>
//             )
//         }
//         <AddLessonText courseId={this.props.courseId}
//                        addNewModule = {this.props.addNewModule}
//         />
//     </ul>
//
// export default LessonTabs

// import AddLessonText