import { SubmitHandler, useForm } from "react-hook-form"
import InputValidation from "../../../components/InputValidation"
import { Button } from "@mui/material"
import style from "./DataForm.module.css"

import { FC } from "react"
import { Data } from "../../../types/TableData"
import { usePostUpdateData } from "../../../hooks/usePostUpdateData"

interface PropsAddDataForm {
  close: () => void
  dataRow?: Data
}

const EditDataForm: FC<PropsAddDataForm> = ({ close, dataRow }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Data>()
  const { mutate } = usePostUpdateData()
  const onSubmit: SubmitHandler<Data> = (data) => {
    mutate({
      id: dataRow!.id,
      companySigDate: data.companySigDate,
      companySignatureName: data.companySignatureName,
      documentName: data.documentName,
      documentStatus: data.documentStatus,
      documentType: data.documentType,
      employeeNumber: data.employeeNumber,
      employeeSigDate: data.employeeSigDate,
      employeeSignatureName: data.employeeSignatureName,
    })
    close()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style["DataForm__container__flex"]}>
        <div className={style["DataForm__wrapperInput"]}>
          <InputValidation
            control={control}
            errors={errors}
            nameInput="documentName"
            message="Название документа"
            defaultValue={dataRow?.documentName}
            key="documentName"
          />
        </div>
        <div className={style["DataForm__wrapperInput"]}>
          <InputValidation
            control={control}
            errors={errors}
            nameInput="documentType"
            message="Тип документа"
            defaultValue={dataRow?.documentStatus}
            key="documentType"
          />
        </div>
      </div>
      <div className={style["DataForm__container__flex"]}>
        <div className={style["DataForm__wrapperInput"]}>
          <InputValidation
            control={control}
            errors={errors}
            nameInput="documentStatus"
            message="Статус"
            defaultValue={dataRow?.documentStatus}
            key="documentStatus"
          />
        </div>
        <div className={style["DataForm__wrapperInput"]}>
          <InputValidation
            control={control}
            errors={errors}
            nameInput="companySigDate"
            message="Дата подписи компании"
            defaultValue={dataRow?.companySigDate.slice(0, 10)}
            key="companySigDate"
          />
        </div>
      </div>
      <div className={style["DataForm__container__flex"]}>
        <div className={style["DataForm__wrapperInput"]}>
          <InputValidation
            control={control}
            errors={errors}
            nameInput="employeeNumber"
            message="Номер сотрудника"
            defaultValue={dataRow?.employeeNumber}
            key="employeeNumber"
          />
        </div>
        <div className={style["DataForm__wrapperInput"]}>
          <InputValidation
            control={control}
            errors={errors}
            nameInput="employeeSigDate"
            message="Дата подписи сотрудника"
            defaultValue={dataRow?.employeeSigDate.slice(0, 10)}
            key="employeeSigDate"
          />
        </div>
      </div>
      <div className={style["DataForm__container__flex"]}>
        <div className={style["DataForm__wrapperInput"]}>
          <InputValidation
            control={control}
            errors={errors}
            nameInput="companySignatureName"
            message="Название файла подписи компанией"
            defaultValue={dataRow?.companySignatureName}
            key="companySignatureName"
          />
        </div>
        <div className={style["DataForm__wrapperInput"]}>
          <InputValidation
            control={control}
            errors={errors}
            nameInput="employeeSignatureName"
            message="Название файла подписи сотрудником"
            defaultValue={dataRow?.employeeSignatureName}
            key="employeeSignatureName"
          />
        </div>
      </div>

      <div className={style["DataForm__containerButton"]}>
        <Button type="submit" variant="contained">
          Отправить
        </Button>
      </div>
    </form>
  )
}
export default EditDataForm
