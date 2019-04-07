import React from 'react';
import { withRouter } from "react-router-dom";

import RecipeList from './recipeList/RecipeListComponent';
import EditPanel from './edit/EditPanelComponent';

import './sidebar.scss';

export const SideBar = () => {
    const EditPanelComponent = withRouter(props => <EditPanel {...props} />);
    return (
        <aside className="sidebar">
            <EditPanelComponent />
            <RecipeList />
        </aside>
    )
};