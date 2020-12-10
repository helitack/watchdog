import React from 'react';
import { useQuery } from 'react-query';

export const Dashboard = () => {
  const { isLoading, isError, data, error } = useQuery(
    'nginx-logs',
    async () => {
      const result = await fetch('/elastic/filebeat*/_search');
      const json = await result.json();
      console.log(json);
      return json;
    },
  );

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  if (data.error) {
    return <h1>Error: {data.error.reason}</h1>;
  }

  const hits = data.hits.hits.map((hit) => {
    return (
      <tr key={hit._id}>
        <td>{hit._source.message}</td>
      </tr>
    );
  });

  return (
    <table>
      <tbody>
        {hits}
      </tbody>
    </table>
  );
};
