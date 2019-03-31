import React, { Component } from 'react';

import { SideBar } from '../sidebar/SideBarComponent';
import CommonDisplay from '../commonDisplay/CommonDisplayComponent';

import './main.scss';

export default class MainInfoComponent extends Component {
    render() {
        return (
            <main className="main-info">
                <SideBar />
                <CommonDisplay />
            </main>
        )
    }
};
