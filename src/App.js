import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import About from './components/About';
import Briefcase from './components/Briefcase';
import Contact from './components/Contact';
import Home from './components/Home';

import './css/normalize.css';
import './css/responsive.css';

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background-color: #000;
`;
const Bg = styled.img`
  grid-column: 1/2;
  grid-row: 1/2;
  object-fit: cover;
  max-height: 100vh;
  max-width: 100vw;
  transition: all 0.5s ease;
  min-height: ${props=>props.path === '/' ? '110%' : '100%'};
  min-width: ${props=>props.path === '/' ? '110%' : '100%'};
  filter: blur(${props=>props.path === '/' ? '1px' : '2px'});
`;
const ShadowA = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background-color: #0008;
  padding: 2rem 0;
  z-index: 1000;
`;
const ShadowB = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  display: ${props=>props.path ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  z-index: 2000;
  overflow: hidden;
`;

function App() {
  const pathName = useLocation().pathname;
  return (
    <Main>
      <Bg src='./img/bg.jpg' path={pathName}/>
      <ShadowA>
        <Home/>
      </ShadowA>
      <ShadowB path={pathName === '/portafolio' ? true : false}>
        <Briefcase/>
      </ShadowB>
      <ShadowB path={pathName === '/cv' ? true : false}>
        <About/>
      </ShadowB>
      <ShadowB path={pathName === '/contacto' ? true : false}>
        <Contact/>
      </ShadowB>
    </Main>
  );
};

export default App;
