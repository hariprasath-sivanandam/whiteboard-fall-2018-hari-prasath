import React, {Component} from 'react';
import CourseTable from "./CourseTable";
import CourseGrid from "./CourseGrid";
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import CourseService from "../services/CourseService";
import CourseEditor from "./CourseEditor";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/WhiteBoard.css'
import courseScreen from "../components/courseScreen";

// export default class WhiteBoard extends Component {
//
//     constructor(props) {
//         super(props);
//         this.courseService = new CourseService();
//         this.state = {
//             courses: this.courseService.findAllCourses(),
//             isTableView: true,
//             newCourse:""
//         }
//     }
//     toggleView = () =>{
//         this.setState({isTableView: !this.state.isTableView})
//     }
//     addCourse = newCourse => {
//         newCourse = {id:"XXX", title: newCourse, modules:[]}
//         this.courseService.createCourse(newCourse)
//         this.setState({
//             courses: this.courseService.findAllCourses()
//         })
//     }
//
//     deleteCourse = courseToDelete => {
//         this.courseService.deleteCourse(courseToDelete.id)
//         this.setState({
//             courses: this.courseService.findAllCourses()
//         })
//     }
//
//     deleteModule = module => {
//         this.courseService.deleteModule(module)
//         this.setState({
//             courses: this.courseService.findAllCourses()
//         })
//     }
//
//     addNewCourse =() => {
//         if (this.state.newCourse.length > 0)
//             this.addCourse(this.state.newCourse)
//         else{
//             alert("Please add new course title")
//         }
//     }
//
//
//     setNewCourse = event =>{
//         this.setState({newCourse: event.target.value})
//     }
//
//     render() {
//         return (
//
//             <Router>
//
//             <div>
//                 <nav className="navbar navbar-light bg-light justify-content-center">
//                     <div className="container row">
//                         <div className = "col-lg-4">
//                             <span>
//                             <i class="fa fa-bars fa-2x"></i>
//                             </span>&nbsp; &nbsp;
//                             Course Manager
//                         </div>
//                         <div className="col-lg-6">
//                             <input className="form-control mr-sm-2" onChange={this.setNewCourse} value={this.state.newCourse}
//                                    type="search" placeholder="New Course Title" aria-label="Search"/>
//                         </div>
//                         <div className="col-lg-2">
//                             <button className="btn  rounded-circle btn-outline-secondary" onClick={this.addNewCourse}>
//                                 <i className="fa fa-plus-circle"></i>
//                             </button>
//                         </div>
//
//                     </div>
//                 </nav>
//                 <div className="row flex-row-reverse pr-2 pb-3 align-items-center">
//                     <span style={{float: "left"}} className="px-2">
//                                 <h5>Grid</h5>
//
//                         </span>
//                     <div className="d-flex float-right my-auto">
//
//                         <label className="switch m-auto">
//
//                             <input type="checkbox" onClick={this.toggleView}/>
//                             <span className="slider round"></span>
//                         </label>
//                     </div>
//                     <span style={{float: "left"}} className="px-2">
//                                 <h5>Table</h5>
//
//                         </span>
//
//                 </div>
//                     <div>
//                     {
//                         !!this.state.isTableView?
//                             <div>
//                                 <CourseTable addCourse={this.addCourse} deleteCourse={this.deleteCourse} courses={this.state.courses}/>
//                             </div> :
//                             <div>
//                                 <CourseGrid/>
//                             </div>
//                     }
//                         <Route
//                             exact
//                             render={(props) =>
//                                 <CourseEditor
//                                     {...props}
//                                     deleteModule={this.deleteModule}
//                                     courses={this.state.courses}/>}
//                             path="/course/:courseId/edit"/>
//                     </div>
//             </div>
//             </Router>
//         );
//     }
// }

const Routes =()=>
    <Router>
        <div>
            <div className="container-fluid">
                {/*<Switch>*/}
                    <Route path="/" exact component={courseScreen}/>
                    <Route path="/course/:courseId/edit"  exact component={CourseEditor}/>
                {/*</Switch>*/}
            </div>
        </div>
    </Router>


export default Routes;