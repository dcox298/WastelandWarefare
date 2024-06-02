import { IFaction } from "../ContentTypes/IFaction";

export interface IUnitCard {
    Title:string;
    Faction?:IFaction;
    FactionId:number;
    STR:number;
    PER:number;
    END:number;
    CHA:number;
    INT:number;
    AGI:number;
    LUC:number;
    MoveDistance:string;
    ChargeDistance:string;
    ArmorPhysical:number;
    ArmorEnergy:number;
    ArmorRadiation:number;
}