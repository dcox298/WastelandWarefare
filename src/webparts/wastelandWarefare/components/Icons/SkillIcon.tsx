import { IIconProps, IIconStyles, Icon } from "@fluentui/react";
import * as React from "react";


interface ISkillIconProps extends IIconProps{
    skillName:string;
}
interface ISkillIconState{

}

const styles:IIconStyles={
    root:{
        width:25
    }
}

export default class SkillIcon extends React.Component<ISkillIconProps, ISkillIconState>{
    //private _sp: SPFI;

    constructor(props:ISkillIconProps){
        super(props);
        this.state = {

        }   
        //this._sp = getSP();
        this._method = this._method.bind(this)
    }

    public async componentDidMount(): Promise<void> {

    }

    private _method():void{

    }



    public render(): React.ReactElement<ISkillIconProps> {
        return(
            <>
                <Icon iconName={this.props.skillName} styles={styles}/>
            </>
        );
    }
}
