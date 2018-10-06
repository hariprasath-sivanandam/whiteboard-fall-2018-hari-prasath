import React, {Component} from 'react';
import CourseTable from "./CourseTable";
import CourseGrid from "./CourseGrid";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseService from "../services/CourseService";
import CourseEditor from "./CourseEditor";

export default class WhiteBoard extends Component {

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.state = {
            courses: this.courseService.findAllCourses()
        }
    }
    addCourse = newCourse => {
        this.courseService.createCourse(newCourse)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    deleteCourse = courseToDelete => {
        this.courseService.deleteCourse(courseToDelete.id)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    deleteModule = module =>{
        this.courseService.deleteModule(module)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    render() {
        return (
            <div>
                {/*<h1>WhiteBoard ({this.state.courses.length})</h1>*/}
                <Router>
                    <div>
                        <Link to="/course/table">Table</Link>
                        <Route path="/course/table"
                               render={() =>
                                   <CourseTable
                                       addCourse={this.addCourse}
                                       deleteCourse={this.deleteCourse}
                                       courses={this.state.courses}/>}/>
                        <Route
                            exact
                            render={(props) =>
                                <CourseEditor
                                    {...props}
                                    deleteModule={this.deleteModule}
                                    courses={this.state.courses}/>}
                            path="/course/:courseId/edit"/>
                        <Link to="/course/grid">Grid</Link>
                        <Route path="/course/grid"
                               component={CourseGrid}/>

                    </div>
                </Router>
            </div>
        );
    }
}