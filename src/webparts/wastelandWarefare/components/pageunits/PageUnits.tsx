import { CompoundButton, Stack } from "@fluentui/react";
import * as React from "react";
import { IPageUnitsProps } from "./IPageUnitsProps";
import { IPageUnitsState } from "./IPageUnitsState";



export default class PageUnits extends React.Component<IPageUnitsProps, IPageUnitsState>{
    constructor(props:IPageUnitsProps){
        super(props);
        this.state = {
        
        }   
    }
    

    public render(): React.ReactElement<IPageUnitsProps> {
        //const {pageTitle} = this.props;
        return(
            <Stack>
                <Stack.Item>
                    <CompoundButton text="Units" onClick={()=>{window.location.hash="#/Units"}} />
                </Stack.Item>
            </Stack>
            
            );
    }
}