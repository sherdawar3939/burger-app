import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import './Layout.css';

const Layout = (props) => (
  <Auxiliary>
    <div> Tool, SideDrawer, BackDrop</div>
    <main className="Content">
     {props.children}
    </main>
  </Auxiliary>
)
export default Layout