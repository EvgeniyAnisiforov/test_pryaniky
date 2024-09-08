import { Button, Alert, CircularProgress } from "@mui/material"
import style from "./Authorization.module.css"
import { useForm, SubmitHandler } from "react-hook-form"
import InputValidation from "../../components/InputValidation"
import DataUserAuth from "../../types/DataUserAuth"
import { usePostUser } from "../../hooks/usePostUser"
import { FC, useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface PropsFormAuthorization {
  isAuthenticated: () => void
}

const FormAuthorization: FC<PropsFormAuthorization> = ({ isAuthenticated }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<DataUserAuth>()
  const navigate = useNavigate()
  const { mutate, isError, isLoading, apiError, isSuccess } = usePostUser()

  useEffect(() => {
    if (isSuccess) {
      isAuthenticated()
      navigate("/")
    }
  }, [isSuccess])

  const onSubmit: SubmitHandler<DataUserAuth> = (data) => {
    mutate({ username: data.username, password: data.password })
  }
  return (
    <>
      {isLoading && <CircularProgress style={{ marginTop: "30px" }} />}
      {isError && (
        <Alert
          style={{ width: "50%", margin: "20px auto 0" }}
          severity="warning"
          color="error"
        >
          {apiError?.message}
        </Alert>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={style["Authorization__wrapperInput"]}
      >
        <div className={style["Authorization__nameInput"]}>
          <InputValidation
            control={control}
            nameInput="username"
            message="Имя"
            errors={errors}
            key="username"
          />
        </div>
        <div className={style["Authorization__passwordInput"]}>
          <InputValidation
            control={control}
            nameInput="password"
            message="Пароль"
            errors={errors}
            key="password"
            typeInput="password"
          />
        </div>
        <div className={style["Authorization__wrapperButton"]}>
          <Button
            className={style["Authorization__button"]}
            type="submit"
            variant="contained"
          >
            Войти
          </Button>
        </div>
      </form>
    </>
  )
}
export default FormAuthorization
