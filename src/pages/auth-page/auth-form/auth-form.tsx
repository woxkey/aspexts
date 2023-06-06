import React from 'react';
import {Typography} from "@mui/material";
import './auth-form.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Controller, SubmitHandler, useForm, useFormState} from "react-hook-form";
import {loginValidation, passwordValidation} from "./validation.ts";

interface ISignInForm {
    login: string;
    password: string;
}

export const AuthForm: React.FC = (): React.ReactElement => {
    const {handleSubmit, control} = useForm<ISignInForm>({
        defaultValues: {
            login: '',
            password: ''
        }
    });

    const {errors} = useFormState({control});
    const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);

    return (<div className='auth-form'>
        <Typography variant="h4" component="div">
            Войдите
        </Typography>
        <Typography variant="subtitle1" component="div" gutterBottom className="auth-form__subtitle">
            Чтобы получить доступ
        </Typography>
        <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
            <Controller control={control} rules={loginValidation} name="login" render={({field}) => (
                <TextField
                    label="Логин"
                    size="small"
                    margin="normal"
                    className="auth-form__input"
                    fullWidth
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                    error={!!errors.login?.message}
                    helperText={errors.login?.message}
                />
            )}/>
            <Controller control={control} rules={passwordValidation} name="password" render={({field}) => (
                <TextField
                    label="Пароль"
                    size="small"
                    margin="normal"
                    className="auth-form__input"
                    fullWidth
                    type="password"
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                    error={!!errors.password?.message}
                    helperText={errors.password?.message}
                />
            )}/>


            <Button type="submit" variant="contained" fullWidth disableElevation sx={{
                marginTop: 2
            }}>
                Войти
            </Button>
        </form>
    </div>);
};

