import CodeIcon from '@mui/icons-material/Code'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import {useDispatch} from 'react-redux'
import { makeStyles } from '@mui/styles'
import Register from 'features/Auth/components/Register'
import Login from 'features/Auth/components/Login'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'
import { useSelector } from 'react-redux'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { logOut } from 'features/Auth/userSlice'

const useStyles = makeStyles({
    root: {
        color: 'white',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
    },
})

const MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
}

export default function Header() {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [mode, setMode] = useState(MODE.LOGIN)
    const [anchorEl, setAnchorEl] = useState(null)
    const openMenu = Boolean(anchorEl)
    const user = useSelector((state) => state.user)
    const isLogged = !!user.current.id

    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleClickUser = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

    const handleLogout = () => {
        dispatch(logOut())
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
                    {isLogged && (
                        <Button color='inherit'>
                            <AccountCircleIcon onClick={handleClickUser} />
                        </Button>
                    )}
                    {!isLogged && (
                        <Button onClick={handleClickOpen} color='inherit'>
                            LOGIN
                        </Button>
                    )}
                    <Menu
                        id='basic-menu'
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleCloseMenu}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
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
                <CloseIcon className={classes.closeButton} onClick={handleClose} />
                <DialogContent>
                    {mode === MODE.LOGIN && (
                        <>
                            <Login closeDialog={handleClose} />
                            <Button onClick={() => setMode(MODE.REGISTER)} fullWidth>
                                Don't have an account. Register here
                            </Button>
                        </>
                    )}
                    {mode === MODE.REGISTER && (
                        <>
                            <Register closeDialog={handleClose} />
                            <Button onClick={() => setMode(MODE.LOGIN)} fullWidth>
                                Back to login
                            </Button>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </Box>
    )
}
