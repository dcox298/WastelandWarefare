import { DefaultPalette, IStackItemStyles, IStackStyles, IStackTokens, Stack } from "@fluentui/react";
import * as React from "react";
import SkillIcon from "../Icons/SkillIcon";


interface IPassiveSkillsProps{
    
}
interface IPassiveSkillsState{

}

// Styles definition
const stackStyles: IStackStyles = {
    root: {
      background: DefaultPalette.themeTertiary,
    },
  };
  const stackItemStyles: IStackItemStyles = {
    root: {
      background: DefaultPalette.yellow,
      color: DefaultPalette.black,
      padding: 5,
      width:25
    },
  };

// Tokens definition
const containerStackTokens: IStackTokens = { childrenGap: 5 };

export default class PassiveSkills extends React.Component<IPassiveSkillsProps, IPassiveSkillsState>{
    //private _sp: SPFI;

    constructor(props:IPassiveSkillsProps){
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



    public render(): React.ReactElement<IPassiveSkillsProps> {

        return(
            <>
                <Stack horizontal styles={stackStyles} tokens={containerStackTokens}>
                    <Stack.Item styles={stackItemStyles}><SkillIcon skillName='BullseyeTarget' /></Stack.Item>
                    <Stack.Item styles={stackItemStyles}><SkillIcon skillName='Settings' /></Stack.Item>
                </Stack>
            </>
        );
    }
}