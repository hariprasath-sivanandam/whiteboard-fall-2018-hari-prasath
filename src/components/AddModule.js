import React from "react";

export default  class AddModule extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            currentText : ""
        }

    }

    render(){
        return <div>
            <li  className= "list-group-item" >

                <input type="text" className="form-control" id="exampleInputEmail1"
                       placeholder="New Module name " onChange={console.log}></input>
                <button className="btn btn-sm btn-outline-primary" onClick={this.props.addModule} disabled={!this.state.currentText}></button>

            </li>


        </div>
    }
}
