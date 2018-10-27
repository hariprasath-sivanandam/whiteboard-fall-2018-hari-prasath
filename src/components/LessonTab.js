import React from 'react'

const LessonTab = ({lesson, selectLesson, selected, deleteLesson}) =>
    <li className="nav-item">
        <a onClick={() => selectLesson(lesson)}
           className={selected ? "nav-link active" : "nav-link"}>
            {lesson.title}
        </a>

        <button onClick={() => deleteLesson(lesson.id)}>
            <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
    </li>

export default LessonTab