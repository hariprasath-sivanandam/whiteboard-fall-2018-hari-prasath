import React from 'react'

const ModuleListItem = ({module, deleteModule, selectModule, selected,temp}) =>
    <li className={selected ? 'list-group-item active': 'list-group-item'}>
        {module.title}
        <button
            onClick={() => selectModule(module)}>
            Edit
        </button>
        <button
            onClick={() => deleteModule(module.id)}>
            Delete
        </button>
    </li>

export default ModuleListItem