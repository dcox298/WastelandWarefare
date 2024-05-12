import { IViewField } from "@pnp/spfx-controls-react/lib/controls/listView/IListView";

export interface IPageUnitsState{
    items:any[];
    selectedViewGuid?:string;
    viewFields?:IViewField[];
    defaultView?:any;
    defaultViewFields?:IViewField[]
}