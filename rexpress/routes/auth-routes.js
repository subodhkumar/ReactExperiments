const router = require('express').Router();
const passport = require('passport');

router.get('/login', (req, res) => {
  res.send({ express: 'Hello from Login' });
});

router.get('/logout', (req, res) => {
  res.send({ express: 'Hello from Logout' });
});

router.get('/test',(req,res)=>{
  res.redirect('/auth/google');
})

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

//callback route fr google to redirect
router.get('/google/redirect',(req,res)=>{
  res.send({ express: 'Hello from Callback' });
  res.redirect('/dashboard');
});

module.exports = router;
