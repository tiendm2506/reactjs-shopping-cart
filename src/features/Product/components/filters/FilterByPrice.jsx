import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Typography, Box, TextField, Button } from '@mui/material'

FilterByPrice.propTypes = {
    onchange: PropTypes.func,
}

function FilterByPrice({ onChange }) {
    const [values, setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    })
    const handleSubmit = () => {
        console.log(values)
        if (onChange) onChange(values)
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }))
    }
    return (
        <Box>
            <Typography variant='subtitle2'>Giá</Typography>
            <Box>
                <TextField
                    variant='standard'
                    name='salePrice_gte'
                    value={values.salePrice_gte}
                    onChange={handleChange}
                />
                <span> - </span>
                <TextField
                    variant='standard'
                    name='salePrice_lte'
                    value={values.salePrice_lte}
                    onChange={handleChange}
                />
            </Box>
            <Button variant='outlined' color='primary' onClick={handleSubmit}>
                Áp dụng
            </Button>
        </Box>
    )
}

export default FilterByPrice
