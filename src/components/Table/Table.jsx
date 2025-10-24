// Table.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { MdSearch, MdClear } from 'react-icons/md';
import { DataGrid } from '@mui/x-data-grid';
import './Table.scss';

export default function Table() {
    const employees = useSelector(
        (state) => state.employees?.list ?? state.employees?.items ?? state.employees ?? []
    );

    const [search, setSearch] = React.useState('');

    const handleSearchChange = React.useCallback((event) => {
        setSearch(event.target.value);
    }, []);

    const handleClearSearch = React.useCallback(() => {
        setSearch('');
    }, []);

    const columns = React.useMemo(
        () => [
            { field: 'firstName', headerName: 'First Name', flex: 1, minWidth: 130, hideable: false },
            { field: 'lastName', headerName: 'Last Name', flex: 1, minWidth: 130, hideable: false },
            {
                field: 'startDate',
                headerName: 'Start Date',
                type: 'date',
                flex: 1,
                minWidth: 140,
                hideable: false,
                valueGetter: (p) => (p.row?.startDate ? new Date(p.row.startDate) : null),
            },
            { field: 'department', headerName: 'Department', flex: 1, minWidth: 150, hideable: false },
            {
                field: 'dateOfBirth',
                headerName: 'Date of Birth',
                type: 'date',
                flex: 1,
                minWidth: 150,
                hideable: false,
                valueGetter: (p) => (p.row?.dateOfBirth ? new Date(p.row.dateOfBirth) : null),
            },
            { field: 'street', headerName: 'Street', flex: 1.4, minWidth: 200, hideable: false },
            { field: 'city', headerName: 'City', flex: 1, minWidth: 130, hideable: false },
            { field: 'state', headerName: 'State', flex: 0.8, minWidth: 110, hideable: false },
            { field: 'zipCode', headerName: 'Zip Code', flex: 0.8, minWidth: 120, hideable: false },
        ],
        []
    );

    const rows = React.useMemo(
        () =>
            (employees || []).map((emp, idx) => ({
                id: emp.id ?? `${emp.firstName}-${emp.lastName}-${idx}`,
                ...emp,
            })),
        [employees]
    );

    const filterModel = React.useMemo(
        () => ({
            items: [],
            quickFilterValues: search ? [search] : [],
        }),
        [search]
    );

    const totalRows = rows.length;
    const formattedCount = `${totalRows.toLocaleString()} ${totalRows === 1 ? 'employee' : 'employees'}`;

    return (
        <div className="data-table">
            <div className="data-table__toolbar">
                <div className="data-table__toolbar-meta">
                    <span className="data-table__title">Employee Directory</span>
                    <span className="data-table__count">{formattedCount}</span>
                </div>
                <div className="data-table__toolbar-search">
                    <TextField
                        fullWidth
                        size="small"
                        label="Search"
                        placeholder="Search by any value"
                        value={search}
                        onChange={handleSearchChange}
                        className="data-table__search-input"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MdSearch size={18} />
                                </InputAdornment>
                            ),
                            endAdornment: search ? (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Clear search"
                                        size="small"
                                        onClick={handleClearSearch}
                                        edge="end"
                                    >
                                        <MdClear size={18} />
                                    </IconButton>
                                </InputAdornment>
                            ) : undefined,
                        }}
                    />
                </div>
            </div>
            <div className="data-table__grid-container">
                <DataGrid
                    rows={rows}
                    columns={columns}
                    disableColumnMenu
                    pageSizeOptions={[10, 25, 50, 100]}
                    initialState={{ pagination: { paginationModel: { pageSize: 10, page: 0 } } }}
                    localeText={{
                        noRowsLabel: 'No Data Available in Table',
                    }}
                    filterModel={filterModel}
                />
            </div>
        </div>
    );
}
