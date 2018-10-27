import * as React from "react";
import BlinkingCmd from "./BlinkingCmd";

export interface PromptProps {
    user: string
    currentPath: string;
}

export const Prompt = (props: PromptProps) => {
    return (
        <div>{props.user}@{props.currentPath}><BlinkingCmd/></div>
    )
}