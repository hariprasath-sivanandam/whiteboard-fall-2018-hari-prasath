import React from 'react'

const ModuleListItem = ({module, deleteModule, selectModuleToEdit, selected,updateModule, selectModule, selectedModule}) =>
    <li className={(!!selectedModule && selectedModule.id==module.id) ? 'list-group-item active': 'list-group-item'}
        onClick={() => selectModule(module)}
    >
        {module.title}
        <button
            onClick={() => updateModule(module)}>
            Edit
        </button>
        <button
            onClick={() => deleteModule(module.id)}>
            Delete
        </button>
    </li>

export default ModuleListItem