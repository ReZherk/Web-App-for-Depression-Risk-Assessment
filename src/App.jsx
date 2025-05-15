import styled from 'styled-components';
import { GlobalStyles } from './index';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './index';
import { Home } from './pages/Home';
import{Profile} from './pages/Profile';

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <BrowserRouter>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Profile />} />
          

          {/* Ruta por defecto */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  )
}

const AppContainer = styled.main``

export default App
