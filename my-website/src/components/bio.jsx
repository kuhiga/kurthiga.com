import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';

const BioStyle = styled.div`
    padding-top: 50px;
    width: 80vw;
    
`;
const NameStyle = styled.div`
    font-size: 45px;
    margin-bottom:15px;
`;
const StyledLI = styled.li`
    margin-bottom:35px;
    list-style-type: none;
`;
const StyledUL = styled.ul`
    padding-left: 0px;
`;

export const MyBio = () => {
    return (
        <BioStyle>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                spacing={10}
            >
                <Grid item xs={12} sm={6} med={6}>
            <NameStyle>
                Hi, I'm Kurt. This is my website. 
            </NameStyle>
            </Grid>
            <Grid item xs={12} sm={6}  med={6}>

            <StyledUL>
            <StyledLI>
                I build stuff. I am currently a software engineer at Asurion where I am working towards creating a better user experience.
            </StyledLI>
            <StyledLI>I spend way too much time listening to music. I also like to track my music stats. Currently, some of my favorite artists are Saba, Chris Patrick, and Unusual Demont. </StyledLI>  
            <StyledLI>My ideal time off work: seeing live music, spending time in the ocean (snorkeling, scuba diving), chilling with pugs</StyledLI>
            </StyledUL>
            </ Grid>

            </Grid>
        </BioStyle>        
    )
}

