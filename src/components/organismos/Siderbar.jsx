import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"
import { FaHome, FaUser, FaClipboardList, FaChartLine } from "react-icons/fa"
import { Device } from "../../index"
import cerebro from "../../assets/cerebro.svg"
import profile from "../../assets/profile.svg";





export function Sidebar() {
  const location = useLocation()

  /*
  Ejemplo:
  *Podria estar en :https://example.com/profile?id=42
  
  *Dentro de location se guardaria lo siguiente:
     {
       "pathname": "/profile",
       "search": "?id=42",
       "hash": "",
       "state": null,
       "key": "abcd123"
     }
  */

  //resaltar el ítem activo:Este solo manda true o false
  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <SidebarContainer>
      <LogoContainer>
        <Logo src={cerebro} alt="UNICARE Logo" />
        <LogoText>UNICARE</LogoText>
      </LogoContainer>

      <UserInfo>
        <UserAvatar>
          <img
            src={profile}
            alt="Avatar"
          />
        </UserAvatar>
        <UserName>MARIO ARMAS</UserName>
      </UserInfo>

      <NavMenu>
        <NavItem active={isActive("/")}>
          <StyledLink to="/">
            <FaHome />
            <span>INICIO</span>
          </StyledLink>
        </NavItem>

        <NavItem active={isActive("/perfil")}>
          <StyledLink to="/perfil">
            <FaUser />
            <span>PERFIL</span>
          </StyledLink>
        </NavItem>

        <NavItem active={isActive("/evaluacion")}>
          <StyledLink to="/evaluacion">
            <FaClipboardList />
            <span>EVALUACIÓN</span>
          </StyledLink>
        </NavItem>

        <NavItem active={isActive("/resultados")}>
          <StyledLink to="/resultados">
            <FaChartLine />
            <span>RESULTADOS</span>
          </StyledLink>
        </NavItem>

        <NavItem active={isActive("/progreso")}>
          <StyledLink to="/progreso">
            <FaChartLine />
            <span>PROGRESO</span>
          </StyledLink>
        </NavItem>
      </NavMenu>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  width: 100px;
  height: 100vh;
  background-color: #0A3D62;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  
  @media ${Device.tablet} {
    max-width: 80%;
    margin: 0 auto;

  }
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`

const Logo = styled.img`
  width: 40px;
  height: 40px;
`

const LogoText = styled.h1`
  font-size: 14px;
  margin: 5px 0 0 0;
  color: white;
  text-align: center;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`

const UserAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 10px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const UserName = styled.span`
  font-size: 10px;
  color: white;
  text-align: center;
  font-weight: 600;
`

const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`

const NavItem = styled.li`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.active ? "#1E5F8C" : "transparent")};
  
  &:hover {
    background-color: #1E5F8C;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: white;
  
  svg {
    font-size: 20px;
    margin-bottom: 5px;
  }
  
  span {
    font-size: 10px;
    text-transform: uppercase;
  }
`
