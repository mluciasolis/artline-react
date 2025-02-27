import React from 'react';
import { Divider, styled, Chip, Avatar, Box, IconButton, Tooltip, Typography, Stack } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import CelebrationIcon from '@mui/icons-material/Celebration';
import GroupIcon from '@mui/icons-material/Group';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import MoodIcon from '@mui/icons-material/Mood';
import Logo from "../assets/logo2.png";
import '../css/footer.scss';
import Tema from '../helpers/Tema';

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

function Footer() {
    return (
        <Root>
            <ThemeProvider theme={Tema}>
                <Box mt={10}>
                    <Divider>
                        <Chip label="ARTLINE" color="primary" />
                    </Divider>
                    <Box textAlign="center" mt={2}>
                        <Tooltip title="Repositorio">
                            <IconButton aria-label="github" href="https://github.com/miuclara91/artline-react" target="_blank">
                                <GitHubIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Artline" >
                            <IconButton aria-label="artline" href="" target="_blank">
                                <img src={Logo} alt="artline" style={{ width: 25, height: 25 }} color="primary" />
                            </IconButton>
                        </Tooltip>
                    </Box>

                </Box>
                <Box>
                    <Divider textAlign="left"><span className="azul_iris">Valores & Principios</span></Divider>
                    <Box ml={6} mt={2} mr={6}>
                        Artline es una aplicación que <strong className="azul_iris">se interesa en sus usuarios</strong>  y <strong className="azul_iris">sus necesidades</strong>.

                        Esto lo reflejamos en la <strong className="azul_iris">seguridad</strong>: hacia nuestros usuarios menores de edad, protegiéndolos de posibles predadores y contenido inadecuado; y hacia nuestros usuarios mayores de edad brindándoles un espacio libre de juicios negativos.

                        <Typography variant="h5" component="h2" className="rojo_radical">
                            ¡Tú puedes ser quien tú quieras en Artline!
                        </Typography>

                        <Typography variant="h5" component="h1" textAlign="center" mb={3} fontStyle="bold"><strong>Artline es</strong></Typography>
                        <Stack
                            direction="row"
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={{ sm: 1, md: 5 }}
                            justifyContent="center"
                            mb={4}
                        >
                            <Typography color="primary"><CelebrationIcon fontSize="small" />Divertido</Typography>
                            <Typography color="primary"><MoodIcon fontSize="small" />Casual</Typography>
                            <Typography color="primary"><AllInclusiveIcon fontSize="small" />Flexible</Typography>
                            <Typography color="primary"><GroupIcon fontSize="small" />Amigable</Typography>
                            <Typography color="primary"><ConnectWithoutContactIcon fontSize="small" />Nurturing</Typography>
                        </Stack>
                        {/* <ul className="azul_iris">
                            <li>Divertido</li>
                            <li>Casual</li>
                            <li>Flexible</li>
                            <li>Amigable</li>
                            <li>Nurturing</li>
                        </ul> */}
                    </Box>
                </Box>
                <Divider>
                    <Chip label="Desarrollado por" />
                </Divider>
                <Box textAlign="center" mt={5} mb={5}>
                    <Chip
                        avatar={<Avatar alt="Steff" src="/static/images/avatar/1.jpg" />}
                        label="Estefanía Cervantes Lara"
                        variant="outlined"
                    />
                    <Chip
                        avatar={<Avatar alt="Magda" src="https://avatars.githubusercontent.com/u/35375880?v=4" />}
                        label="Magda Lucia Hernández Solis"
                        variant="outlined"
                    />
                    <Chip
                        avatar={<Avatar alt="Edgar" src="https://ca.slack-edge.com/T75T8EACX-U024983T8PJ-411473e31a91-512" />}
                        label="Edgar Hernández Luna"
                        variant="outlined"
                    />
                    <Chip
                        avatar={<Avatar alt="Luis" src="https://ca.slack-edge.com/T75T8EACX-U023KDX4B18-2109f830dd54-512" />}
                        label="Luis Manuel Tapia Bautista"
                        variant="outlined"
                    />
                </Box>
                <Divider textAlign="right">Copyright <strong>Equipo 6</strong> 2021</Divider>
            </ThemeProvider>
        </Root>
    );
}

export default Footer;