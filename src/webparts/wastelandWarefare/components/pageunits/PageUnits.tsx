import {  Stack } from "@fluentui/react";
import * as React from "react";
import { IPageUnitsProps } from "./IPageUnitsProps";
import { IPageUnitsState } from "./IPageUnitsState";
import { SPFI } from "@pnp/sp";
import { getSP } from "../../pnpjsConfig";



export default class PageUnits extends React.Component<IPageUnitsProps, IPageUnitsState>{
    private _sp: SPFI;
    
    constructor(props:IPageUnitsProps){
        super(props);
        this.state = {
            items:[]
        }   
        this._sp = getSP();
    }
    
    public async componentDidMount(): Promise<void> {
       
        const results: any[] = await this._sp.web.lists.getByTitle('Units').items();
        
        this.setState({items:results})
      }

    public render(): React.ReactElement<IPageUnitsProps> {
        //const {pageTitle} = this.props;
        return(
            <Stack>
                <Stack.Item>
                    {JSON.stringify(this.state.items)}
                </Stack.Item>
            </Stack>
            
            );
    }
}