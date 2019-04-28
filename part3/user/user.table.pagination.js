import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

import UserTablePaginationActions from './user.table.pagination.actions';

class UserTablePagination extends React.Component {
    render() {
        const { count, rowsPerPage, page, onChangePage, onChangeRowsPerPage } = this.props;
        return (
            <TableFooter>
                <TableRow>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        colSpan={3}
                        count={count}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                            native: true
                        }}
                        onChangePage={onChangePage}
                        onChangeRowsPerPage={onChangeRowsPerPage}
                        ActionsComponent={UserTablePaginationActions}
                    >
                    </TablePagination>
                </TableRow>
            </TableFooter>
        )
    }
}

UserTablePagination.propTypes = {
    count: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    onChangeRowsPerPage: PropTypes.func.isRequired
}

export default UserTablePagination;