import { CompoundButton, Stack } from "@fluentui/react";
import * as React from "react";
import { IPageHomeProps } from "./IPageHomeProps";
import { IPageHomeState } from "./IPageHomeState";



export default class PageHome extends React.Component<IPageHomeProps, IPageHomeState>{
    constructor(props:IPageHomeProps){
        super(props);
        this.state = {
        
        }   
    }
    

    public render(): React.ReactElement<IPageHomeProps> {
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