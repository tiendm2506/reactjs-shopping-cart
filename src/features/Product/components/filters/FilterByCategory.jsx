import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Typography, Box, createTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
// import { createTheme } from '@mui/material/styles'
import categoryApi from 'api/categoryApi'
import CategorySkeletonList from './CategorySkeletonList'

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
}
const theme = createTheme()
const useStyles = makeStyles(() => ({
    root: {
        padding: theme.spacing(2),
    },
    title: {
        textAlign: 'left',
    },
    menu: {
        padding: 0,
        margin: 0,
        listStyleType: 'none',
        '& > li': {
            marginTop: theme.spacing(1),
            textAlign: 'left',
            '&:hover': {
                cursor: 'pointer',
                color: theme.palette.info.main,
            },
        },
    },
}))

function FilterByCategory({ onChange }) {
    const [listCategory, setListCategory] = useState([])
    const [loading, setLoading] = useState(true)
    const classes = useStyles()
    useEffect(() => {
        ;(async () => {
            try {
                const response = await categoryApi.getAll()
                const newListCategory = []
                response.map((cate) => {
                    newListCategory.push({
                        name: cate.name,
                        id: cate.id,
                    })
                })
                setListCategory(newListCategory)
            } catch (error) {
                console.log('Failed to fetch category list: ', error)
            }
        })()
        setLoading(false)
    }, [])
    const handleClickCategory = (category) => {
        if (onChange) onChange(category.id)
    }
    return (
        <Box className={classes.root}>
            <Typography variant='subtitle2' className={classes.title}>
                Danh mục sản phẩm
            </Typography>
            {loading ? (
                <CategorySkeletonList />
            ) : (
                <ul className={classes.menu}>
                    {listCategory.map((cate) => (
                        <li key={cate.id} onClick={() => handleClickCategory(cate)}>
                            <Typography variant='body2'>{cate.name}</Typography>
                        </li>
                    ))}
                </ul>
            )}
        </Box>
    )
}

export default FilterByCategory
