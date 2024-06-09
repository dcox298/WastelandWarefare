import { DefaultPalette, IStackItemStyles, IStackStyles, IStackTokens, ITextStyles, Stack, Text } from "@fluentui/react";
import * as React from "react";
import { IFeature } from "../../ContentTypes/IFeature";
import { getSP } from "../../pnpjsConfig";
import { SPFI } from "@pnp/sp";


export interface IFeatureDescriptionsProps {
    features?:number[];

}
export interface IFeatureDescriptionsState {
    features:IFeature[];
}
//Stack Styles
const stackStyles: IStackStyles = {
    root: {
      background: DefaultPalette.themeTertiary,
    },
};
const stackItemStyles: IStackItemStyles = {
    root: {
      background: DefaultPalette.themePrimary,
      color: DefaultPalette.white,
      padding: 5,
      //minWidth:175
    },
};
// Tokens definition
const containerStackTokens: IStackTokens = { childrenGap: 5 };

const titleStyles:ITextStyles={
    root:{
        fontWeight:500
    }
}
const descriptionStyles:ITextStyles={
    root:{

    }
}


export default class FeatureDescriptions extends React.Component<IFeatureDescriptionsProps, IFeatureDescriptionsState>{ 
    private _sp: SPFI;

    constructor(props:IFeatureDescriptionsProps){
        super(props);  
        this.state={
            features:[{Title:'Loading...'}]
        }    
        this._sp = getSP();
    }
    public async componentDidMount(): Promise<void> {
        const list = this._sp.web.lists.getByTitle('Features');
        let filter:string='Id eq ';
        this.props.features?.forEach((id,i)=>{
            if(i===0){
                filter+=id;
            }else{
                filter+=' or Id eq '+id;
            }
        })
        // const features:IFeature = await list.items.getById(this.props.features?this.props.features[0]:1)();
        const features:IFeature[] = await list.items.filter(filter)();
        this.setState({
            features:features
        })

    }

    public render(): React.ReactElement<IFeatureDescriptionsProps> {
        
        return(
            <>
                <Stack styles={stackStyles} tokens={containerStackTokens}>
                    {this.state.features?.map((value:IFeature)=>{
                        return(
                            <Stack.Item styles={stackItemStyles}>
                                <Text styles={titleStyles} variant="smallPlus">{value.Title}</Text><Text styles={descriptionStyles} variant="small">{value.FeatureDescription}</Text>
                            </Stack.Item>
                        )
                    })}
                </Stack>
            </>
        );
    }


}