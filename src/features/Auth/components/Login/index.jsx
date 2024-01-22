import { unwrapResult } from '@reduxjs/toolkit'
import { login } from 'features/Auth/userSlice'
import { useDispatch } from 'react-redux'
import { enqueueSnackbar } from 'notistack'
import PropsTypes from 'prop-types'
import LoginForm from '../LoginForm'

Login.propTypes = {
    closeDialog: PropsTypes.func,
}
function Login(props) {
    const dispatch = useDispatch()
    const { closeDialog } = props
    const handleSubmit = async (values) => {
        try {
            // auto set username = email
            values.username = values.email
            const action = login(values)
            const resultAction = await dispatch(action)
            const user = unwrapResult(resultAction)
            console.log('user: ', user)
            if (closeDialog) {
                closeDialog()
            }
        } catch (error) {
            console.log('Fail to login: ', error)
            enqueueSnackbar(error.message, { variant: 'error' })
        }
    }
    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    )
}

export default Login
