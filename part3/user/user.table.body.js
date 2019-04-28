import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';

class UserTableBody extends React.Component {
    isSelected(id) {
        const { selected } = this.props;
        return selected.indexOf(id) > -1;
    }

    render() {
        const { data, onClick, page, rowsPerPage } = this.props;

        return (
            <TableBody>
                {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(dt => {
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
                            <TableCell>{dt.name}</TableCell>
                            <TableCell>{dt.aboutMe}</TableCell>
                            <TableCell>{dt.location}</TableCell>
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
    rowsPerPage: PropTypes.number.isRequired
};

export default UserTableBody;