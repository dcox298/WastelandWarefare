import {  Panel, PanelType, SelectionMode, Stack } from "@fluentui/react";
import * as React from "react";
import { SPFI } from "@pnp/sp";
import { getSP } from "../../pnpjsConfig";
import { DynamicForm, IViewField, ListView } from "@pnp/spfx-controls-react";
import { ViewPicker } from "@pnp/spfx-controls-react/lib/ViewPicker";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/views";
import "@pnp/sp/fields";
import { BaseWebPartContext } from "@microsoft/sp-webpart-base";

interface IdefaultViewFields{
    Items:string[],
    SchemaXml:string
}

interface IWWListProps {
    webpartcontext:BaseWebPartContext;
    pageTitle?:string;
    listGUID:string;

}
interface IWWListState {
    isPanelOpen:boolean;
    items:any[];
    selectedItemId?:number;
    selectedViewGuid?:string;
    viewFields?:IViewField[];
    defaultView?:any;
    defaultViewFields?:IViewField[]
}
const customRender = (item:any):string=>{
    return item.Title
}
export default class WWList extends React.Component<IWWListProps, IWWListState>{
    private _sp: SPFI;
    
    constructor(props:IWWListProps){
        super(props);
        this.state = {
            items:[],
            selectedViewGuid:'',
            isPanelOpen:false,
        }   
        this._sp = getSP();
        this._getSelection = this._getSelection.bind(this)
        this.openPanel = this.openPanel.bind(this);
        this.dismissPanel = this.dismissPanel.bind(this);
        this._refreshItems = this._refreshItems.bind(this);
    }
    public openPanel(itemId:number){
        this.setState({
            selectedItemId:itemId,
            isPanelOpen:true
        });
    }
    public dismissPanel(){
        this.setState({
            isPanelOpen:false,
            selectedItemId:0
        })
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
    private _getSelection(items: any[]) {
        console.log('Selected items:', items);
        this.openPanel(items[0].Id);       
    }
    private async _refreshItems():Promise<void>{
        const list = this._sp.web.lists.getById(this.props.listGUID);
        const viewDetails = await list.views.getById(this.state.selectedViewGuid||'')();
        const items = await this._sp.web.lists.getById(this.props.listGUID).getItemsByCAMLQuery({ViewXml:viewDetails.ListViewXml});
        this.setState({
            items
        });
    }
    public render(): React.ReactElement<IWWListProps> {

        return(
            <>
                <Panel 
                    headerText="Sample panel"
                    isLightDismiss
                    type={PanelType.medium}
                    isOpen={this.state.isPanelOpen}
                    onDismiss={this.dismissPanel}
                    closeButtonAriaLabel="Close"
                >
                    <DynamicForm 
                            context={this.props.webpartcontext} 
                            listId={this.props.listGUID}  
                            listItemId={this.state.selectedItemId}
                            onCancelled={() => { console.log('Cancelled');this.dismissPanel() }}
                            onBeforeSubmit={async (listItem) => { return false; }}
                            onSubmitError={(listItem, error) => { alert(error.message); }}
                            onSubmitted={async (listItemData) => { console.log(listItemData);this._refreshItems();this.dismissPanel() }}>
                    </DynamicForm>
                </Panel>
                <Stack>
                    <Stack.Item>
                        <ViewPicker 
                            label="View Selector"
                            context={this.props.webpartcontext}
                            listId={this.props.listGUID}
                            placeholder={'Select list view(s)'}
                            multiSelect={false}
                            selectedView={this.state.selectedViewGuid}
                            onSelectionChanged={this.onViewPickerChange}
                            showBlankOption={true}
                        />
                    </Stack.Item>
                    <Stack.Item>
                        <ListView 
                            items={this.state.items}
                            viewFields={this.state.viewFields}
                            selectionMode={SelectionMode.single}
                            selection={this._getSelection}
                            showFilter={true}
                            filterPlaceHolder="Full Text Search..."
                        />
                    </Stack.Item>
                </Stack>
            </>
            
            );
    }
}