const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth.js');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const productRouter = require('./products');
const createRouter = require('./create')




router.use('/products', productRouter);
router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/create', createRouter)


router.post('/test', function (req, res) {
    res.json({requestBody: req.body});
});

router.get('/set-token-cookie', asyncHandler(async (req, res) => {
  const user = await User.findOne({
      where: {
        username: 'Demo-lition'
      },
    })
  setTokenCookie(res, user);
  return res.json({ user });
}));

module.exports = router;