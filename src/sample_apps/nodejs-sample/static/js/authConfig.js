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
    scopes: ["38c77d00-5fcb-4cce-9d93-af4738258e3c/.default"]
  };
  
  const tokenRequest = {
    scopes: ["38c77d00-5fcb-4cce-9d93-af4738258e3c/.default"]
  };