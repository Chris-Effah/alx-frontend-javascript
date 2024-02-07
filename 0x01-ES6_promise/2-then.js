function handleResponseFromAPI(promise) {
  return promise
    .then(data => {
      return {
        status: 200,
        body: 'success'
      };
    })
    .catch(error => {
      console.error('Error from the API:', error.message);
      return new Error();
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}
export default handleResponseFromAPI;
