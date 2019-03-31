import React from 'react';

import RecipeList from '../recipeList/RecipeListComponent';
import EditPanel from '../edit/EditPanelComponent';

import './sidebar.scss';

export const SideBar = () => {
    return (
        <aside className="sidebar">
            <EditPanel />
            <RecipeList />
        </aside>
    )
};