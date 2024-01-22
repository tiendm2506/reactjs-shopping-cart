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
import { LinearProgress } from '@mui/material'

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
}

const useStyles = makeStyles((theme) => ({
    root: {},
    avatar: {
        margin: '10px auto 0',
    },
    title: {
        textAlign: 'center',
    },
    submit: {
        marginTop: '20px',
    },
}))

function LoginForm(props) {
    const classes = useStyles()
    const schema = yup
        .object({
            identifier: yup.string().required('Please enter your email').email('Your email is invalid'),
            password: yup.string().required('Please enter your password'),
        })
        .required()

    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        },
        resolver: yupResolver(schema),
    })

    const { isSubmitting } = form.formState

    const handleSubmit = async (values) => {
        const { onSubmit } = props
        if (onSubmit) {
            await onSubmit(values)
        }
    }

    return (
        <div>
            {isSubmitting && <LinearProgress />}
            <Avatar className={classes.avatar} sx={{ bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5' className={classes.title}>
                Login
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name='identifier' label='Email' form={form} />
                <PasswordField name='password' label='Password' form={form} />
                <Button type='submit' disabled={isSubmitting} variant='contained' fullWidth className={classes.submit}>
                    Login
                </Button>
            </form>
        </div>
    )
}

export default LoginForm
