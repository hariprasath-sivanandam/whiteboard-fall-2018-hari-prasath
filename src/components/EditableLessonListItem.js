import React from 'react';


class  EditableLessonListItem extends React.Component{
    constructor(props)
    {
        super(props);
        this.state ={
            title : ""
        }
        this.titleChanged = this.titleChanged.bind(this);
    }

    titleChanged=(event)=>{
        console.log(event.target.value);
        this.setState(
            { title : event.target.value});


    }

    handleEdit=()=>
    {
        this.props.editLesson(this.props.index, this.state.title,"date");
        this.props.toggleEditMode();

    }
    componentDidMount(){
        this.setState({
            title : this.props.title
        })
    }

    render = (props)=>
        <div>
            <input type="text" placeholder="Lesson Name" value={this.state.title} onChange={this.titleChanged}/>
            <span className="float-right">
                <i className="px-2 fa fa-check-circle fa-2x"   style={{'color': 'inherit','cursor' : 'pointer'}}
                   onClick={this.handleEdit}>

                </i>

                    <i className="px-2 fa fa-ban fa-2x"
                       onClick={this.props.toggleEditMode}
                       style={{'color': 'inherit','cursor' : 'pointer'}}>

                    </i>
            </span>
        </div>
}





export default EditableLessonListItem;