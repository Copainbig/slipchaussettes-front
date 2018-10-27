import * as React from 'react';
import {setInterval} from "timers";
import Timeout = NodeJS.Timeout;

interface BlinkingCmdState {
    content : string
    interval : Timeout
}

export default class BlinkingCmd extends React.Component <any, BlinkingCmdState> {

    constructor(props: any){
        super(props);
        this.state = {
            content: '_',
            interval : this.letItBlink()
        };
    }

    letItBlink(){
        let interval = setInterval(() => {
            let nextState = (this.state.content==='_'?'':'_');
            this.setState({content : nextState});
        }, 500);
        return interval
    }

    componentWillUnmount(){
        clearInterval(this.state.interval)
    }

    render(){
        return(<span id="cmd">{this.state.content}</span>)
    }
}