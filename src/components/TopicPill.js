import React from 'react'

 const TopicPill = ({topic, selectTopic, selected, deleteTopic}) =>
    <li className="nav-item">
        <div className="col">
            <div className="pull-left">
                <a onClick={() => selectTopic(topic)}
                   className={selected ? "nav-link active" : "nav-link"}>
                    {topic.title}
                </a>
            </div>
            <div className="pull-right">
                <button onClick={() => deleteTopic(topic.id)}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    </li>
export default TopicPill