import React, { Component } from 'react';
import ListContainer from './ListContainer';
import ActionContainer from './ActionContainer';

class Box extends Component{
    
    state = {
        anytimer: this.props.isanytimer
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.anytimer > 0 ? (
                        <div>
                            <div className='list__con'>
                                <ListContainer />
                            </div>

                            <div className='action__con'>
                                <ActionContainer dis_list = {this.state.anytimer}/>
                            </div>
                        </div>
                    ) : (
                        <div>
                                <h4>Welcome in your time manager</h4>
                            <h6>No timer created</h6>
                            <ActionContainer dis_list = {this.state.anytimer} />
                        </div>
                    )}
                    
                </div>
            </div>
        )
    }
}

export default Box ;