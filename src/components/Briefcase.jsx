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
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
`;
const OuterLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 27.5rem;
    margin-bottom: 4rem;
    @media screen and (min-width: 600px) {
        height: 15rem;
    };
`;
const Project = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr .5fr;
    border: .1rem solid #fff;
    width: 100%;
    height: 100%;
    &:hover > img {
        filter: blur(0px);
    };
    &:hover > div {
        opacity: 0;
    };
    @media screen and (min-width: 600px) {
        display: flex;
        align-items: center;
        border: none;
        border-bottom: .1rem solid #fff;
        &:hover > div {
            opacity: 1;
        };
    };
`;
const Img = styled.img`
    grid-column: 1/2;
    grid-row: 1/3;
    object-fit: cover;
    height: 100%;
    width: 100%;
    filter: blur(1px);
    @media screen and (min-width: 600px) {
        flex-grow: 1;
        object-fit: cover;
        width: 30%;
        filter: blur(0px);
    };
`;
const Info = styled.div`
    grid-column: 1/2;
    grid-row: 1/3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 1.5rem;
    background-color: #000c;
    opacity: 1;
    z-index: 4000;
    @media screen and (min-width: 600px) {
        height: 100%;
    };
`;
const Desc = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: .15rem;
    color: #fff;
    width: 100%;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    @media screen and (min-width: 600px) {
        font-size: 1.75rem;
        padding: 0 .2rem;
    };
`;
const List = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    height: 50%;
    @media screen and (min-width: 600px) {
        height: 60%;
    };
`;
const Item = styled.p`
    flex-grow: 1;
    text-align: center;
    font-size: 1.75rem;
    font-weight: 200;
    letter-spacing: .15em;
    color: #fff;
    padding: .5rem;
    @media screen and (min-width: 600px) {
        font-size: 1.25rem;
    };
`;

const Briefcase = () => {
    const pathName = useLocation().pathname;
    const [inPath, setPath] = useState(true);
    useEffect(()=>{
        function getPath(){
            if(pathName === '/portafolio'){
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
                    <Title>PORTAFOLIO</Title>
                </TitleContainer>
                <Out>
                    <Link to='/'>
                        <Cross>x</Cross>
                    </Link>
                </Out>
            </Top>
            <Bottom>
                <OuterLink href='https://fu7bol.herokuapp.com/' target='_blank'>
                    <Project>
                        <Img src='./img/p1.jpg'/>
                        <Info>
                            <Desc>Página web para liga de fútbol.</Desc>
                            <List>
                                <Item>* Handlebars</Item>
                                <Item>* Css</Item>
                                <Item>* JavaScript</Item>
                                <Item>* Nodejs</Item>
                                <Item>* Express</Item>
                                <Item>* SQL</Item>
                                <Item>* bcryptjs</Item>
                            </List>
                        </Info>
                    </Project>
                </OuterLink>
                <OuterLink href='https://m-a-t-b.web.app' target='_blank'>
                    <Project>
                        <Img src='./img/p2.jpg'/>
                        <Info>
                            <Desc>Página web para cátalogo de accesorios.</Desc>
                            <List>
                                <Item>* React</Item>
                                <Item>* Css</Item>
                                <Item>* JavaScript</Item>
                                <Item>* Redux</Item>
                                <Item>* Nodejs</Item>
                                <Item>* Express</Item>
                                <Item>* MongoDb</Item>
                            </List>
                        </Info>
                    </Project>
                </OuterLink>
            </Bottom>
        </Container>
    );
};

export default Briefcase;