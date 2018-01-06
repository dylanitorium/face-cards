export const request = (url, options) => fetch(url, {
  credentials: 'include',
  ...options,
}).then((response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error;
  }
});

export const json = res => res.json();

export const requestJson = (...args) => request(...args).then(json);
