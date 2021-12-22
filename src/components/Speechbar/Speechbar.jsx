import React from 'react'
import "./speechbar.scss"
import { MContext } from '../Provider/Provider';

import { RecordVoiceOver, Backspace, AddBox } from "@material-ui/icons";
import Example from './Speaker';

export default function Speechbar() {
    //const handleClick = false
    return (
        <div className="speechbar">
            <div className="container">
                <div className="speak" onClick={() => { }}>
                    <RecordVoiceOver className="icon" />
                    <span>speak</span>
                </div>
                <div className="textbox">
                    <MContext.Consumer>
                        {(context) => (<span>{context.state.message}</span>)}
                    </MContext.Consumer>
                </div>
                <MContext.Consumer>
                    {(context) => (
                        < div className="clear" onClick={() => {
                            const newText = "";
                            context.setMessage(newText)
                        }}><Backspace className="icon" />
                            <span>clear</span></div>
                    )}
                </MContext.Consumer>

                <div className="save">
                    <AddBox className="icon" />
                    <span>save phrase</span>
                </div>
                <div>
                    <MContext.Consumer>
                        {(context) => (<Example message={context.state.message} />)}
                    </MContext.Consumer>
                </div>
            </div>
        </div >
    )
}
