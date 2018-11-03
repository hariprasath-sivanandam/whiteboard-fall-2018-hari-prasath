import React, {Component} from 'react';
import CourseTable from "./CourseTable";
import CourseGrid from "./CourseGrid";
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import CourseService from "../services/CourseService";
import CourseEditor from "./CourseEditor";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/WhiteBoard.css'
import courseScreen from "../components/courseScreen";


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