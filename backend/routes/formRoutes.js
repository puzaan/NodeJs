import express from 'express'
import { addFormData, showFormById, showAllForm, DeleteForm } from '../controller/formController.js';
const router = express.Router();


router.post('/add', addFormData );
router.get('/showBy/:id', showFormById);
router.get('/show', showAllForm);
router.post('/delete/:id', DeleteForm)



export default router;