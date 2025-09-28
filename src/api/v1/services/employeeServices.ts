import { Employees  } from "src/api/v1/models/employeeModel";
import { employee } from "src/data/employees";
 
 
/**
*  this will get all emplloyees from data
* @returns all employees
*/
export const getAllEmployees = async(): Promise<Employees[]> => {
    return structuredClone(employee);
};
 
 
