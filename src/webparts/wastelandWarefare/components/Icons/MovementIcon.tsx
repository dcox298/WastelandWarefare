import { IIconProps, Icon } from "@fluentui/react/lib/Icon";
import * as React from "react";


interface IMovementIconProps extends IIconProps{
    movementColor?:string;
}
interface IMovementIconState{
}



export default class MovementIcon extends React.Component<IMovementIconProps, IMovementIconState>{


    constructor(props:IMovementIconProps){
        super(props);
        this.state = {
        }   

        this._method = this._method.bind(this)
    }



    private _method():void{

    }



    public render(): React.ReactElement<IMovementIconProps> {

        return(
        <>
            <Icon iconName="Play" styles={{root:{background:this.props.movementColor,width:30,height:30,fontSize:32,borderColor:'black',borderWidth:3,borderStyle:'groove',padding:3}}}/>
        </>
        );
    }
}