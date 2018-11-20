import React from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions"
import '../styles/WidgetList.css'
import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import widgetList from "../components/WidgetList"
import {Provider} from 'react-redux'
import {widgetReducer} from "../reducers/WidgetReducer"

let store = createStore(widgetReducer,applyMiddleware(logger));

class WidgetList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            courseId: '',
            moduleId: '',
            lessonId: '',
            topicId: '',
            topic: {}
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.setTopicId = this.setTopicId.bind(this);
        this.selectTopic = this.selectTopic.bind(this);
        this.saveToServer = this.saveToServer.bind(this);
        this.addWidgetToServer = this.addWidgetToServer.bind(this)
    }

    addWidgetToServer(){
        this.props.addWidget(this.props.topicId)
    }

    componentDidMount() {
        this.setCourseId(this.props.course);
        this.setModuleId(this.props.module);
        this.setLessonId(this.props.lesson);
        this.setTopicId(this.props.topic);
        console.log("componentDidMount")
        console.log(this.props)
        this.setState({courseId : this.props.course.id})
        console.log(this.state)
        this.selectTopic(this.props.topic);
        window.addEventListener('onbeforeunload', this.handleWindowClose);
    }

     componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.course);
        this.setModuleId(newProps.module);
        this.setLessonId(newProps.lesson);
        this.setTopicId(newProps.topic);
        console.log("componentWillReceiveProps");
        // console.log(this.props)
        //  console.log(this.props.topicId);
        // console.log(newProps)
        //  console.log(newProps.topicId);
        this.selectTopic(newProps.topic);
        if (this.props.topicId != newProps.topicId) {
            console.log("ASDasdasd")
            this.props.findAllWidgetsForTopic(newProps.topicId);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('onbeforeunload', this.handleWindowClose);
    }

    setTopicId(topic) {
        alert("setting topic")
        if(!!topic){
            this.setState({topicId: topic.id});
        }
    }

    setLessonId(lesson) {
        if(!!lesson){
            this.setState({lessonId: lesson.id});
        }
    }

    setModuleId(module) {
        if(!!module){
            this.setState({moduleId: module.id});
        }
    }

    setCourseId(course) {
        if(!!course){
            this.setState({courseId: course.id});
        }
    }

    selectTopic(topic) {
        if(!!topic){
            this.setState({topicId: topic.id});
        }
    }

    saveToServer() {
        this.props.save(this.state.topicId);
    }

    render() {
        return (
            <div>
                <div className="container pt-5">
                    <div className="container row  col justify-content-center align-items-center">
                        <h2>Widgets container</h2>
                    </div>
                    { (this.state.topicId != "" && this.state.topicId != -1) &&
                    <div>
                        <div className="row flex-row-reverse pr-2 pb-3 align-items-center">
                            <span style={{float: "left"}} className="px-2">
                                    <h5>Preview</h5>
                            </span>
                            <div className="d-flex float-right my-auto">

                                <label className="switch m-auto">

                                    <input type="checkbox" onClick={this.props.preview}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div className="d-flex pr-2">
                                <button className="btn btn-success m-auto" hidden={this.props.previewMode}
                                        onClick={this.saveToServer}>
                                    Save
                                </button>
                            </div>
                            <div className="d-flex pr-2">
                                <button className="btn  rounded-circle btn-outline-secondary" onClick={this.addWidgetToServer}><i
                                    className="fa fa-plus-circle"></i>
                                </button>
                            </div>
                        </div>
                        <div >
                            {
                                this.props.widgets.map(widget => (
                                    <widgetList widget={widget}
                                                preview={this.props.previewMode}
                                                key={widget.id}
                                                widgetLength={this.props.widgets.length}/>
                                ))}
                        </div>
                    </div>
                    }
                </div>
            </div>
        )
    }

}


const
    stateToPropertiesMapper = (state) => ({
        widgets: state.widgets,
        previewMode: state.preview
    })

const
    dispatcherToPropsMapper
        = dispatch => ({
        findAllWidgetsForTopic: (topicId) => actions.findAllWidgetsForTopic(dispatch, topicId),
        addWidget: (topicId) => actions.addWidget(dispatch,topicId),
        save: (topicId) => actions.save(dispatch, topicId),
        preview: () => actions.preview(dispatch)
    })

WidgetList = connect(
        stateToPropertiesMapper,
        dispatcherToPropsMapper)(WidgetList)

const WidgetListContainer =(props)=>{
    console.log(props)
    return <Provider store={store}>
                        <WidgetList course={props.course} module={props.module} lesson={props.lesson} topic={props.topic}/>
                    </Provider> }
export default WidgetListContainer