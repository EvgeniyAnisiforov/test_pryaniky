import { Data } from "../../types/TableData"

export function createData(
  id: string,
  companySigDate: string,
  companySignatureName: string,
  documentName: string,
  documentStatus: string,
  documentType: string,
  employeeNumber: string,
  employeeSigDate: string,
  employeeSignatureName: string
): Data {
  return {
    id,
    companySigDate,
    companySignatureName,
    documentName,
    documentStatus,
    documentType,
    employeeNumber,
    employeeSigDate,
    employeeSignatureName,
  }
}
