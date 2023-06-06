import * as React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Container, Drawer} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Header: React.FC = (): React.ReactElement => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
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
                            <Button onClick={() => navigate("/login")} color="inherit">Логин</Button>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>

        </>)
}

export default Header