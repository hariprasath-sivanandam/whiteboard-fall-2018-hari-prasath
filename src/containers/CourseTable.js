import React from 'react'
import CourseRow from "../components/courseRow";
import CourseAdd from "../components/courseAdd";

const CourseTable = ({courses, deleteCourse, addCourse}) =>
    <div>
        <CourseAdd
            addCourse={addCourse}/>
        <table className="table">
            <tbody>
            {
                courses.map((course, index) =>
                    (<CourseRow
                        deleteCourse={deleteCourse}
                        key={index}
                        course={course}/>)
                )
            }
            </tbody>
        </table>
    </div>

export default CourseTable