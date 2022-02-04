import styled from '@emotion/styled';
import { MyBio, PageBackground, MenuBar } from '../components/index';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const StyledBody = styled.body`  
  background-color: #010714;
  color:#cdd9e9;
  padding: 0 10% 0 10%;
  padding-top: 50px;
  text-align: left;
  font-size: 22px;
  line-height 1.35;
  font-family: Gotham;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  margin: 0 0 0 0 !important;
  overflow-x: hidden;
  z-index: 1;
`;

export default function Home() {
  return (
    <StyledBody>
      <Box>
        <Grid container spacing={9} >
          <Grid item xs={12}> 
            <MenuBar />
          </Grid>
          <Grid item xs={6}> 
            <MyBio />
          </Grid>
          <Grid item xs={6}> 
            <PageBackground />
          </Grid>
        </Grid>
      </Box>
    </StyledBody>   
  )
}
