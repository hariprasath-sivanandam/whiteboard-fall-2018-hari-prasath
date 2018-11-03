import React from 'react'
import CourseRow from "../components/courseRow";
import CourseAdd from "../components/courseAdd";
import CourseService from "../services/CourseService";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem,Button, Form, FormGroup, FormControl} from 'react-bootstrap';
//import {Button, Form, FormGroup} from 'reactstrap';
let self;

class CourseTable extends React.Component {
    constructor() {
        super();
        this.courseService = new CourseService();
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        self = this;
    }
    titleChanged(event) {
        this.setState({
            course: {title: event.target.value}
        });
    }
    createCourse() {
        let newCourse;
        if (this.state.course === undefined || this.state.course.title === '') {
            newCourse = {title: 'New Course'};
        } else {
            newCourse = this.state.course;
        }
        newCourse.modified = new Date();
        newCourse.created = new Date();
        this.courseService
            .createCourse(newCourse)
            .then(() => {this.findAllCourses();});
        document.getElementById('titleFld').value = '';
    }
    deleteCourse(event) {
        if(window.confirm('Are you sure you want to delete?')) {
            let id = event.target.closest('tr').getElementsByTagName('td')[0].getElementsByTagName('a')[0].id;
            this.courseService
                .deleteCourse(id)
                .then(() => {this.findAllCourses();});
        }
    }
    componentDidMount() { // this method is called after constructor gets executed
        this.findAllCourses();
    }
    renderCourseRows(deleteCourseFunction) {
        let courses = null;
        if(this.state) {
            courses = this.props.courses.map(function(course) {
                return <CourseRow key={course.id}
                                  course={course}
                                  deleteCourseHandler={self.deleteCourse}
                                  deleteCourse={deleteCourseFunction}
                />
            });
        }
        return (
            courses
        )
    }
    findAllCourses() {
        let courses = this.courseService.findAllCourses();
        this.setState({courses: courses})
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th><center><font color="black">Title</font></center></th>
                        <th><center><font color="black">Owned By</font></center></th>
                        <th><center><font color="black">Last modified by me</font></center></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderCourseRows(this.props.deleteCourse)}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default CourseTable;