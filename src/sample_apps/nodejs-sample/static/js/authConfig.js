const msalConfig = {
    auth: {
      clientId: "<add your client id here>",
      redirectUri: "http://localhost:3000"
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };  
    
  const loginRequest = {
    scopes: ["https://api.ci.ai.microsoft.com/.default"]
  };
  
  const tokenRequest = {
    scopes: ["https://api.ci.ai.microsoft.com/.default"]
  };