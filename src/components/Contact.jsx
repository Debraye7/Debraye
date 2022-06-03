import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    width: 90%;
    min-height: 10rem;
    margin: 2rem 0;
    border-radius: .5rem;
    transition: all .75s ease;
    transform: translateY(${props=>props.disp ? '0' : '100vh'});
`;
const Top = styled.div`
    display: flex;
    width: 100%;
    height: 12.5rem;
    padding-left: 2rem;
    position: relative;
`;
const TitleContainer = styled.div`
    flex-grow: 7;
    display: flex;
    align-items: center;
    padding-left: 1rem;
`;
const Title = styled.h3`
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing: .75rem;
    line-height: 2;
    color: #fff;
    border-bottom: .25rem solid #fff;
`;
const Out = styled.div`
    flex-grow: 3;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;
const Cross = styled.span`
    color: #fff;
    font-size: 3rem;
    font-weight: 300;
    position: absolute;
    top: 0;
    right: 3rem;
`;
const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 2rem;
`;
const Text = styled.p`
    font-size: 2rem;
    color: #ddd;
    margin-bottom: 2rem;
`;
const Links = styled.div`
    display: flex;
    margin-bottom: 2rem;
`;
const Circle = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: #ccc;
    margin-right: 2rem;
    &:hover{
        background-color: #666;
    };
`;

const Contact = () => {
    const pathName = useLocation().pathname;
    const [inPath, setPath] = useState(true);
    useEffect(()=>{
        function getPath(){
            if(pathName === '/contacto'){
                setPath(true);
            } else{
                setPath(false);
            };
        };
        getPath();
    },[pathName]);
    return (
        <Container disp={inPath}>
            <Top>
                <TitleContainer>
                    <Title>CONTACTO</Title>
                </TitleContainer>
                <Out>
                    <Link to='/'>
                        <Cross>x</Cross>
                    </Link>
                </Out>
            </Top>
            <Bottom>
                <Text>Bryan_Flores7@outlook.com</Text>
                <Text>5579101562</Text>
                <Links>
                    <Circle href='https://www.linkedin.com/in/bryan-flores7' target='_blank'>
                        <LinkedIn fontSize='large'/>
                    </Circle>
                    <Circle href='https://github.com/Debraye7' target='_blank'>
                        <GitHub fontSize='large'/>
                    </Circle>
                    <Circle href='https://www.instagram.com/_debraye' target='_blank'>
                        <Instagram fontSize='large'/>
                    </Circle>
                </Links>
            </Bottom>
        </Container>
    );
};

export default Contact;