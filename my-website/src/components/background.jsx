import styled from '@emotion/styled';
import {treeGif, sunsetGif, oceanGif, scene } from '../assets';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const StyledImage = styled.img`
    max-height:100vh;
    min-height:100vh;
    max-width: 100vw;
    min-width: 100vw;
`;
const BackgroundStyle = styled.div`
    z-index: -1;
    position: absolute;
    top: 4%; left: 0; bottom: 0;
`;
export const PageBackground = () => {
    return (
        <BackgroundStyle>
                 <Box>
        <Grid container  justifyContent="space-around" spacing={0}>
          <Grid item xs={12} sm={6}> 
          <StyledImage src={sunsetGif} alt="loading..." />
          </Grid>
          <Grid item xs={12} sm={6}> 
          <StyledImage src={sunsetGif} alt="loading..." />
          </Grid>
          <Grid item xs={12} sm={6}> 
          {/* <StyledImage src={scene} alt="loading..." /> */}
          {/* <StyledImage src={treeGif} alt="loading..." /> */}
          <StyledImage src={oceanGif} alt="loading..." />


          </Grid>
          <Grid item xs={12} sm={6}> 
          <StyledImage src={oceanGif} alt="loading..." />
          </Grid>
        </Grid>
      </Box>
        </BackgroundStyle>   
    )
}