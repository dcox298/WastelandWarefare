import * as React from 'react';
import styles from './WastelandWarefare.module.scss';
import type { IWastelandWarefareProps } from './IWastelandWarefareProps';
import { HashRouter, Route, Routes } from 'react-router-dom';
import MasterPage from './masterpage/MasterPage';
import PageHome from './pagehome/PageHome';
import PageUnits from './pageunits/PageUnits';


export default class WastelandWarefare extends React.Component<IWastelandWarefareProps, {}> {
  public render(): React.ReactElement<IWastelandWarefareProps> {
    const {
      // description,
      // isDarkTheme,
      // environmentMessage,
      hasTeamsContext,
     // userDisplayName
     webpartcontext
    } = this.props;

    return (
      <section className={`${styles.wastelandWarefare} ${hasTeamsContext ? styles.teams : ''}`}>
       <HashRouter>
        <Routes>
          <Route path="/" element={<MasterPage  page={<PageHome pageTitle='Home' />} />} />
          <Route path="/Units" element={<MasterPage page={<PageUnits webpartcontext={webpartcontext} pageTitle='Units'/>} />} />
        </Routes>
       </HashRouter>
      </section>
    );
  }
}
