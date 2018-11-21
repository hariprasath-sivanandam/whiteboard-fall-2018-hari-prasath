import React from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions"
import '../styles/WidgetList.css'
import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import {Provider} from 'react-redux'
import {widgetReducer} from "../reducers/WidgetReducer"
import WidgetList from "../components/WidgetList";

let store = createStore(widgetReducer,applyMiddleware(logger));

var  WidgetListContainer =(props)=> {
    console.log(props.findAllWidgetsForTopic(props.topicId))
        return (
            <div>
                <div className="container pt-5">
                    <div className="container row  col justify-content-center align-items-center">
                        <h2>Widgets container</h2>
                    </div>
                    { (props.topicId!= "" && props.topicId!= -1) &&
                    <div>
                        <div className="row flex-row-reverse pr-2 pb-3 align-items-center">
                            <span style={{float: "left"}} className="px-2">
                                    <h5>Preview</h5>
                            </span>
                            <div className="d-flex float-right my-auto">

                                <label className="switch m-auto">

                                    <input type="checkbox" onClick={props.preview}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div className="d-flex pr-2">
                                <button className="btn btn-success m-auto" hidden={props.previewMode}
                                        onClick={()=>{props.save(props.topicId)}}>
                                    Save
                                </button>
                            </div>
                            <div className="d-flex pr-2">
                                <button className="btn  rounded-circle btn-outline-secondary" onClick={()=>props.createWidget(props.topicId)}><i
                                    className="fa fa-plus-circle"></i>
                                </button>
                            </div>
                        </div>
                        <div >
                            {

                                 props.widgets.map(widget => (
                                     <WidgetList widget={widget}
                                                preview={props.previewMode}
                                                key={widget.id}
                                                widgetLength={props.widgets.length}
                                                 topicId={props.topicId}
                                     />
                                     )
                                 )}
                        </div>
                    </div>
                    }
                </div>
            </div>
        )
    }

const stateToPropertiesMapper = (state) => ({
        widgets: state.widgets,
        previewMode: state.preview,
    })

const
    dispatcherToPropsMapper
        = dispatch => ({
        findAllWidgetsForTopic: (topicId) => actions.findAllWidgetsForTopic(dispatch, topicId),
        createWidget: (topicId) => actions.createWidget(dispatch,topicId),
        save: (topicId) => actions.save(dispatch, topicId),
        preview: () => actions.preview(dispatch)
    })

WidgetListContainer = connect(stateToPropertiesMapper, dispatcherToPropsMapper)(WidgetListContainer)

const WidgetListContainerStateless =(props)=>{
    return <Provider store={store}>
        <WidgetListContainer topicId = {props.topic.id}/>
    </Provider> }
export default WidgetListContainerStateless