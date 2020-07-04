const {Router} = require('express');
const controller = require('../controllers/videos')

const router = Router();

router.get('/', controller.getAll)

router.post('/', controller.addVideo)

module.exports = router;