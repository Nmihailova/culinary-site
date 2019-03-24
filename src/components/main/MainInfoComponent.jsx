import React, { Component } from 'react';

import RecipeList from '../recipeList/RecipeListComponent';
import EditPanel from '../edit/EditPanelComponent';

import './main.scss';

export default class MainInfoComponent extends Component {
    render() {
        return (
            <main className="main-info">
                <div className="main-info__sidebar">
                    <EditPanel />
                    <RecipeList />
                </div>
                
            </main>
        )
    }
}