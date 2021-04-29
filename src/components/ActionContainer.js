import React, { Component } from 'react';
import TimerForm from './container';

class Button extends Component{
    render() {
        return (
            <div className="Butt">
                <div >
                    <p>+</p>
                </div>
            </div>
        )
    }
}


class ActionContainer extends Component{
    render() {
        return (
            <div className='action'>
                {this.props.isopen ? (
                    <Button/>
                ) : (
                      <TimerForm/>  
                )}
                
            </div>
        )
    }
}

export default ActionContainer ;