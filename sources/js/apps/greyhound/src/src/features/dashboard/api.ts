export const fetchLogs = async () => {
  const result = await fetch('/elastic/filebeat*/_search?size=50', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sort: [
        {
          '@timestamp': {
            order: 'desc',
          },
        },
      ],
      query: { match_all: {} },
    }),
  });
  const json = await result.json();
  return json;
};
