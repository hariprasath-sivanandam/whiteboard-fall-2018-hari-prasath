import React from 'react'
import ModuleListItem from "./ModuleListItem";
import AddModuleText from "./AddModuleText";
import EditableModuleListItem from "./EditableModuleListItem";
class ModuleList extends React.Component{
    constructor(props){
        super(props)
    }



    render = () =>{

        return  <ul className="list-group">

                <AddModuleText courseId={this.props.courseId}
                               addNewModule = {this.props.addNewModule}
                />
            {
                this.props.modules.map((module, index) =>
                    <div>
                        <EditableModuleListItem
                            selected={this.props.selectedModule === module}
                            selectModule={this.props.selectModule}
                            deleteModule={this.props.deleteModule}
                            updateModule={this.props.updateModule}
                            courseId={1234}
                            updateModuleTitle ={this.props.updateModuleTitle}

                            key={index}
                            module={module}/>
                    </div>

                )
            }
        </ul>
    }




}




export default ModuleList