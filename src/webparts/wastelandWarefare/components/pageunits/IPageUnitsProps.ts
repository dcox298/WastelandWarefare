import { BaseWebPartContext } from "@microsoft/sp-webpart-base";

export interface IPageUnitsProps{
    webpartcontext:BaseWebPartContext;
    pageTitle?:string;
    listGUID:string;
}