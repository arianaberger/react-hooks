import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState({fact: null, loading: true});

  function sleeper(ms) {
    return function(x) {
      return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
  }

  useEffect(() => {
    setData({fact: null, loading: true});
    fetch(url)
      .then(x => x.text())
      .then(sleeper(1500))
      .then(y => {
        setData({fact: y, loading: false})
      })
  }, [url, setData])

  return data
}
