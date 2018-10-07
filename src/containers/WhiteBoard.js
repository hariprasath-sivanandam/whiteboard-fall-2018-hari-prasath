import React, {Component} from 'react';
import CourseTable from "./CourseTable";
import CourseGrid from "./CourseGrid";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseService from "../services/CourseService";
import CourseEditor from "./CourseEditor";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/WhiteBoard.css'

export default class WhiteBoard extends Component {

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.state = {
            courses: this.courseService.findAllCourses(),
            isTableView: true
        }
    }
    toggleView = () =>{
        this.setState({isTableView: !this.state.isTableView})
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

    deleteModule = module => {
        this.courseService.deleteModule(module)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light justify-content-center">
                    <div className="container row">
                        <div className = "col-lg-4">
                            <span>
                            <i class="fa fa-bars fa-2x"></i>
                            </span>&nbsp; &nbsp;
                            Course Manager
                        </div>
                        <div className="col-lg-6">
                            <input className="form-control mr-sm-2" type="search" placeholder="New Course Title" aria-label="Search"/>
                        </div>
                        <div className="col-lg-2">
                            <button className="btn  rounded-circle btn-outline-secondary" onClick={this.addWidgetToServer}>
                                <i className="fa fa-plus-circle"></i>
                            </button>
                        </div>

                    </div>
                    {/*<a className="navbar-brand">Navbar</a>*/}

                </nav>
                <div className="row flex-row-reverse pr-2 pb-3 align-items-center">
                    <span style={{float: "left"}} className="px-2">
                                <h5>Grid</h5>

                        </span>
                    <div className="d-flex float-right my-auto">

                        <label className="switch m-auto">

                            <input type="checkbox" onClick={this.toggleView}/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <span style={{float: "left"}} className="px-2">
                                <h5>Table</h5>

                        </span>

                </div>
                <Router>
                {
                    !!this.state.isTableView?
                        <div>
                            <CourseTable addCourse={this.addCourse} deleteCourse={this.deleteCourse} courses={this.state.courses}/>
                        </div> :
                        <div>
                            <CourseGrid/>
                        </div>
                }
                </Router>
                {/*<Router>*/}
                    <div>

                        {this.state.isTableView && <div>

                            {/*<Link to="/course/table">Table</Link>*/}
                            {/*<Route path="/course/table"*/}
                                   {/*render={() =>*/}
                                       {/*<CourseTable*/}
                                           {/*addCourse={this.addCourse}*/}
                                           {/*deleteCourse={this.deleteCourse}*/}
                                           {/*courses={this.state.courses}/>}/>*/}
                        </div>
                        }
                        {!this.state.isTableView && <div>
                            {/*<Link to="/course/grid">Grid</Link>*/}
                            {/*< Route path="/course/grid"*/}
                                    {/*component={CourseGrid}/>*/}
                            {/*<Route*/}
                                {/*exact*/}
                                {/*render={(props) =>*/}
                                    {/*<CourseEditor*/}
                                        {/*{...props}*/}
                                        {/*deleteModule={this.deleteModule}*/}
                                        {/*courses={this.state.courses}/>}*/}
                                {/*path="/course/:courseId/edit"/>*/}
                        </div>
                        }

                    </div>
                 {/*</Router>*/}
            </div>
        );
    }
}