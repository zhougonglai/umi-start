import fetch from 'dva/fetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

const options = {
  mode: 'cors',
  // credentials: 'include',
  headers: {
    Accept: 'application/json'
  }
}

/**
 * Requests a URL, returning a promise.
 */
export default {
  get: async (url, params, option) =>
    await fetch(`${url}?${params ? new URLSearchParams(params).toSting() : ''}`, {
      ...options,
      ...option
    }).then(res => res.json()).catch(checkStatus),
  post: async (url, body, option) =>
    await fetch(url, {
      ...options,
      ...option,
      method: 'POST', body
    }).catch(checkStatus)
}
