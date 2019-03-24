import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import './edit.scss';

export default class EditPanelComponent extends Component {
    render() {
        return (
            <div className="edit">
                <Fab size="medium" color="default" aria-label="Add">
                    <AddIcon />
                </Fab>
                <Fab size="medium" color="default" aria-label="Edit">
                    <EditIcon />
                </Fab>
                <Fab size="medium" disabled aria-label="Delete">
                    <DeleteIcon />
                </Fab>
            </div>
        )
    }
}