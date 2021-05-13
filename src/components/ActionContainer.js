import React, { Component } from 'react';
import TimerForm from './container';
//import Timer from 'container'




class ButtonC extends Component{


    state = {
        create: true
    }

    add = () => {
        console.log('you clicked.........')
        this.setState({create:false})
}

    render() {
        return (
            <div>
                {this.state.create ? (
                    <div onClick= {this.add} className="butt">
                        <p>New Timer</p>
                    </div>
                ) : (
                    <TimerForm modify = {this.props.nb_null} />
            )}
            </div>
        )
    }
}


class ActionContainer extends Component{

   
    render() {
        return (
            <div className='action'>
                    <ButtonC nb_null = {this.props.dist_list} />
            </div>
        )
    }
}

export default ActionContainer ;