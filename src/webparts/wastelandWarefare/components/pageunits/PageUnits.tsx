import {  Stack } from "@fluentui/react";
import * as React from "react";
import { IPageUnitsProps } from "./IPageUnitsProps";
import { IPageUnitsState } from "./IPageUnitsState";
import { SPFI } from "@pnp/sp";
import { getSP } from "../../pnpjsConfig";
import { IViewField, ListView } from "@pnp/spfx-controls-react";
import { ViewPicker } from "@pnp/spfx-controls-react/lib/ViewPicker";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/views";
import "@pnp/sp/fields";

interface IdefaultViewFields{
    Items:string[],
    SchemaXml:string

}
const customRender = (item:any):string=>{
    return item.Title
}


export default class PageUnits extends React.Component<IPageUnitsProps, IPageUnitsState>{
    private _sp: SPFI;
    
    constructor(props:IPageUnitsProps){
        super(props);
        this.state = {
            items:[]
        }   
        this._sp = getSP();
    }
    public async createViewFields(SPfields:IdefaultViewFields):Promise<IViewField[]>{
        let returnArray:IViewField[]=[];

        for(const field of SPfields.Items){
            const fieldDetails = await this._sp.web.lists.getById(this.props.listGUID).fields.getByInternalNameOrTitle(field)();
            console.log(fieldDetails);
            returnArray.push({
                name:fieldDetails.InternalName,
                displayName:fieldDetails.Title,
                sorting:false,
                minWidth:75,
                maxWidth:200,
                isResizable:true,
                render:fieldDetails.InternalName==='LinkTitle'?customRender:undefined,
            });
        }
       
        return returnArray
    }
    
    public async componentDidMount(): Promise<void> {
        const list = this._sp.web.lists.getById(this.props.listGUID);
        const defaultView = await list.defaultView();
        const SPfields = await list.views.getById(defaultView.Id).fields();
        const defaultViewFields = await this.createViewFields( SPfields );

        const results: any[] = await this._sp.web.lists.getById(this.props.listGUID).getItemsByCAMLQuery({ViewXml:defaultView.ListViewXml});

        this.setState({
            defaultView:defaultView,
            defaultViewFields:defaultViewFields,
            items:results,
            viewFields:defaultViewFields,
            selectedViewGuid:defaultView.Id
        });
        
      }
      private onViewPickerChange = async (view: string) => {
        if(view==='NO_VIEW_SELECTED'){
            const items: any[] = await this._sp.web.lists.getById(this.props.listGUID).getItemsByCAMLQuery({ViewXml:this.state.defaultView.ListViewXml});
            this.setState({
                items,
                viewFields:this.state.defaultViewFields,
                selectedViewGuid:this.state.defaultView.id
            });
        }else{
            const list = this._sp.web.lists.getById(this.props.listGUID);
            const viewDetails = await list.views.getById(view)();
            const selectedViewGuid = viewDetails.Id;
            const SPfields = await list.views.getById(view).fields();
            const viewFields = await this.createViewFields(SPfields);

            const items = await this._sp.web.lists.getById(this.props.listGUID).getItemsByCAMLQuery({ViewXml:viewDetails.ListViewXml})
            this.setState({
                items,
                viewFields,
                selectedViewGuid
            });
        }
        
      }
    public render(): React.ReactElement<IPageUnitsProps> {

        return(
            <Stack>
                <Stack.Item>
                    <ViewPicker 
                        label="View Selector"
                        context={this.props.webpartcontext}
                        listId={this.props.listGUID}
                        placeholder={'Select list view(s)'}
                        //orderBy={orderBy.Title}
                        multiSelect={false}
                        selectedView={this.state.selectedViewGuid}
                        onSelectionChanged={this.onViewPickerChange}
                        showBlankOption={true}
                        //viewsToExclude={['NO_VIEW_SELECTED']} 
                    />
                </Stack.Item>
                <Stack.Item>
                    <ListView 
                        items={this.state.items}
                        viewFields={this.state.viewFields}
                    />
                </Stack.Item>
                <Stack.Item>
                
                    
                </Stack.Item>
            </Stack>
            
            );
    }
}