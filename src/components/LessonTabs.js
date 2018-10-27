import React from 'react'
import LessonTab from "./LessonTab";
import AddLessonText from "./AddLessonText"

export default class LessonTabs extends React.Component{
    constructor(props){
        super(props)
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

//deleteModule={this.props.deleteModule}

//selectModuleToEdit={this.props.selectModuleToEdit}
//updateModule={this.props.updateModule}
//courseId={1234}
//updateModuleTitle ={this.props.updateModuleTitle}
//selectModule = {this.props.selectModule}
//selectedModule = {this.props.selectedModule}
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