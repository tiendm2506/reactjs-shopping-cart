import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from './counterSlice'

import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button'

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 35,
        padding: '0 30px',
    },
})

CounterFeature.propTypes = {}

function CounterFeature(props) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const count = useSelector((state) => state.count)
    const handleIncreaseClick = () => {
        console.log('handleIncreaseClick')
        dispatch(increase())
    }
    const handleDecreaseClick = () => {
        console.log('handleDecreaseClick')
        dispatch(decrease())
    }
    return (
        <div>
            <h1>Counter: {count}</h1>
            <Button className={classes.root} onClick={handleIncreaseClick}>
                Increase
            </Button>
            <Button className={classes.root} onClick={handleDecreaseClick}>
                Decrease
            </Button>
        </div>
    )
}

export default CounterFeature
