import { IIconProps, Icon } from "@fluentui/react/lib/Icon";
import * as React from "react";


interface IChargeIconProps extends IIconProps{
    ChargeColor?:string;
}
interface IChargeIconState{
}

export default class ChargeIcon extends React.Component<IChargeIconProps, IChargeIconState>{


    constructor(props:IChargeIconProps){
        super(props);
        this.state = {
        }   

        this._method = this._method.bind(this)
    }



    private _method():void{

    }



    public render(): React.ReactElement<IChargeIconProps> {

        return(
        <>
            <Icon iconName="FastForward" styles={{root:{background:this.props.ChargeColor,width:30,height:30,fontSize:32,borderColor:'black',borderWidth:3,borderStyle:'groove',padding:3}}}/>
        </>
        );
    }
}