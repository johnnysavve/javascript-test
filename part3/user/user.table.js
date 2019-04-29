import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import UserTableHead from './user.table.head';
import UserTableToolBar from './user.table.toolbar';
import UserTableBody from './user.table.body';
import UserTablePagination from './user.table.pagination';
import { tableStyles } from './user.style';

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
    createUser('Ned Stark', 'House Stark. Lord of Winterfell and Warden of the North, becomes the Hand of the King after Lord Jon Arryn\'s death', 'Winterfell'),
    createUser('Robert Baratheon', 'House Baratheon. King of the Seven Kingdoms after leading a rebellion against Aerys II Targaryen.', 'King\'s Landing'),
    createUser('Jaime Lannister', 'House Lannister. Member of the Kingsguard and an exceptionally skilled swordsman.', 'Casterly Rock'),
    createUser('Catelyn Stark', 'House Stark and House Tully. Lady of Winterfell, is the wife of Lord Eddard Stark.', 'Winterfell'),
    createUser('Cersei Lannister', 'House Lannister and House Baratheon. Queen of the Seven Kingdoms of Westeros, is the wife of King Robert Baratheon.', 'King\'s Landing'),
];

class UserTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            order: 'asc',
            orderBy: 'id',
            selected: [],
            data: rows,
            page: 0,
            rowsPerPage: 5,
            rowEdit: '',
            rowField: ''
        };
        this.onRequestEdit = this.onRequestEdit.bind(this);
        this.onCloseEdit = this.onCloseEdit.bind(this);
    }

    onRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'desc';

        if (this.state.orderBy === property && this.state.order === 'desc') {
            order = 'asc';
        }

        this.setState({ order, orderBy });
    };

    desc = (a, b, orderBy) => {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    stableSort = (array, cmp) => {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = cmp(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map(el => el[0]);
    }

    getSorting = (order, orderBy) => {
        return order === 'desc' ? (a, b) => this.desc(a, b, orderBy) : (a, b) => -this.desc(a, b, orderBy);
    }

    onSelectAll = event => {
        if (event.target.checked) {
            this.setState(state => ({ selected: state.data.map(m => m.id) }));
            return;
        }
        this.setState({ selected: [] });
    };

    onClick = (event, id) => {
        const { selected } = this.state;
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        this.setState({ selected: newSelected });
    }

    onChangePage = (event, page) => {
        this.setState({ page });
    };

    onChangeRowsPerPage = event => {
        this.setState({ page: 0, rowsPerPage: event.target.value });
    };

    onRequestEdit(row, column, e) {
        e.stopPropagation();
        e.preventDefault();
        this.setState({ rowEdit: row.id, rowField: column });
    }

    onCloseEdit(row, column, e) {
        e.stopPropagation();
        e.preventDefault();
        this.setState({ rowEdit: -1, rowField: '' });
    }

    render() {
        const { classes: cls } = this.props;
        const { data, order, orderBy, selected, page, rowsPerPage, rowEdit, rowField } = this.state;
        return (
            <Paper className={cls.root}>
                <UserTableToolBar numSelected={selected.length} />
                <div className={cls.tableWrapper}>
                    <Table className={cls.table}>
                        <UserTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAll={this.onSelectAll}
                            onRequestSort={this.onRequestSort}
                            rowCount={data.length}
                        />
                        <UserTableBody
                            data={data}
                            selected={selected}
                            onClick={this.onClick}
                            page={page}
                            rowsPerPage={rowsPerPage}
                            stableSort={this.stableSort}
                            getSorting={this.getSorting}
                            order={order}
                            orderBy={orderBy}
                            rowEdit={rowEdit}
                            rowField={rowField}
                            onRowEdit={this.onRequestEdit}
                            onRowEditClose={this.onCloseEdit}
                        />
                        <UserTablePagination
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={this.onChangePage}
                            onChangeRowsPerPage={this.onChangeRowsPerPage}
                        />
                    </Table>
                </div>
            </Paper>
        );
    }
}

UserTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(tableStyles)(UserTable);