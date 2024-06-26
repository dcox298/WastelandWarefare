import {  ISpinButtonProps, ISpinButtonStyles, SpinButton } from "@fluentui/react";
import * as React from "react";


interface IArmorSpinButtonProps extends ISpinButtonProps{
    armorType:string;
    armorValue:string;
}
interface IArmorSpinButtonState{

}
const styles: Partial<ISpinButtonStyles> = { 
    spinButtonWrapper: { width: 50 }, 
    labelWrapper:{
        width:50
    }
};


export default class ArmorSpinButton extends React.Component<IArmorSpinButtonProps, IArmorSpinButtonState>{
    //private _sp: SPFI;
    private buttonIcon:string;
    constructor(props:IArmorSpinButtonProps){
        super(props);
        this.state = {

        }   
        this.buttonIcon ='';
        switch(props.armorType){
            case 'Physical':
                this.buttonIcon='Shield';
                break;
            case 'Energy':
                this.buttonIcon='LightningBolt';
                break;
            case 'Radiation':
                this.buttonIcon='Sunny';
                break;
            default:this.buttonIcon='';
        }
        //this._sp = getSP();
        this._method = this._method.bind(this)
    }

    public async componentDidMount(): Promise<void> {

    }

    private _method():void{

    }



    public render(): React.ReactElement<IArmorSpinButtonProps> {
        //const props = this.props;
        
        return(
            <>
                <SpinButton iconProps={{iconName:this.buttonIcon}} styles={styles} min={0} max={6} disabled={true} defaultValue={this.props.armorValue}/>
            </>
        );
    }
}