import styled from 'styled-components';
import { GlobalStyles } from './index';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './index';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Login } from './pages/Login';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)

  }
  // Cambia a false para probar las rutas
  return (
    <AppContainer>
      <GlobalStyles />
      <BrowserRouter>
        {isAuthenticated && <Sidebar />}

        <Routes>

          {/* 
<Route path="/welcome" element={<Welcome />} /> 

*/}

          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/perfil" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />


          {/* Ruta por defecto */}
          <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  )
}

const AppContainer = styled.main``

export default App
