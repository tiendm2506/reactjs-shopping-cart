import CodeIcon from '@mui/icons-material/Code'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import Register from 'features/Auth/components/Register'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        color: 'white',
    },
})

export default function Header() {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <Link to='/' className={classes.root}>
                        <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
                            <CodeIcon />
                        </IconButton>
                        MY SHOP
                    </Link>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        {/* News */}
                    </Typography>
                    <NavLink to='/todos' className={classes.root}>
                        <Button color='inherit'>TODOS</Button>
                    </NavLink>
                    <NavLink to='/albums' className={classes.root}>
                        <Button color='inherit'>ALBUMS</Button>
                    </NavLink>
                    <Button onClick={handleClickOpen} color='inherit'>
                        REGISTER
                    </Button>
                </Toolbar>
            </AppBar>
            <Dialog
                open={open}
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
                        handleClose()
                    }
                }}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
            >
                <DialogTitle id='alert-dialog-title'>{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <Register />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}
