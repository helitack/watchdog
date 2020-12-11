import React from 'react';
import { useQuery } from 'react-query';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { fetchLogs } from './api';

import styled from 'styled-components/macro';

export const StyledRow = styled(TableRow)`
  animation: expand 0.6s ease-in-out;

  @keyframes expand {
    from {
      opacity: 0;
      background: #64b5f6;
    }
  }

  &:hover {
    background: #e0e0e0;
  }
`;

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  idRow: {
    width: '20%',
  },
});

export const LogTable = () => {
  const classes = useStyles();

  const { isLoading, isError, data } = useQuery('nginx-logs', fetchLogs, {
    refetchInterval: 2000,
  });

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  if (data.error) {
    return <h1>Error: {data.error.reason}</h1>;
  }

  const hits = data.hits.hits.map(hit => {
    return (
      <StyledRow key={hit._id}>
        <TableCell>{hit._id}</TableCell>
        <TableCell>{hit._source.message}</TableCell>
      </StyledRow>
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.idRow}>ID</TableCell>
            <TableCell>Log</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{hits}</TableBody>
      </Table>
    </TableContainer>
  );
};
