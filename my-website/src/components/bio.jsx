import styled from '@emotion/styled';
import {treeGif, sunsetGif, oceanGif, scene } from '../assets';
const BioStyle = styled.div`
`;
const NameStyle = styled.div`
    font-size: 25px;
    margin-bottom:15px;
`;
const StyledImage = styled.img`
    max-height:400px;
    margin-right:10px;
`;
export const MyBio = () => {
    return (
        <BioStyle>
            <NameStyle>
                Hi, I'm Kurt. This is my website. 
            </NameStyle>
            <ul>
            <li>
                I build stuff. I am currently a software engineer at Asurion where I am working towards creating a better user experience.
            </li>
            <li>I spend way too much time listening to music. I also like to track my music stats. Currently, some of my favorite artists are Saba, Chris Patrick, and Unusual Demont. </li>  
            <li>I spend way too much time listening to music. I also like to tracfk my music stats. Currently, some of my favorite artists are Saba, Chris Patrick, Erykah Badu, and Unusual Demont. </li>  
            <li>My ideal time off work: seeing live music, spending time in the ocean (snorkeling, scuba diving), chilling with pugs</li>
            </ul>
            <StyledImage src={treeGif} alt="loading..." />
            <StyledImage src={sunsetGif} alt="loading..." />
            <StyledImage src={scene} alt="loading..." />
            <StyledImage src={oceanGif} alt="loading..." />

        </BioStyle>
        
    )
}

