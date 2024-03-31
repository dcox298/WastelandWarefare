import { Text,DefaultButton, DefaultPalette, Icon, IStackItemStyles, IStackStyles, Panel, Stack, PanelType,  } from "@fluentui/react";
import * as React from "react";
import { IMasterPageProps } from "./IMasterPageProps";
import { IMasterPageState } from "./IMasterPageState";

// Styles definition
const stackStyles: IStackStyles = {
    root: {
      background: DefaultPalette.themeTertiary,
    },
  };
const topStackItemStyles: IStackItemStyles = {
    root: {
        padding: 5,
    },
};
const bottomStackItemStyles: IStackItemStyles = {
    root: {
        background: DefaultPalette.themeLighterAlt,
        color: DefaultPalette.black,
        minHeight:500,
        padding: 5,
    },
};
const navStackStyles: IStackStyles = {
    root: {
        background: DefaultPalette.yellow,
        padding: 5
    },
};
const leftButtonStackItemStyles: IStackItemStyles = {
    root: {
        background: DefaultPalette.blueLight,
        color: DefaultPalette.white,
        textAlign:"left",
        padding: 5,
    },
};
  const centerButtonStackItemStyles: IStackItemStyles = {
    root: {
      background: DefaultPalette.yellow,
      color: DefaultPalette.white,
      textAlign:"center",
      padding: 5,
    },
  };
  const rightButtonStackItemStyles: IStackItemStyles = {
    root: {
      background: DefaultPalette.red,
      color: DefaultPalette.white,
      textAlign:"right",
      padding: 5,
    },
  };

export default class WastelandWarefare extends React.Component<IMasterPageProps, IMasterPageState>{
    
    constructor(props:IMasterPageProps){
        super(props);
        this.state = {
            isOpen:false
        }
        this.openPanel = this.openPanel.bind(this);
        this.dismissPanel = this.dismissPanel.bind(this);

    }
    public openPanel(){
        this.setState({isOpen:true})
    }
    public dismissPanel(){
        this.setState({isOpen:false})
    }
    public render(): React.ReactElement<IMasterPageProps> {
        const {page} = this.props;
        
        return (
        <>
        <Stack enableScopedSelectors styles={stackStyles}>
            <Stack.Item grow styles={topStackItemStyles}>
                <Stack styles={navStackStyles} horizontal horizontalAlign="space-between">
                    <Stack.Item styles={leftButtonStackItemStyles}  grow={1}>
                        
                            <DefaultButton onRenderText={()=>{return(<Icon iconName="Back" />)}} />
                         
                    </Stack.Item>
                    <Stack.Item styles={centerButtonStackItemStyles} grow={3}>
                        
                         <Text>title of page</Text>   
                        
                    </Stack.Item>
                    <Stack.Item styles={rightButtonStackItemStyles} grow={1}>
                       
                            <DefaultButton onRenderText={()=>{return(<Icon iconName="Settings" />)}} text="Open Main menu" onClick={this.openPanel} />
                             
                    </Stack.Item>
                </Stack>
            </Stack.Item>
            <Stack.Item grow styles={bottomStackItemStyles}>
                {page}  
            </Stack.Item>
        </Stack>
        <Panel
        headerText="Sample panel"
        isOpen={this.state.isOpen}
        onDismiss={this.dismissPanel}
        type={PanelType.smallFluid}
        // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
        closeButtonAriaLabel="Close"
      >
        <p>Content goes here.</p>
      </Panel>
        </>)
    }
}
