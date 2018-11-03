import React from 'react'

const LessonTab = ({lesson, selectLesson, selected, deleteLesson}) =>
    <li className="nav-item">
        <div className="col">
            <div className="pull-left">
                <a onClick={() => selectLesson(lesson)}
                   className={selected ? "nav-link active" : "nav-link"}>
                    {lesson.title}
                </a>
            </div>
            <div className="pull-right">
                <button onClick={() => deleteLesson(lesson.id)}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    </li>

export default LessonTab