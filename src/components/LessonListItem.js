import React, {Component} from 'react';
import StaticLessonListItem from "./StaticLessonListItem";
import EditableLessonListItem from "./EditableLessonListItem";


export default class LessonListItem extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                inEditMode: this.props.inEditMode

            }
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }

    toggleEditMode() {
        console.log("Changing edit mode");
        this.setState(() => {
            inEditMode: !!!this.state.inEditMode;
        })

        this.setState(
            {inEditMode: !!!this.state.inEditMode});


    }


    render() {
        let className =  (this.props.selectedLessonId == this.props.id) ?
            "nav-item nav-link active bg-secondary" :"nav-item nav-link"


        return (
            <div className={className}>
                {!!this.state.inEditMode &&
                <EditableLessonListItem
                    id={this.props.id}
                    title={this.props.title}
                    index={this.props.index}
                    toggleEditMode={this.toggleEditMode}
                    editLesson={this.props.editLesson}
                />}

                {!!!this.state.inEditMode &&
                <StaticLessonListItem
                    id={this.props.id}
                    index={this.props.index}
                    title={this.props.title}
                    toggleEditMode={this.toggleEditMode}
                    deleteLesson={this.props.deleteLesson}
                    selectLesson={this.props.selectLesson}
                />}
            </div>
        );
    }

}


