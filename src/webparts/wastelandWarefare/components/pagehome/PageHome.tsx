import { CompoundButton, Stack } from "@fluentui/react";
import * as React from "react";
import { IPageHomeProps } from "./IPageHomeProps";
import { IPageHomeState } from "./IPageHomeState";
import WWList from "../Lists/WWList";



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
                    <CompoundButton text="UnitCard" onClick={()=>{window.location.hash="#/UnitCard"}} />

                </Stack.Item>
                <Stack.Item>
                    <WWList webpartcontext={this.props.webpartcontext} listGUID="dca4c4cc-1913-4ef0-8baf-05461357eaea"/>
                </Stack.Item>
            </Stack>
            
            );
    }
}