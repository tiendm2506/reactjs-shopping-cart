import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Typography, Box, TextField, Button, createTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'

FilterByPrice.propTypes = {
    onchange: PropTypes.func,
}

const theme = createTheme()
const useStyles = makeStyles(() => ({
    root: {
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[300]}`,
        textAlign: 'left',
    },
    range: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        '& > span': {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
    },
}))

function FilterByPrice({ onChange }) {
    const classes = useStyles()
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
        <Box className={classes.root}>
            <Typography variant='subtitle2'>Chọn khoảng giá</Typography>
            <Box className={classes.range}>
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
            <Button variant='outlined' color='primary' size='small' onClick={handleSubmit}>
                Áp dụng
            </Button>
        </Box>
    )
}

export default FilterByPrice
