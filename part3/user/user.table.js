import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import UserTableHead from './user.table.head';
import UserTableToolBar from './user.table.toolbar';

const styles = theme => ({
    container: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700
    },
    tableWrapper: {
        overflowX: 'auto'
    }
})

let id = 0;
function createUser(name, aboutMe, location) {
    id += 1;
    return { id, name, aboutMe, location };
}

const rows = [
    createUser('Natsu Dragneel', 'Mage of the Fairy Tail Guild. Dragon Slayer.', 'Tartaros'),
    createUser('Lucy Heartfilia', 'Mage of the Fairy Tail Guild. Member of Team Natsu.', 'Fairy Tail'),
    createUser('Gray Fullbuster', 'Mage of the Fairy Tail Guild. Member of Team Natsu.', 'Ur'),
    createUser('Juvia Lockser', 'Mage of Fairy Tail and is a former S-Class Mage of the now-disbanded Phantom Lord.', 'Fairy Tail'),
    createUser('Jon Snow', 'My real name is Aegon Targaryen. King in the North. I know nothing ;)', 'Winterfell'),
    createUser('Daenerys Targaryen', 'Widow to Khal Drogo. Flirting with Daario Naharis. Friendzoned Jorah Mormont. In relationship with my nephew.', 'Essos'),
];

class UserTable extends Component {

    onRequestSort = (event, property) => {

    };

    onSelectAll = event => {

    };

    render() {
        const { classes: cls } = this.props;
        return (
            <Paper className={cls.container}>
                <UserTableToolBar numSelected={0}/>
                <div className={cls.tableWrapper}>
                    <Table className={cls.table}>
                        <UserTableHead
                            numSelected={0}
                            order={'asc'}
                            orderBy={'id'}
                            onSelectAll={this.onSelectAll}
                            onRequestSort={this.onRequestSort}
                            rowCount={5}
                        />
                        {/* I STOPPED HERE - On Going */}
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">{row.id}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.aboutMe}</TableCell>
                                    <TableCell>{row.location}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Paper>
        );
    }
}

UserTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserTable);