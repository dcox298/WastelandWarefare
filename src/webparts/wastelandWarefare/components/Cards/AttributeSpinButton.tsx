import { ISpinButtonProps, ISpinButtonStyles, SpinButton } from "@fluentui/react";
import * as React from "react";


interface IAttributeSpinButtonProps extends ISpinButtonProps{
    
}
interface IAttributeSpinButtonState{

}
const styles: Partial<ISpinButtonStyles> = { 
    spinButtonWrapper: { width: 50 }, 
    labelWrapper:{
        width:50
    }
};

export default class AttributeSpinButton extends React.Component<IAttributeSpinButtonProps, IAttributeSpinButtonState>{
    //private _sp: SPFI;

    constructor(props:IAttributeSpinButtonProps){
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



    public render(): React.ReactElement<IAttributeSpinButtonProps> {
        const props = this.props;
        return(
            <>
                <SpinButton styles={styles} label={props.label} min={0} max={12} disabled={true} defaultValue={this.props.defaultValue}/>
            </>
        );
    }
}