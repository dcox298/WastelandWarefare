import * as React from "react";
import { IUnitCard } from "../../viewmodels/IUnitCard";
import { DefaultPalette, IStackItemStyles, IStackStyles, Label, Spinner, Stack,  } from "@fluentui/react";
import { getSP } from "../../pnpjsConfig";
import { SPFI } from "@pnp/sp";
import { IUnit } from "../../ContentTypes/IUnit";
import UnitService from "../../services/UnitService";


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
                                <Stack.Item>
                                    {this.state.Unit?.Title}
                                </Stack.Item>
                                <Stack.Item>
                                    {this.state.Unit?.Faction?.Title}
                                </Stack.Item>
                                <Stack.Item>
                                    <Stack horizontal>
                                        <Stack.Item>{this.state.Unit?.MoveDistance}</Stack.Item><Stack.Item>{this.state.Unit?.ChargeDistance}</Stack.Item>
                                    </Stack>
                                </Stack.Item>
                                <Stack.Item>
                                    <Stack horizontal>
                                        <Stack.Item><Label>STR</Label></Stack.Item><Stack.Item>{this.state.Unit?.STR}</Stack.Item>
                                    </Stack>
                                </Stack.Item>
                                <Stack.Item>
                                    <Stack horizontal>
                                        <Stack.Item><Label>PER</Label></Stack.Item><Stack.Item>{this.state.Unit?.PER}</Stack.Item>
                                    </Stack>
                                </Stack.Item>
                                <Stack.Item>
                                    <Stack horizontal>
                                        <Stack.Item><Label>END</Label></Stack.Item><Stack.Item>{this.state.Unit?.END}</Stack.Item>
                                    </Stack>
                                </Stack.Item>
                                <Stack.Item>
                                    <Stack horizontal>
                                        <Stack.Item><Label>CHA</Label></Stack.Item><Stack.Item>{this.state.Unit?.CHA}</Stack.Item>
                                    </Stack>
                                </Stack.Item>
                                <Stack.Item>
                                    <Stack horizontal>
                                        <Stack.Item><Label>INT</Label></Stack.Item><Stack.Item>{this.state.Unit?.INT}</Stack.Item>
                                    </Stack>
                                </Stack.Item>
                                <Stack.Item>
                                    <Stack horizontal>
                                        <Stack.Item><Label>AGI</Label></Stack.Item><Stack.Item>{this.state.Unit?.AGI}</Stack.Item>
                                    </Stack>
                                </Stack.Item>
                                <Stack.Item>
                                    <Stack horizontal>
                                        <Stack.Item><Label>LUC</Label></Stack.Item><Stack.Item>{this.state.Unit?.LUC}</Stack.Item>
                                    </Stack>
                                </Stack.Item>
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