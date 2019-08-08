import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState({fact: null, loading: true});

  useEffect(() => {
    setData({fact: null, loading: true});
    fetch(url)
      .then(x => x.text())
      .then(y => {
        setTimeout(() => {
          setData({fact: y, loading: false});
        }, 1500)
      });
  }, [url, setData])

  return data
}
