import * as React from 'react';
import BlinkingCmd from './BlinkingCmd';


interface InputLineProps {
  moveDataUpward: (commmand:string) => void
}

interface InputLineState {
    width: number,
    isActive: boolean,
    content: string
}

export default class InputLine extends React.Component <InputLineProps, InputLineState> {

    constructor(props: InputLineProps) {
        super(props)
        this.state = {
            width: 0,
            isActive: true,
            content: ''
        }
    }

    componentDidMount() {
        let tmp = document.getElementById('inputLine');
        tmp ? tmp.focus() : null;
    }


    onKeyPressed(evt: React.KeyboardEvent<HTMLElement>) {
        if (evt.key === 'Enter') {
            this.setState({
                isActive: false
            });
            this.props.moveDataUpward(this.state.content.trim());
        }
    }

    onChange(evt: React.FormEvent<HTMLInputElement>){
        let newContent = evt.currentTarget.value;
        if(newContent[newContent.length -1] !== '\n') {
            this.setState({
                content: newContent,
                width: newContent.length
            })
        }
    }

    render() {

        let style = {
            width: this.state.width + 'ch'
        }

        return (
            <span><input id="inputLine"
                         type="text"
                         spellCheck={false}
                         style={style}
                         disabled={!this.state.isActive}
                         onKeyPress={this.onKeyPressed.bind(this)}
                         onChange={this.onChange.bind(this)}/>
                {this.state.isActive ? <BlinkingCmd/> : null}</span>
        )
    }
};