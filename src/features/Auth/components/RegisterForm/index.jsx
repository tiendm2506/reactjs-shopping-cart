import { yupResolver } from '@hookform/resolvers/yup'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import InputField from 'components/form-controls/InputField'
import PasswordField from 'components/form-controls/PasswordField'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
}

const useStyles = makeStyles((theme) => ({
    root: {},
    avatar: {
        margin: '0 auto',
    },
    title: {
        textAlign: 'center',
    },
    submit: {
        marginTop: '20px',
    },
}))

function RegisterForm(props) {
    const classes = useStyles()
    const { onSubmit } = props
    const schema = yup
        .object({
            fullName: yup
                .string()
                .required('Please enter your full name')
                .min(5, 'Please enter at lease 5 characters')
                .test('should have at lease 2 words', 'Please enter at lease 2 words', (value) => {
                    console.log(value)
                    return value.split(' ').length >= 2
                }),
            email: yup.string().required('Please enter your email').email('Your email is invalid'),
            password: yup.string().required('Please enter your password').min(6, 'Please enter at lease 5 characters'),
            confirmPassword: yup
                .string()
                .required('Please retype password')
                .min(6, 'Please enter at lease 5 characters')
                .oneOf([yup.ref('password')], 'Password does not match'),
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
        form.reset()
    }

    return (
        <div>
            <Avatar className={classes.avatar} sx={{ bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5' className={classes.title}>
                Sign Up
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name='fullName' label='Full name' form={form} />
                <InputField name='email' label='Email' form={form} />
                <PasswordField name='password' label='Password' form={form} />
                <PasswordField name='confirmPassword' label='Confirm password' form={form} />
                <Button type='submit' variant='contained' fullWidth className={classes.submit}>
                    Create an account
                </Button>
            </form>
        </div>
    )
}

export default RegisterForm
