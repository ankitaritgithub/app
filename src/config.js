const aName = {
    oidc: {
      // issuer: 'https://$dev-0etenx3yu3tey7fo.us.auth0.com/oauth2/default',
      // clientId: '$WMzXHHE12Xck937zaNaHVxQXcXdAHEJF',
      // scopes: ['openid', 'password', 'email'],
      redirectUri: `${window.location.origin}/login/callback`,
      // pkce: false,
      // cookies: {
      // secure: false
      // }
      issuer:'https://dev-0etenx3yu3tey7fo.us.auth0.com/oauth2/default',
      clientId:'NQeOT4Z5MWtdwAfMfzhOIyxntxFg1Z7a',
      USE_INTERACTION_CODE:true

    },
    widget: {
      // issuer: 'https://$dev-0etenx3yu3tey7fo.us.auth0.com/oauth2/default',
      // clientId: '$WMzXHHE12Xck937zaNaHVxQXcXdAHEJF',
      redirectUri: `${window.location.origin}/login/callback`,
      // scopes: ['openid', 'password', 'email'],
      // pkce: false,
      // cookies: {
      // secure: false
      // }
      issuer:'https://dev-0etenx3yu3tey7fo.us.auth0.com/oauth2/default',
      clientId:'NQeOT4Z5MWtdwAfMfzhOIyxntxFg1Z7a',
      USE_INTERACTION_CODE:true
    }
  };


//   import Customers from "./customers/reducer";
// const aName = {
//     Customers
// };
export default aName;
  