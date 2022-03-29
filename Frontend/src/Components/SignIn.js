import {Box, Button, Divider, Grid, Paper, TextField, Typography} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import {FacebookTwoTone, GitHub, LinkedIn} from "@mui/icons-material";

export default function SignIn() {
    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
                '& >:not(style)': {
                    width: 500,
                    height: 400,
                    borderColor: 'blueviolet',
                    p: 5,
                },
            }}
        >
            <Paper elevation={3}>
                <Typography variant='h4' mb={2}>Sign In</Typography>
                <Divider/>
                <TextField
                    id="email"
                    label="Email"
                    margin='normal'
                    placeholder="Email"
                    variant="outlined"
                    fullWidth
                    size='small'

                />
                <TextField
                    id="password"
                    label="Password"
                    placeholder="Password"
                    variant="outlined"
                    fullWidth
                    margin='normal'
                    size='small'

                />
                <Grid>
                    <Button sx={{mr:2,mt:2}} fullWidth color={"success"} variant='contained'>Sign In</Button>
                    {/*<Button variant='outlined'  color={"error"}>Cancel</Button>*/}
                </Grid>
                <Divider sx={{mt:2}}/>
                <h5 align={"center"}>Or Sign In with</h5>
                <Grid sx = {{display:'flex',mt:2 }}>
                <Button sx={{flex:1,mr:4}}  variant={"contained"} color={"error"} startIcon={<GoogleIcon/>}>Google</Button>
                <Button sx={{flex:1}} variant={"contained"}  startIcon={<FacebookTwoTone/>}>Facebook</Button>
                </Grid>
            </Paper>
        </Box>
    );
}