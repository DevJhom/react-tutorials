import {useState, useCallback} from 'react';

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const sendRequest = useCallback(async (requestConfig, applyData) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
            requestConfig.url, 
            {
                //if parameter is not passed, use the default
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
            }
        );
  
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        const data = await response.json();

        //second parameter is a function
        applyData(data);

      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    }, []);

    return {
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest
    }
};

export default useHttp;