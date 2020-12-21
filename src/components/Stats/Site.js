import React, { useState, useCallback, useEffect } from 'react';

import Table from './Table';
import displayData from '../../data/stats/site';

const Stats = () => {
  const [data, setResponseData] = useState(displayData);

  const fetchData = useCallback(async () => {
    // repository must be authenticated if private
    const res = await fetch(
      `https://api.github.com/repos/mldangelo/personal-site`
    );
    const resData = await res.json();
    setResponseData(
      displayData.map((field) => ({
        ...field,
        // update value if value was returned by call to github
        value: Object.keys(resData).includes(field.key)
          ? resData[field.key]
          : field.value,
      }))
    );
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h3>Some stats about this site</h3>
      <Table data={data} />
    </div>
  );
};

export default Stats;
