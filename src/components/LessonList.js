import React from 'react';
import LessonService from "../../services/LessonService";
import LessonListItem from "./LessonItem/LessonListItem";


export default class LessonList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

            lesson: { title: '' },
            lessons : []

        }

        this.titleChanged = this.titleChanged.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.lessonServiceInstance = LessonService.instance;


    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({lesson: {title: event.target.value}});

    }


    selectLesson=(lessonId)=>{
        this.props.selectLesson(lessonId)
    }
    createLesson(){
        console.log(" Current Module : " + this.props.moduleId);
        this.lessonServiceInstance.createLesson(this.props.courseId,this.props.moduleId, this.state.lesson).then(
            (createdLesson)=>{

                let  newLessonList = this.state.lessons
                newLessonList.push(createdLesson)

                this.setState(
                    { lessons : newLessonList});
                this.setState({lesson: {title: ""}});}
        );
    }

    deleteLesson=(index)=>{
        index = index -1 ; // index starts from 1 in output
        // this.lessonServiceInstance
        this.lessonServiceInstance.deleteLesson(this.state.lessons[index].id).then(
            (response) =>{
                if (response.status == 200)
                {
                    let listAfterRemoval = this.state.lessons;
                    listAfterRemoval.splice(index,1);
                    this.setState({lessons:  listAfterRemoval })
                }
                else{
                    alert("cannot delete ! Server issue");
                }
            })

    }

    editLesson=(index,title,  updated)=>{
        index --; //compensation for index start base from 1
        if (index > -1 && index  <  this.state.lessons.length) {
            let newLessons = this.state.lessons;
            newLessons[index].title = title;
            let lesson = {
                title : title
            }
            newLessons= this.state.lessons
            newLessons[index].title = title
            this.lessonServiceInstance.updateLesson(newLessons[index].id,newLessons[index]).then((response)=>{
                this.setState((state)=>{
                    return {lessons:  newLessons }
                });
            } )
        }
    }


    componentDidMount(){
        this.setLessonList(this.props.lessons);
    }

    componentWillReceiveProps(nextProps)
    {
        if (nextProps.lessons!= null){

            this.setLessonList(nextProps.lessons);
            this.setState({
                moduleId : nextProps.moduleId,
                courseId : nextProps.courseId,
                lessons : nextProps.lessons
            })
        }
    }
    setLessonList=(lessonList)=> {
        this.setState(()=> {return {lessons: lessonList}}
        )
    }



    returnListOfLessons =() => {
        let index =0;

        return  this.state.lessons.map((lesson) => {
            index++;
            return  <li  key ={index} >

                <LessonListItem
                    key={lesson.id}
                    id={lesson.id}
                    index={index}
                    title={lesson.title}
                    inEditMode={false}
                    deleteLesson={this.deleteLesson}
                    editLesson = {this.editLesson}
                    selectLesson = {this.selectLesson}
                    selectedLessonId = {this.props.selectedLessonId}
                />

            </li>
        });
    }



    render=()=>{
        let lessons = this.returnListOfLessons()
        return  <ul className="nav nav-tabs px-2">
            <li className="nav-item nav-link">

                <input className="form-control"
                       onChange={this.titleChanged}
                       placeholder="title"
                       value={this.state.lesson.title}/>
                <span className="float-right">
                                 <a href={"#"} style={{'color': 'inherit'}} >

                                    <i className="px-2 fa fa-plus-circle "  onClick={this.createLesson}></i>
                                </a>

                            </span>

            </li>
            {lessons}
        </ul>
    }


}