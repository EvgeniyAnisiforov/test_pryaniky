import { FC } from "react"
import { Controller } from "react-hook-form"
import { TextField } from "@mui/material"
import { PropsInputValidation } from "../types/PropsInputValidation"

const InputValidation: FC<PropsInputValidation> = ({
  nameInput,
  control,
  message,
  errors,
  typeInput,
  defaultValue,
}) => {
  return (
    <>
      <Controller
        name={nameInput}
        control={control}
        defaultValue={defaultValue || ""}
        rules={{
          required: `Поле ${message.toLowerCase()} не заполнено`,
        }}
        render={({ field }) =>
          typeInput === "password" ? (
            <TextField
              {...field}
              label={message}
              variant="standard"
              type="password"
              style={{ width: "75%" }}
            />
          ) : (
            <TextField
              {...field}
              label={message}
              variant="standard"
              style={{ width: "75%" }}
            />
          )
        }
      />
      {errors[nameInput] && typeof errors[nameInput].message === "string" && (
        <p
          style={{
            width: "75%",
            color: "red",
            margin: "7px auto",
            fontSize: "14px",
          }}
        >
          {errors[nameInput].message}
        </p>
      )}
    </>
  )
}
export default InputValidation
