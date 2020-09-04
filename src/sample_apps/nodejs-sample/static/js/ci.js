function getCiHeaders(token) {
  var headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);
  return headers;
}

function queryBackend(url, httpMethod, callback) {
  if (myMSALObj.getAccount()) {
    getTokenPopup(tokenRequest)
      .then(response => {
        let options = {
          method: httpMethod,
          headers: getCiHeaders(response.accessToken)
        };

        fetch(url, options)
          .then(response => response.json().then(json => {
            console.log(json);
            callback(json);
          }))
          .catch(error => console.log(error))
      }).catch(error => {
        console.log(error);
      });
  }
}

function getInstances(callback) {
  queryBackend('/ci/instances', 'GET', callback);
}

function searchCustomers(instanceId, searchQuery, segment, callback) {
  var queryParams = new URLSearchParams({ 'instanceId': instanceId, 'searchQuery': searchQuery, 'segment': segment }).toString()
  queryBackend(`/ci/search?${queryParams}`, 'GET', callback);
}

function getSegments(instanceId, callback) {
  var queryParams = new URLSearchParams({ 'instanceId': instanceId }).toString()
  queryBackend(`/ci/segments?${queryParams}`, 'GET', callback);
}

function getEntities(instanceId, entityName, callback) {
  var queryParams = new URLSearchParams({ 'instanceId': instanceId, 'entityName': entityName }).toString()
  queryBackend(`/ci/entities?${queryParams}`, 'GET', callback);
}