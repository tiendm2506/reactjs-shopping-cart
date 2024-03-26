import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Typography, Box } from '@mui/material'
import categoryApi from 'api/categoryApi'

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
}

function FilterByCategory({ onChange }) {
    const [listCategory, setListCategory] = useState([])
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
    }, [])
    const handleClickCategory = (category) => {
        if (onChange) onChange(category.id)
    }
    return (
        <div>
            <Typography variant='h5' color='initial'>
                Danh mục sản phẩm
                <ul>
                    {listCategory.map((cate) => (
                        <li
                            key={cate.id}
                            style={{ cursor: 'pointer', listStyle: 'none', textAlign: 'left', fontSize: '16px' }}
                            onClick={() => handleClickCategory(cate)}
                        >
                            {cate.name}
                        </li>
                    ))}
                </ul>
            </Typography>
        </div>
    )
}

export default FilterByCategory
