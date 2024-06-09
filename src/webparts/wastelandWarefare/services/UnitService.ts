import { IFaction } from "../ContentTypes/IFaction";
import { IUnit } from "../ContentTypes/IUnit";
import { IUnitCard } from "../viewmodels/IUnitCard";

export default class UnitService {
    

    public static getUnitCardViewModel(SPItem:IUnit):IUnitCard {
        const unitCard:IUnitCard = {
            Title: SPItem.Title,
            FactionId: SPItem.FactionId,
            Faction: SPItem.Faction ? SPItem.Faction : { Title: 'error' } as IFaction,
            STR: SPItem.STR,
            PER: SPItem.PER,
            END: SPItem.END,
            CHA: SPItem.CHA,
            INT: SPItem.INT,
            AGI: SPItem.AGI,
            LUC: SPItem.LUC,
            MoveDistance: SPItem.MoveDistance,
            ChargeDistance: SPItem.ChargeDistance,
            ArmorPhysical: SPItem.ArmorPhysical || 0,
            ArmorEnergy: SPItem.ArmorEnergy || 0,
            ArmorRadiation: SPItem.ArmorRadiation || 0,
            UnitFeaturesId:SPItem.UnitFeaturesId  
        }
        return unitCard
    }

}