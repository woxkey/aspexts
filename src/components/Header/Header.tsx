import * as React from 'react';
import {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Container, Drawer} from "@mui/material";
import {useNavigate} from "react-router-dom";
import IUser from "../../Interfaces/IUser.ts";

const Header: React.FC = (): React.ReactElement => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            const parsedUser: IUser = JSON.parse(user)
            setUser(parsedUser);
        }
    }, [])
    const navigate = useNavigate();
    return (
        <>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <Button onClick={() => setOpenDrawer(false)}>
                    close
                </Button>
            </Drawer>
            <Box>
                <AppBar position="static">
                    <Container>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{mr: 2}}
                                onClick={() => setOpenDrawer(true)}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                Личный кабинет
                            </Typography>
                            {user ?
                            <Typography variant="h6" component="div">{user.login}</Typography>
                                :
                            <Button onClick={() => navigate("/login")} color="inherit">Логин</Button>

                            }
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>

        </>)
}

export default Header