import styled from '@emotion/styled';
import { MyBio } from '../components/index';

const StyledBody = styled.body`  
  background-color: #010714;
  color:#cdd9e9;
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 100px;
  text-align: left;
  font-size: 16px;
  line-height 1.35;
  font-family: Gotham,Helvetica Neue,Helvetica,Arial,sans-serif;
  height: 100%;
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
`;

export default function Home() {
  return (
    <StyledBody>
        <MyBio />
    </StyledBody>   
  )
}
