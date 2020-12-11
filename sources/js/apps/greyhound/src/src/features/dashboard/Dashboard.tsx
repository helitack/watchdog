import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { LogTable } from './LogTable';
import watchdogImage from './watchdog.png';

export const Dashboard = () => {
  return (
    <Container style={{ paddingTop: '20px' }} maxWidth="xl">
      <img height="60" width="60" src={watchdogImage} alt="Watchdog" />
      <Typography variant="h2" gutterBottom>
        Meta-Logs!
      </Typography>
      <p>
        These are the container logs for the Nginx proxy that is infront of this
        app. These logs are coming from Filebeat and are being queried from
        Elasticsearch!
      </p>
      <LogTable />
    </Container>
  );
};
