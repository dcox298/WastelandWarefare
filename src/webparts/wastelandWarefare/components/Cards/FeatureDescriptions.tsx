import { DefaultPalette, IStackItemStyles, IStackStyles, IStackTokens, Stack } from "@fluentui/react";
import * as React from "react";


export interface IFeatureDescriptionsProps {

}
export interface IFeatureDescriptionsState {
    
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

export default class FeatureDescriptions extends React.Component<IFeatureDescriptionsProps, IFeatureDescriptionsState>{ 

    constructor(props:IFeatureDescriptionsProps){
        super(props);      
    }

    public render(): React.ReactElement<IFeatureDescriptionsProps> {
        
        return(
            <>
                <Stack styles={stackStyles} tokens={containerStackTokens}>
                    <Stack.Item styles={stackItemStyles}><div style={{minWidth:400,minHeight:100,backgroundColor:'yellow'}}>dfgsdgf</div></Stack.Item>
                    <Stack.Item styles={stackItemStyles}><div style={{minWidth:400,minHeight:100,backgroundColor:'green'}}>dfgsdgf</div></Stack.Item>
                    <Stack.Item styles={stackItemStyles}><div style={{minWidth:400,minHeight:100,backgroundColor:'orange'}}>dfgsdgf</div></Stack.Item>
                </Stack>
            </>
        );
    }


}