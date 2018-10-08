import React from 'react'
import ModuleListItem from "./ModuleListItem";
import AddModuleText from "./AddModuleText";
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
                    <ModuleListItem
                        selected={this.props.selectedModule === module}
                        selectModule={this.props.selectModule}
                        deleteModule={this.props.deleteModule}

                        key={index}
                        module={module}/>
                )
            }
        </ul>
    }




}




export default ModuleList