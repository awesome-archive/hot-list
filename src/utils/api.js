import 'isomorphic-fetch';

const API_ROOT = process.env.REACT_APP_API_ROOT;

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

function callApi(endpoint, request) {
  if (request && request.body) request.body = JSON.stringify(request.body);

  const requestWithHeaders = {
    ...{ headers },
    ...request
  };

  const url = API_ROOT + endpoint;

  return fetch(url, requestWithHeaders)
    .then(response => response.json().then(body => ({ response, body })))
    .then(({ response, body }) => {
      if (!response.ok) {
        if (body && body.error) return Promise.reject(body.error);
      }
      return body;
    });
}

export default {
  fetchSites() {
    return callApi('/sites');
  },
  fetchHotList(siteId) {
    return callApi(`/sites/${siteId}/hot`);
  }
};
