const express = require('express');
const router = express.Router();
const courseController = require('../app/Controlllers/CourseController');

router.get('/create', courseController.create);
router.post('/stored', courseController.stored);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.destroy);
router.delete('/:id/force', courseController.destroyForce);
router.get('/:id', courseController.show);

module.exports = router;
