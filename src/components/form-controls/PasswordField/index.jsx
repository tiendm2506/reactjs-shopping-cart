import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Controller } from 'react-hook-form'
import { FormHelperText } from '@mui/material'

PasswordField.propTypes = {
    name: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
}

function PasswordField(props) {
    const { name, form, label, disabled } = props
    const { formState } = form
    const hasError = !!formState.errors[name]
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }
    return (
        <FormControl variant='outlined' margin='normal' fullWidth error={hasError}>
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Controller
                name={name}
                control={form.control}
                disabled={disabled}
                error={!!hasError}
                render={({ field: { onChange, value } }) => (
                    <OutlinedInput
                        onChange={onChange}
                        value={value}
                        id={name}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge='end'
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label={label}
                    />
                )}
            />
            <FormHelperText>{formState.errors[name]?.message}</FormHelperText>
        </FormControl>
    )
}

export default PasswordField
