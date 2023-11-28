import express from "express";
import { getAllUsers, createUser, getUser, updateUser, deleteUser } from "../controllers/users";

const router = express.Router();

router.get('/', getAllUsers)
router.post('/create', createUser)
router.get('/user/:name', getUser)
router.patch('/user/:name', updateUser)
router.delete('/user/:name', deleteUser)


export default router;