import React, { Component } from 'react';



class Timer extends Component{
    render() {
        return (
            <div className='timer'>
                <div>
                    <p>Timer</p>
                </div>
            </div>
        )
    }
}

class TimerForm extends Component{
    render() {
        return (
            <div>
                <div>
                    <p>TimerForm</p>
                </div>
            </div>
        )
    }
}


class Container extends Component{
    render() {
        return (
            <div>
                <div>
                    {this.props.isworking ? (
                        <Timer/>
                    ) : (
                        <TimerForm />
                    )}
                    
                </div>
            </div>
        );
    }
}

export default Container ;