import { IIconProps, Icon } from "@fluentui/react/lib/Icon";
import * as React from "react";


interface IAwarenessIconProps extends IIconProps{
    AwarenessColor?:string;
}
interface IAwarenessIconState{
}

export default class AwarenessIcon extends React.Component<IAwarenessIconProps, IAwarenessIconState>{


    constructor(props:IAwarenessIconProps){
        super(props);
        this.state = {
        }   

        this._method = this._method.bind(this)
    }



    private _method():void{

    }



    public render(): React.ReactElement<IAwarenessIconProps> {

        return(
        <>
            <Icon iconName="RedEye" styles={{root:{background:this.props.AwarenessColor}}}/>
        </>
        );
    }
}