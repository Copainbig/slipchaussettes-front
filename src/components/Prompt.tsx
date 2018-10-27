import * as React from "react";
import InputLine from "./InputLine";

export interface PromptProps {
    user: string,
    currentPath: string
}

interface PromptState{
    currentSelected: number
}

export default class Prompt extends React.Component<PromptProps, PromptState>{

    constructor(props: PromptProps){
        super(props);
        this.state= {
            currentSelected:0
        }
    }

    handleInputAction(value: string){
        console.log(value); //Execute the command and display its result
        //Mount a new InputLine and select it.
        //Focus on the new InputLine
    }

    render(){
        return (
            <div>{this.props.user}@{this.props.currentPath}><InputLine moveDataUpward={this.handleInputAction.bind(this)}/></div>
        )
    }
}