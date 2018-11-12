import auth0 from 'auth0-js';
import history from './history';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'subodhkumar.auth0.com',
    clientID: 'JzW3Lb2FV9IprD42GEVi7bmRWCNCv2Yn',
    redirectUri:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/callback'
        : 'http://localhost:3000/callback',
    audience: 'https://subodhkumar.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid',
  });

  login = () => {
    this.auth0.authorize();
  };

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/dashboard');
      } else if (err) {
        history.replace('/view');
        console.log(err);
      }
    });
  };

  setSession = authResult => {
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime(),
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    history.replace('/dashboard');
  };

  logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    history.replace('/view');
  };

  isAuthenticated = () => {
    let expires_at = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expires_at;
  };
}
