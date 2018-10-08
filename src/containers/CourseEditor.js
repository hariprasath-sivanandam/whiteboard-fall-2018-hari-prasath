import React, {Component} from 'react'
import ModuleList from '../components/ModuleList'
import CourseService from "../services/CourseService";
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
            selectedModule: null
        }

    }


    addNewModule=(courseId, newModule)=>{

        const  courseService = new CourseService();

        courseService.addModuleByCourseId(courseId, newModule)

        this.setState({
            // course : courseService.addModuleByCourseId(courseId, newModule)
            // course : courseService.addModuleByCourseId(courseId, newModule)

        })

        ;


    }


    handleDeleteModule=(moduleId)=>{

        const  courseService = new CourseService();
        const newCourseState = courseService.deleteModuleById(this.state.course.id, moduleId)


        console.log(newCourseState)

        if (!!newCourseState){
            this.setState({
                course : newCourseState
            })
        }


    }


    selectModule =(module)=>{

        this.setState({
            selectedModule : module
        })

    }

    editModule =(moduleId)=>{
        this.selectModule(module)






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
                            selectModule={this.selectModule}
                            selectedModule={this.state.selectedModule}
                            deleteModule={this.handleDeleteModule}
                            modules={this.state.course.modules}
                            addNewModule ={this.addNewModule}
                            courseId ={this.state.course.id}
                        />
                    </div>
                    {/*<div className="col-8">*/}
                        {/*<LessonTabs*/}
                            {/*selectLesson={this.selectLesson}*/}
                            {/*selectedLesson={this.state.selectedLesson}*/}
                            {/*lessons={this.state.selectedModule.lessons}/>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}