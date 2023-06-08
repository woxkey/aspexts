import React from 'react';
import {Typography} from "@mui/material";
import './register-form.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Controller, SubmitHandler, useForm, useFormState} from "react-hook-form";
import {loginValidation, passwordValidation, phoneValidation} from "./validation.ts";
import {useNavigate} from "react-router-dom";

interface IRegisterForm {
    login: string;
    password: string;
    phone: string;
}

export const RegisterForm: React.FC = (): React.ReactElement => {
    const navigate = useNavigate();
    const {handleSubmit, control} = useForm<IRegisterForm>({
        defaultValues: {
            login: '', password: '', phone: ''
        }
    });

    const {errors} = useFormState({control});
    const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/login");
    }

    return (<div className='register-form'>
        <Typography variant="h4" component="div">
            Зарегистрироваться
        </Typography>
        <form className="register-form__form" onSubmit={handleSubmit(onSubmit)}>
            <Controller control={control} rules={loginValidation} name="login" render={({field}) => (<TextField
                    label="Логин"
                    size="small"
                    margin="normal"
                    className="register-form__input"
                    fullWidth
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                    error={!!errors.login?.message}
                    helperText={errors.login?.message}
                />)}/>
            <Controller control={control} rules={passwordValidation} name="password" render={({field}) => (<TextField
                    label="Пароль"
                    size="small"
                    margin="normal"
                    className="register-form__input"
                    fullWidth
                    type="password"
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                    error={!!errors.password?.message}
                    helperText={errors.password?.message}
                />)}/>
            <Controller control={control} rules={phoneValidation} name="phone" render={({field}) => (<TextField
                    label="Номер телефона"
                    size="small"
                    margin="normal"
                    className="register-form__input"
                    fullWidth
                    type="tel"
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                    error={!!errors.phone?.message}
                    helperText={errors.phone?.message}
                />)}/>


            <Button type="submit" variant="contained" fullWidth disableElevation sx={{
                marginTop: 2, marginBottom: 1
            }}>
                Создать аккаунт
            </Button>


        </form>
    </div>);
};

