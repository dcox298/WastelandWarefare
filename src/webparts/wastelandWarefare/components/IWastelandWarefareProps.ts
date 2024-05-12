import { BaseWebPartContext } from "@microsoft/sp-webpart-base";

export interface IWastelandWarefareProps {
  webpartcontext:BaseWebPartContext;
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
}
