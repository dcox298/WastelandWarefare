import * as React from "react";
import { IUnitCard } from "../../viewmodels/IUnitCard";
import { DefaultPalette, IStackItemStyles, IStackStyles, Spinner, Stack,  } from "@fluentui/react";
import { getSP } from "../../pnpjsConfig";
import { SPFI } from "@pnp/sp";
import { IUnit } from "../../ContentTypes/IUnit";
import UnitService from "../../services/UnitService";
import AttributeSpinButton from "./AttributeSpinButton";
import MovementIcon from "../Icons/MovementIcon";
import ChargeIcon from "../Icons/ChargeIcon";
import AttributeSkills from "./AttributeSkills";
import ArmorStats from "./ArmorStats";
import FeatureDescriptions from "./FeatureDescriptions";
import PassiveSkills from "./PassiveSkills";


interface IUnitCardProps{
    UnitId:number;
}
interface IUnitCardState{
    ready:boolean;
    Unit?:IUnitCard;
}

//Stack Styles
const outerUnitCardStackStyles: IStackStyles = {
    root: {
      background: DefaultPalette.themeTertiary,
    },
};
const outerUnitCardStackItemStyles: IStackItemStyles = {
    root: {
      background: DefaultPalette.themePrimary,
      color: DefaultPalette.white,
      padding: 5,
      minWidth:400
    },
};

export default class UnitCard extends React.Component<IUnitCardProps, IUnitCardState>{
    private _sp: SPFI;
    
    constructor(props:IUnitCardProps){
        super(props);
        this.state = {
            ready:false,
        }   
        this._sp = getSP();
        this._method = this._method.bind(this)
    }
     
    public async componentDidMount(): Promise<void> {
        const list = this._sp.web.lists.getByTitle('Units');
        const unit:IUnit = await list.items.getById(this.props.UnitId).select('*,Faction/Title').expand('Faction')();
        const cardViewModal:IUnitCard = UnitService.getUnitCardViewModel(unit);

        this.setState({
            ready:true,
            Unit:cardViewModal
        });
    }

    private _method():void{



    }
        

      
    public render(): React.ReactElement<IUnitCardProps> {
        return(
            <>
            {
            this.state.ready
                ?
                (<>
                    <Stack wrap={false} styles={outerUnitCardStackStyles}>
                        <Stack.Item align='center' styles={outerUnitCardStackItemStyles}> 
                            <Stack>

                                {/* title */}
                                <Stack.Item>
                                    <Stack horizontal>
                                        <Stack.Item>
                                            <div style={{minWidth:50,minHeight:50,backgroundColor:'grey'}}>dfgsdgf</div>
                                        </Stack.Item>
                                        <Stack.Item grow>
                                            <Stack>
                                                <Stack.Item align="center">
                                                    {this.state.Unit?.Title}
                                                </Stack.Item>
                                                <Stack.Item align="center">
                                                    {this.state.Unit?.Faction?.Title}
                                                </Stack.Item>
                                            </Stack>
                                        </Stack.Item>
                                        <Stack.Item>
                                          <div style={{minWidth:50,minHeight:50,backgroundColor:'grey'}}>dfgsdgf</div>
                                        </Stack.Item>
                                    </Stack>
                                </Stack.Item>
                                
                                {/* title */}

                                {/* movement */}
                                <Stack.Item align="start">
                                    <Stack horizontal>
                                        <Stack.Item><MovementIcon movementColor={this.state.Unit?.MoveDistance}/></Stack.Item><Stack.Item><ChargeIcon ChargeColor={this.state.Unit?.ChargeDistance}/></Stack.Item>
                                    </Stack>
                                </Stack.Item>
                                 {/* movement */}

                                {/* big row */}
                                <Stack.Item>
                                    <Stack horizontal >
                                        {/* iMAGE */}
                                        <Stack.Item>
                                            <div style={{minWidth:175,minHeight:300,backgroundColor:'red'}}>dfgsdgf</div>
                                        </Stack.Item>
                                        {/* iMAGE */}

                                        {/* Stats */}
                                        <Stack.Item grow align="end">
                                            <Stack>
                                                <Stack.Item align="end">
                                                    <Stack horizontal>
                                                        <Stack.Item><AttributeSkills/></Stack.Item>
                                                        <Stack.Item><AttributeSpinButton label="STR" defaultValue={this.state.Unit?.STR.toString()}/></Stack.Item>
                                                    </Stack>
                                                </Stack.Item>
                                                <Stack.Item align="end">
                                                    <Stack horizontal>
                                                        <Stack.Item><AttributeSkills/></Stack.Item>
                                                            <Stack.Item><AttributeSpinButton label="PER" defaultValue={this.state.Unit?.PER.toString()}/></Stack.Item>
                                                    </Stack>
                                                </Stack.Item>
                                                <Stack.Item align="end">
                                                    <Stack horizontal>
                                                        <Stack.Item><AttributeSkills/></Stack.Item>
                                                        <Stack.Item><AttributeSpinButton label="END" defaultValue={this.state.Unit?.END.toString()}/></Stack.Item>
                                                    </Stack>
                                                </Stack.Item>
                                                <Stack.Item align="end">
                                                    <Stack horizontal>
                                                        <Stack.Item><AttributeSkills/></Stack.Item>
                                                        <Stack.Item><AttributeSpinButton label="CHA" defaultValue={this.state.Unit?.CHA.toString()}/></Stack.Item>
                                                    </Stack>
                                                </Stack.Item>
                                                <Stack.Item align="end">
                                                    <Stack horizontal>
                                                        <Stack.Item><AttributeSkills/></Stack.Item>
                                                        <Stack.Item><AttributeSpinButton label="INT" defaultValue={this.state.Unit?.INT.toString()}/></Stack.Item>
                                                    </Stack>
                                                </Stack.Item>
                                                <Stack.Item align="end">
                                                    <Stack horizontal>
                                                        <Stack.Item><AttributeSkills/></Stack.Item>
                                                        <Stack.Item><AttributeSpinButton label="AGI" defaultValue={this.state.Unit?.AGI.toString()}/></Stack.Item>
                                                    </Stack>
                                                </Stack.Item>
                                                <Stack.Item align="end">
                                                    <Stack horizontal>
                                                        <Stack.Item><AttributeSkills/></Stack.Item>
                                                        <Stack.Item><AttributeSpinButton label="LUC" defaultValue={this.state.Unit?.LUC.toString()}/></Stack.Item>
                                                    </Stack>
                                                </Stack.Item>
                                            </Stack>
                                        </Stack.Item>       
                                        {/* Stats */}
                                    </Stack>
                                </Stack.Item>

                                {/* big row */}

                                {/* TEXT AND ARMOR ROW */}
                                <Stack.Item>

                                </Stack.Item>
                                {/* TEXT AND ARMOR ROW */}
                                    <Stack horizontal>
                                        <Stack.Item grow><FeatureDescriptions /></Stack.Item>
                                        <Stack.Item><ArmorStats /></Stack.Item>
                                    </Stack>
                                {/* fOOTER ROW */}
                                <Stack.Item>
                                    <Stack horizontal>
                                        <Stack.Item grow><PassiveSkills /></Stack.Item>
                                    </Stack>
                                    </Stack.Item>
                                {/* fOOTER ROW */}

                            </Stack>
                        </Stack.Item>
                    </Stack>
                </>)
                :
                (<>
                    <Spinner />
                </>)
            }
            </>
            );
    }
}