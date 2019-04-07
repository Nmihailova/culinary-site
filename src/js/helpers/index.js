import React from 'react';
import { Link } from 'react-router-dom';

export const redirectToCurrentRecipe = id => {
    return (<Link to={`/show-recipe/${id}`} />)
};