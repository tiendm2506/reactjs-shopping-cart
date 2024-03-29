import { unwrapResult } from '@reduxjs/toolkit'
import { register } from 'features/Auth/userSlice'
import { useDispatch } from 'react-redux'
import RegisterForm from '../RegisterForm'
import { enqueueSnackbar } from 'notistack'
import PropsTypes from 'prop-types'

Register.propTypes = {
    closeDialog: PropsTypes.func,
}
function Register(props) {
    const dispatch = useDispatch()
    const { closeDialog } = props
    const handleSubmit = async (values) => {
        try {
            // auto set username = email
            values.username = values.email
            const action = register(values)
            const resultAction = await dispatch(action)
            const user = unwrapResult(resultAction)
            console.log('user: ', user)
            if (closeDialog) {
                closeDialog()
            }
            enqueueSnackbar('Register Successfully !!!', { variant: 'success' })
        } catch (error) {
            console.log('Fail to register: ', error)
            enqueueSnackbar(error.message, { variant: 'error' })
        }
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    )
}

export default Register
