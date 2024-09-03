import express, { Router } from "express";
import CommentController from "../controllers/comment.controller";
import validateSchema from "../middlewares/validate.schema";
import authMiddleware from "../middlewares/auth";
import {
  createCommentSchema,
  updateCommentSchema,
} from "../schemas/comment.schema";

// Crear una instancia del enrutador
const router: Router = express.Router();

// Definir las rutas y sus controladores
router.post(
  "/",
  authMiddleware,
  validateSchema(createCommentSchema),
  CommentController.create
);

router.get("/", authMiddleware, CommentController.getAll);

router.put(
  "/:id",
  authMiddleware,
  validateSchema(updateCommentSchema),
  CommentController.update
);

router.delete("/:id", authMiddleware, CommentController.delete);

// Exportar el enrutador
export default router;
