const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./key');

passport.use(
  new GoogleStrategy({
    //options for stratergy
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
  },
  (accessToken,refreshToken,profile,done) => {
    //cb fn post authentication
    
    console.log('Passport callback fired');
    console.log('Profile | '+JSON.stringify(profile));
    done(null,profile);   
  }
));
