import { SubmitHandler, useForm } from "react-hook-form"
import InputValidation from "../../../components/InputValidation"
import { Button } from "@mui/material"
import style from "./DataForm.module.css"
import { usePostAddData } from "../../../hooks/usePostAddData"
import { FC } from "react"
import { DataWithoutId } from "../../../types/TableData"

interface PropsAddDataForm {
  close: () => void
}

const AddDataForm: FC<PropsAddDataForm> = ({ close }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<DataWithoutId>()

  const { mutate } = usePostAddData()
  const onSubmit: SubmitHandler<DataWithoutId> = (data) => {
    mutate({
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
            key="documentName"
          />
        </div>
        <div className={style["DataForm__wrapperInput"]}>
          <InputValidation
            control={control}
            errors={errors}
            nameInput="documentType"
            message="Тип документа"
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
            key="documentStatus"
          />
        </div>
        <div className={style["DataForm__wrapperInput"]}>
          <InputValidation
            control={control}
            errors={errors}
            nameInput="companySigDate"
            message="Дата подписи компании"
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
            key="employeeNumber"
          />
        </div>
        <div className={style["DataForm__wrapperInput"]}>
          <InputValidation
            control={control}
            errors={errors}
            nameInput="employeeSigDate"
            message="Дата подписи сотрудника"
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
            key="companySignatureName"
          />
        </div>
        <div className={style["DataForm__wrapperInput"]}>
          <InputValidation
            control={control}
            errors={errors}
            nameInput="employeeSignatureName"
            message="Название файла подписи сотрудником"
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
export default AddDataForm
