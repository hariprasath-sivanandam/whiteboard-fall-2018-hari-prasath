import React, {Component} from 'react'
import ModuleList from '../components/ModuleList'
import CourseService from "../services/CourseService";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";
import WidgetListContainerStateless from "./WidgetListContainerStateless";
//import WidgetList from "../components/WidgetList";

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);
        // retrieve courseId from the URL path parameter 'courseId'
        // the props.match.params is part of the Route library which
        // use courseId to find the course object from the
        // the params map
        // parses the URL path and names the parameters and creates

        const courseId = this.props.match.params.courseId;
        // courses array passed in as a property
        this.courseService = new CourseService();
        this.state = {
            course:this.courseService.findCourseById(courseId),
            moduleToEdit: null,
            selectedModule: null,
            lessonToEdit: null,
            selectedLesson: null,
            selectedTopic: null
        }
    }

    addNewTopic=(courseId, moduleId, newTopic)=>{
        const  courseService = new CourseService();
        courseService.addTopicByLessonId(courseId, moduleId, this.state.selectedLesson.id, newTopic)

        this.setState({
        })
    }

    addNewModule=(courseId, newModule)=>{

        const  courseService = new CourseService();

        courseService.addModuleByCourseId(courseId, newModule)

        this.setState({

        })
    }

    addNewLesson=(courseId, moduleId, newLesson)=>{

        const  courseService = new CourseService();

        courseService.addLesssonByModuleId(courseId, moduleId, newLesson)

        this.setState({
        })
    }

    handleDeleteModule=(moduleId)=>{
        const  courseService = new CourseService();
        const newCourseState = courseService.deleteModuleById(this.state.course.id, moduleId)
        if (!!newCourseState){
            this.setState({
                selectedModules : newCourseState.modules
            })
        }
    }

    handleDeleteLesson=(lessonId)=>{
        const  courseService = new CourseService();
        const newSelectedModule = courseService.deleteLessonById(this.state.course.id, this.state.selectedModule.id, lessonId)
        if(!! newSelectedModule){
            this.setState({
                selectedModule: newSelectedModule
            })
        }
    }

    handleDeleteTopic=( topicId)=>{
        const courseService = new CourseService();
        const newselectedModule = courseService.deleteTopicById(this.state.course.id, this.state.selectedModule.id, this.state.selectedLesson.id, topicId)
        if (!!newselectedModule){
            this.setState({
                selectedModule : newselectedModule
            })
        }
    }

    selectModule =(module,cb)=>{
        this.setState({
            selectedModule : module
        })
    }

    selectLesson =(lesson,cb)=>{
        this.setState({
            selectedLesson : lesson
        })
    }

    selectTopic =(topic,cb)=>{
        this.setState({
            selectedTopic : topic
        })
    }

    selectModuleToEdit =(module,cb)=>{
        this.setState({
            moduleToEdit : module
        }, ()=>{
        })

    }

    editModule =(module)=>{
        this.setState({
            moduleToEdit : module
        }, ()=>{
        })
    }

    updateModuleTitle=(newText)=>{
        const newModule = {...this.state.moduleToEdit, title : newText}
        this.setState({
            course :  this.courseService.updateModule(this.state.course.id, newModule)
        })
    }

    render()
        {
        return (
            <div>
                <h2>Course Editor:
                    {this.props.match.params.courseId}
                    {this.state.course.title}
                    ({this.props.match.params.courseId})
                </h2>
                <div className="row">
                    <div className="col-4">
                        <ModuleList
                            selectModuleToEdit={this.selectModuleToEdit}
                            moduleToEdit={this.state.moduleToEdit}
                            deleteModule={this.handleDeleteModule}
                            modules={this.state.course.modules}
                            addNewModule ={this.addNewModule}
                            courseId ={this.state.course.id}
                            updateModuleTitle={this.updateModuleTitle}
                            updateModule ={this.editModule}
                            selectModule = {this.selectModule}
                            selectedModule = {this.state.selectedModule}/>
                    </div>
                    <div className="col-8">

                        { !! this.state.selectedModule && <LessonTabs lessons={this.state.selectedModule.lessons}
                                                                      selectLesson={this.selectLesson}
                                                                      selectedLesson={this.state.selectedLesson}
                                                                      courseId ={this.state.course.id}
                                                                      moduleId = {this.state.selectedModule.id}
                                                                      addNewLesson={this.addNewLesson}
                                                                      deleteLesson = {this.handleDeleteLesson}
                        />}
                        { !! this.state.selectedLesson && <TopicPills topics={this.state.selectedLesson.topics}
                                                                      selectTopic={this.selectTopic}
                                                                      selectedTopic={this.state.selectedTopic}
                                                                      courseId = {this.state.course.id}
                                                                      moduleId = {this.state.selectedModule.id}
                                                                      addNewTopic = {this.addNewTopic}
                                                                      deleteTopic = {this.handleDeleteTopic}
                        />}
                        {!!this.state.selectedTopic &&
                        <div className=" card widgetContainer row  py-2 container mx-auto">
                            <WidgetListContainerStateless
                                course         =   { this.state.course}
                                module         =   { this.state.selectedModule}
                                lesson         =   { this.state.selectedLesson}
                                topic          =   { this.state.selectedTopic}
                            />
                        </div>}
                    </div>
                </div>
            </div>
        )
    }
}