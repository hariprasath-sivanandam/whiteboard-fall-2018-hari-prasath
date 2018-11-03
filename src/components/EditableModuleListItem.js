import React from "react";
import ModuleListItem from "./ModuleListItem";
import EditableModule from "./EditableModule";

class EditableModuleListItem extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            inEditMode: true
        }
    }

    render(){
        return <div>
            {
                !!this.props.selected ?
                    <EditableModule module={this.props.module} updateModuleTitle={ this.props.updateModuleTitle}/>:
                    <ModuleListItem
                    module={this.props.module}
                    deleteModule={this.props.deleteModule}
                    selectModuleToEdit={this.props.selectModuleToEdit}
                    selectModule = {this.props.selectModule}
                    updateModule = {this.props.updateModule}
                    selected ={this.props.selected}
                    selectedModule = {this.props.selectedModule}
                    />
            }
        </div>
    }
}

export default   EditableModuleListItem
