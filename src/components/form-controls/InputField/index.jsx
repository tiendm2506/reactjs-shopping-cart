import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import { Controller } from 'react-hook-form'

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
}

function InputField(props) {
    const { name, form, label, disabled } = props
    const { formState } = form
    const hasError = formState.errors[name]
    return (
        <Controller
            name={name}
            control={form.control}
            disabled={disabled}
            render={({ field: { onChange, value } }) => (
                <TextField
                    value={value}
                    onChange={onChange}
                    label={label}
                    fullWidth
                    margin='normal'
                    error={!!hasError}
                    helperText={formState.errors[name]?.message}
                />
            )}
        />
    )
}

export default InputField
