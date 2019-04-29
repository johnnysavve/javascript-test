import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import { Edit, Clear } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

class UserTableBody extends React.Component {
    isSelected(id) {
        const { selected } = this.props;
        return selected.indexOf(id) > -1;
    }

    renderField(row, field) {
        const { rowEdit, rowField, onRowEdit, onRowEditClose } = this.props;

        const isEdit = row.id === rowEdit && rowField === field;

        return isEdit
            ? <Fragment>
                <TextField onClick={e => e.stopPropagation()} value={row[field]} />
                <IconButton onClick={onRowEditClose.bind(this, row, field)}><Clear /></IconButton>
            </Fragment>
            : <Fragment>
                {row[field]}
                <IconButton onClick={onRowEdit.bind(this, row, field)}><Edit /></IconButton>
            </Fragment>;
    }

    render() {
        const { data, onClick, page, rowsPerPage, stableSort, getSorting, order, orderBy } = this.props;

        return (
            <TableBody>
                {stableSort(data, getSorting(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(dt => {
                        const isSelected = this.isSelected(dt.id);
                        return (
                            <TableRow
                                hover
                                role="checkbox"
                                aria-checked={isSelected}
                                tabIndex={-1}
                                key={dt.id}
                                selected={isSelected}
                                onClick={event => onClick(event, dt.id)}
                            >
                                <TableCell padding="checkbox"><Checkbox checked={isSelected} /></TableCell>
                                <TableCell component="th" scope="row">{dt.id}</TableCell>
                                <TableCell>{this.renderField(dt, 'name')}</TableCell>
                                <TableCell>{dt.aboutMe}</TableCell>
                                <TableCell>{this.renderField(dt, 'location')}</TableCell>
                            </TableRow>
                        )
                    })}
            </TableBody>
        )
    }
}

UserTableBody.propTypes = {
    data: PropTypes.array.isRequired,
    selected: PropTypes.arrayOf(PropTypes.number),
    onClick: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    stableSort: PropTypes.func.isRequired,
    getSorting: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
};

export default UserTableBody;