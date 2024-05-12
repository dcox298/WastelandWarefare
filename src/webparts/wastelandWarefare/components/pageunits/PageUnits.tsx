import {  Stack } from "@fluentui/react";
import * as React from "react";
import { IPageUnitsProps } from "./IPageUnitsProps";
import { IPageUnitsState } from "./IPageUnitsState";
import { SPFI } from "@pnp/sp";
import { getSP } from "../../pnpjsConfig";
import { ListView } from "@pnp/spfx-controls-react";
import { ViewPicker } from "@pnp/spfx-controls-react/lib/ViewPicker";


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

        const view: any = await this._sp.web.lists.getByTitle('Units')(); 
        console.log(view);
        this.setState({items:results})
      }
      private onViewPickerChange = (views: string | string[]) => {
        console.log("Views:", views);
      }
    public render(): React.ReactElement<IPageUnitsProps> {
        //const {pageTitle} = this.props;
        return(
            <Stack>
                <Stack.Item>
                    <ViewPicker 
                        context={this.props.webpartcontext}
                        listId={"b6983b29-b5ad-4cf9-aab2-9dc790fee386"}
                        placeholder={'Select list view(s)'}
                        //orderBy={orderBy.Title}
                        multiSelect={true}
                        onSelectionChanged={this.onViewPickerChange} 
                    />
                </Stack.Item>
                <Stack.Item>
                    <ListView 
                        items={this.state.items}
                        
                    />
                </Stack.Item>
            </Stack>
            
            );
    }
}