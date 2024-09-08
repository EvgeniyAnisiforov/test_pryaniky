export interface Data {
  id: string
  companySigDate: string
  companySignatureName: string
  documentName: string
  documentStatus: string
  documentType: string
  employeeNumber: string
  employeeSigDate: string
  employeeSignatureName: string
}

export type DataWithoutId = Omit<Data, "id">
