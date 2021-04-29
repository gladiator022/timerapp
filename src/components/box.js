import React, { Component } from 'react';
import ListContainer from './ListContainer';
import ActionContainer from './ActionContainer';

class Box extends Component{
    render() {
        return (
            <div>
                <div>
                    {this.props.isanytimer ? (
                        <div>
                            <div className='list__con'>
                                <ListContainer />
                            </div>

                            <div className='action__con'>
                                <ActionContainer isopen />
                            </div>
                        </div>
                    ) : (
                        <ActionContainer isopen />
                    )}
                    
                </div>
            </div>
        )
    }
}

export default Box ;