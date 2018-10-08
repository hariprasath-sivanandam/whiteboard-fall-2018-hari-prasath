
import React from 'react'
import {Link} from "react-router-dom";



 const  CourseCard =(props)=>( <div className="card" styles={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h5 className="card-title">{props.course.title}</h5>
                    <p className="card-text">Modified by me at 8:30pm</p>
                    <div className="row justify-content-center">
                        <div className="">
                            <button
                                className="btn btn-sm btn-danger"
                                onClick={()=>props.deleteCourse(props.course)}>Delete</button>
                        </div>
                        <div className="">
                            <Link to= {"/course/" +props.course.id +"/edit"}
                                  className=" nav-link nav-item"
                                  style={{'color': 'black'}}>
                                < button className="btn btn-sm btn-outline-info" >
                                    Edit
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>)



export default CourseCard