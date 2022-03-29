import {Box, Button, Divider, Grid, Paper, TextField, Typography} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import {FacebookTwoTone} from "@mui/icons-material";


export default function SignUp() {
    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
                '& >:not(style)': {
                    width: 500,
                    height: 500,
                    borderColor: 'blueviolet',
                    p: 5,
                },
            }}
        >
            <Paper elevation={3}>
                <Typography variant='h4' mb={2}>Register</Typography>
                <Divider/>
                <TextField
                    id="name"
                    label="Name"
                    placeholder="Name"
                    variant="outlined"
                    fullWidth
                    size='small'
                    margin='normal'
                />
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
                <TextField
                    id="password"
                    label="Confirm Password"
                    variant="outlined"
                    fullWidth
                    placeholder="Confirm Password"
                    margin='normal'
                    size='small'
                />
                <Grid>
                    <Button sx={{mr:2,mt:2}} variant='contained'  fullWidth color={"success"}>Sign Up</Button>
                    {/*<Button variant='outlined' light color={"error"}>Cancel</Button>*/}
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