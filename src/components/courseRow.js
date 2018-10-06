import React from 'react'
import {Link} from 'react-router-dom'


const CourseRow = ({course, deleteCourse}) =>
    <tr>
        <td><center>{course.title} {course.id}</center></td>
        <td><center>me</center></td>
        <td><center>6:45</center></td>
        <td><center>
            <Link
                className="btn btn-primary" to={`/course/${course.id}/edit`}>Edit</Link>
            <button onClick={() => deleteCourse(course)} className="btn btn-danger">Delete</button>
        </center></td>
    </tr>

export default CourseRow