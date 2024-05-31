import { IIconProps, Icon } from "@fluentui/react/lib/Icon";
import * as React from "react";


interface ISearchIconProps extends IIconProps{
    SearchColor?:string;
}
interface ISearchIconState{
}

export default class SearchIcon extends React.Component<ISearchIconProps, ISearchIconState>{


    constructor(props:ISearchIconProps){
        super(props);
        this.state = {
        }   

        this._method = this._method.bind(this)
    }



    private _method():void{

    }



    public render(): React.ReactElement<ISearchIconProps> {

        return(
        <>
            <Icon iconName="Zoom" styles={{root:{background:this.props.SearchColor}}}/>
        </>
        );
    }
}