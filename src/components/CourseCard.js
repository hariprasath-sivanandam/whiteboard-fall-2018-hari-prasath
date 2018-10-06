
import React from 'react'

export default class CourseCard extends React.Component
{
    constructor(props) {
        super(props);
        console.log("card here")
        console.log(props)
    }

    render() {
        return(
            <div className="card" styles={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.course.title}</h5>
                    <p className="card-text">Modified by me at 8:30pm</p>
                    <a href="#" className="btn btn-primary">More...</a>
                </div>
            </div>
        )
    }
}