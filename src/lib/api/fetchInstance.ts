import returnFetch from 'return-fetch';

export const fetchInstance = returnFetch({
  baseUrl: '/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  interceptors: {
    request: async (args) => {
      return {
        ...args,
        credentials: 'include',
      };
    },
    response: async (response, requestArgs, fetch) => {
      if (response.status === 401) {
        console.error('Not authorized');

        console.log('response: ', response);
        console.log('requestArgs: ', requestArgs);
        console.log('fetch: ', fetch);

        return response;
      }

      return response;
    },
  },
});
