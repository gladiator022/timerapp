import React, { Component } from 'react';

var list = [];

class Timer extends Component{
    state = {
        title: this.props.title,
        project: this.props.project
    }
    render() {
        return (
            <div className='timer'>
                <div className='tdisplay'>
                    <p><b>Learn {this.state.title} </b></p>
                    <p><b> {this.state.project} </b></p>
                    <p><b>Edit Trash</b></p>
                </div>
                <div className='row Modify'>
                    <div className='col 1'><b>Play</b></div>
                </div>
            </div>
        )
    }
}

class TimerForm extends Component{

    state = {
        nbtimer : this.props.modify,
        title : 'react',
        project: 'web'
    }

    update = () => {
        this.setState({nbtimer:1})
    }

    cancel = () => {
        
    }

    handleInput = (e) => {
        this.setState({ title: e.target.val, project: e.target.valu })
        console.log(this.state.title, e.target.valu)
    }

    render() {
        return (
            <div>
                {this.state.nbtimer>0 ? (
                <Timer project={this.state.project} title={this.state.title} />
                ) : (
                    <div className='Form'>
                <div className='tform'>
                    <label ><b>Title</b></label>
                    <input  onChange = {this.handleInput} val = {this.state.title} type='text' className='form-control' ></input> 
                    <label ><b>Project</b></label>
                    <input onChange = {this.handleInput} valu= {this.state.project} type='text'className='form-control' ></input>
                </div>
                <div className='row Modify'>
                    <div onClick = {this.update} className='col a'><b>Modify</b></div>
                    <div onClick = {this.cancel} className='col b'><b>Cancel</b></div>
                </div>
            </div>    
            )}
            </div>
            
        )
    }
}


class Container extends Component{
    state = {
        works: this.props.isworking
    }
    render() {
        return (
            <div className='contain'>
                    {this.state.isworking ? (
                        <Timer/>
                    ) : (
                        <TimerForm />
                    )}
                    
                </div>
        );
    }
}

export default Container ;