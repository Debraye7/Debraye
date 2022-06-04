import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    height: 100%;
    width: 100%;
    opacity: ${props=>props.disp ? '1' : '0'};
`;
const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: .25rem solid #fff;
    border-radius: 50%;
    width: 9rem;
    height: 9rem;
    padding: 1.25rem;
    &:hover{
        background-color: #ff02;
    };
`;
const Logo = styled.img`
    object-fit: cover;
`;
const Line = styled.div`
    width: .25rem;
    height: 3.5rem;
    background-color: #fff;
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: .25rem solid #fff;
    border-radius: 1rem;
    width: 80vw;
    height: 18rem;
    padding: 2rem 0;
    &:hover{
        background-color: #ff02;
    };
`;
const Name = styled.h2`
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: .75rem;
    color: #fff;
`;
const Job = styled.h1`
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: .5rem;
    color: #ddd;
`;
const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    width: 50vw;
    border: .25rem solid #fff;
    border-radius: .5rem;
    @media screen and (min-width: 550px) {
        flex-direction: row;
        width: 75vw;
    };
`;
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    border-top: ${props=>props.left ? '.25rem solid #fff' : 'none'};
    border-bottom: ${props=>props.right ? '.25rem solid #fff' : 'none'};
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
        background-color: #ff02;
    };
    @media screen and (min-width: 550px) {
        border-top: none;
        border-bottom: none;
        border-right: ${props=>props.right ? '.25rem solid #fff' : 'none'};
        border-left: ${props=>props.left ? '.25rem solid #fff' : 'none'};
        height: 6rem;
    };
`;
const Text = styled.p`
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: .4rem;
    color: #fff;
`;

const Home = () => {
    const pathName = useLocation().pathname;
    const [inPath, setPath] = useState(true);
    useEffect(()=>{
        function getPath(){
            if(pathName === '/'){
                setPath(true);
            } else{
                setPath(false);
            };
        };
        getPath();
    },[pathName]);
    return (
        <Wrapper disp={inPath}>
            <Circle>
                <Logo src='./img/logo2.png'/>
            </Circle>
            <Line/>
            <Info>
                <Name>BRYAN FLORES</Name>
                <Job>Frontend Developer</Job>
            </Info>
            <Line/>
            <Nav>
                <Link to='/portafolio' style={{ flexGrow: '1' }}>
                    <Container right>
                        <Text>Portafolio</Text>
                    </Container>
                </Link>
                <Link to='/cv' style={{ flexGrow: '1' }}>
                    <Container>
                        <Text>Sobre mí</Text>
                    </Container>
                </Link>
                <Link to='/contacto' style={{ flexGrow: '1' }}>
                    <Container left>
                        <Text>Contacto</Text>
                    </Container>
                </Link>
            </Nav>
        </Wrapper>
    );
};

export default Home;