import { DefaultPalette, IStackItemStyles, IStackStyles, IStackTokens, Stack } from "@fluentui/react";
import * as React from "react";
import ArmorSpinButton from "./ArmorSpinButton";

export interface IArmorStatsProps {

}
export interface IArmorStatsState {
    
}
//Stack Styles
const stackStyles: IStackStyles = {
    root: {
      background: DefaultPalette.themeTertiary,
    },
};
const stackItemStyles: IStackItemStyles = {
    root: {
      background: DefaultPalette.themePrimary,
      color: DefaultPalette.white,
      padding: 5,
      //minWidth:175
    },
};
// Tokens definition
const containerStackTokens: IStackTokens = { childrenGap: 5 };

export default class ArmorStats extends React.Component<IArmorStatsProps, IArmorStatsState>{ 

    constructor(props:IArmorStatsProps){
        super(props);      
    }

    public render(): React.ReactElement<IArmorStatsProps> {
        
        return(
            <>
                <Stack styles={stackStyles} tokens={containerStackTokens}>
                    <Stack.Item styles={stackItemStyles}><ArmorSpinButton armorType=""/></Stack.Item>
                    <Stack.Item styles={stackItemStyles}><ArmorSpinButton armorType=""/></Stack.Item>
                    <Stack.Item styles={stackItemStyles}><ArmorSpinButton armorType=""/></Stack.Item>
                </Stack>
            </>
        );
    }


}