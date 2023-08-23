import {useState, useEffect, useMemo} from 'react';
//import EnvConfig from '../../envConfig.js';
import {ApiCallType} from '../components/types.js';

type headerType = {
  'X-RapidAPI-Key': string;
  'X-RapidAPI-Host': string;
};

type optionsType = {
  method: string;
  headers: headerType;
  body?: string;
};

function convertObjectToQueryString(obj: Record<string, string>) {
  return Object.keys(obj)
    .map(key =>
      key === 'job_id'
        ? `${encodeURIComponent(key)}=${obj[key]}`
        : `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`,
    )
    .join('&');
}
const useFetch = (
  method: string,
  callEndpoint: string,
  query: Record<string, string>,
): ApiCallType => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  let url = `https://jsearch.p.rapidapi.com/${callEndpoint}`;

  const options: optionsType = useMemo(
    () => ({
      method: method,
      headers: {
        'X-RapidAPI-Key': '5a56d03fd1mshd054eab47fb0a57p1debc9jsn6a3c147ac884',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
      },
    }),
    [method],
  );

  if (method === 'GET') {
    url += '?' + convertObjectToQueryString(query);
  } else {
    options.body = JSON.stringify(query);
  }

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url, options);
      const jsonData = await response.json();

      if (jsonData.status === 'OK') {
        setData(jsonData.data);
        setError(null);
      } else {
        setError('Error');
      }
      setIsLoading(false);
    } catch (e) {
      setError('Error');
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {data, isLoading, error};
};

export default useFetch;
