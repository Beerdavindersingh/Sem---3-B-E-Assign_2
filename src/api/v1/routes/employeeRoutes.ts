import express, { Router  } from "express";
import * as employeeController from "../controllers/employeeController";
 
 
const router: Router = express.Router();
 
router.get("/", employeeController.getAllEmployees);
router.post("/", employeeController.createEmployee);
router.put("/:id", employeeController.updateEmployee);
router.delete("/:id", employeeController.deleteEmployee);
 
export default router;