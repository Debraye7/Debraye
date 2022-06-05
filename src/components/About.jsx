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
    padding: 0 4rem;
    padding-bottom: 2rem;
`;
const Paragraph = styled.p`
    font-size: 1.9rem;
    color: #ddd;
    margin-bottom: 4rem;
`;
const Cv = styled.div`
    width: 100%;
`;
const Img = styled.img`
    object-fit: cover;
    width: 100%;
`;

const About = () => {
    const pathName = useLocation().pathname;
    const [inPath, setPath] = useState(true);
    useEffect(()=>{
        function getPath(){
            if(pathName === '/cv'){
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
                    <Title>SOBRE MÍ</Title>
                </TitleContainer>
                <Out>
                    <Link to='/'>
                        <Cross>x</Cross>
                    </Link>
                </Out>
            </Top>
            <Bottom>
                <Paragraph>
                    Estudiante de ingeniería en sistemas computacionales, especialista en desarrollo web.
                    <br/>
                    <br/>
                    Conocimientos en Html, Css, Javascript, React, Node.js, SQL, Mongodb y Bootstrap.
                </Paragraph>
                <Cv>
                    <Img src='./img/cv.png'/>
                </Cv>
            </Bottom>
        </Container>
    );
};

export default About;