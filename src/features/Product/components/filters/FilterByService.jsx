import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Box, createTheme, FormControlLabel, Checkbox } from '@mui/material'
import { makeStyles } from '@mui/styles'

FilterByService.propTypes = {
    onchange: PropTypes.func,
    filters: PropTypes.object,
}
const listServices = [
    { value: 'isPromotion', label: 'Có khuyến mãi' },
    { value: 'isFreeShip', label: 'Vận chuyển miễn phí' },
]
const theme = createTheme()
const useStyles = makeStyles(() => ({
    root: {
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[300]}`,
        textAlign: 'left',
    },
    list: {
        padding: 0,
        margin: 0,
        listStyleType: 'none',
        '& > li': {
            margin: 0,
            marginTop: theme.spacing(1),
        },
    },
}))

function FilterByService({ filters = {}, onChange }) {
    const classes = useStyles()
    const handleChange = (e) => {
        if (!onChange) return
        const { name, checked } = e.target
        onChange({ [name]: checked })
    }
    return (
        <Box className={classes.root}>
            <Typography variant='subtitle2'>Chọn dịch vụ</Typography>
            <ul className={classes.list}>
                {listServices.map((service, index) => (
                    <li key={index}>
                        <FormControlLabel
                            control={<Checkbox name={service.value} checked={Boolean(filters[service.value])} />}
                            onChange={handleChange}
                            label={service.label}
                        />
                    </li>
                ))}
            </ul>
        </Box>
    )
}

export default FilterByService
