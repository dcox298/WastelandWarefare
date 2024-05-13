import { BaseWebPartContext } from "@microsoft/sp-webpart-base";

export interface IPageHomeProps{
    webpartcontext:BaseWebPartContext;
    pageTitle?:string;
}