import React from 'react'
import PropTypes from 'prop-types'
import InputField from '../../../../components/form-controls/InputField'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
}

function RegisterForm(props) {
    const { onSubmit } = props
    const schema = yup
        .object({
            title: yup.string().required('Trường này không được để trống').min(5, 'Tối thiêu 5 ký tự'),
        })
        .required()

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        resolver: yupResolver(schema),
    })

    const handleSubmit = (values) => {
        onSubmit(values)
        console.log('Form: ', form)
        form.reset()
    }

    return (
        <div>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
                Sign up
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name='fullName' label='Full name' form={form} />
                <InputField name='email' label='Email' form={form} />
                <InputField name='password' label='Password' form={form} />
                <InputField name='confirmPassword' label='Confirm password' form={form} />
            </form>
        </div>
    )
}

export default RegisterForm
