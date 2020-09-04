// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
const myMSALObj = new Msal.UserAgentApplication(msalConfig);

function signIn(callbacks) {
  myMSALObj.loginPopup(loginRequest)
    .then(loginResponse => {
      console.log('id_token acquired at: ' + new Date().toString());
      console.log(loginResponse);

      var account = myMSALObj.getAccount();
      if (account && callbacks) {
        callbacks.forEach(callback => {
          callback(account);
        });
      }
    }).catch(error => {
      console.log(error);
    });
}

function signOut(callbacks) {
  myMSALObj.logout();
  if (callbacks) {
    callbacks.forEach(callback => {
      callback();
    });
  }
}

function getTokenPopup(request) {
  return myMSALObj.acquireTokenSilent(request)
    .then((response) => {
      console.log(response);
      if (response.accessToken) {
        console.log('access_token acquired at: ' + new Date().toString());
        console.log('response_type: ' + response.tokenType);
        return response;
      }
    })
    .catch(error => {
      console.log(error);
      console.log('silent token acquisition fails. acquiring token using popup');

      // fallback to interaction when silent call fails
      return myMSALObj.acquireTokenPopup(request)
        .then(tokenResponse => {
          return tokenResponse;
        }).catch(error => {
          console.log(error);
        });
    });
}
