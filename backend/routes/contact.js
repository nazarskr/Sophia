const {Router} = require('express');
const controller = require('../controllers/contact')

const router = Router();

router.get('/', controller.getAll)

router.post('/', controller.sendContact)

module.exports = router;