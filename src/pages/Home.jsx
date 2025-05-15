"use client"

import styled from "styled-components"
import { useState } from "react"
import { FaBars, FaBell } from "react-icons/fa"
import cerebro from "../assets/cerebro.svg"

export function Home() {
  const [selectedMood, setSelectedMood] = useState(null)

  const moods = [
    { id: 1, name: "Emocionado", emoji: "😀" },
    { id: 2, name: "Alegre", emoji: "😄" },
    { id: 3, name: "Relajado", emoji: "☺️" },
    { id: 4, name: "Pensativo", emoji: "🤔" },
    { id: 5, name: "Preocupado", emoji: "😟" },
    { id: 6, name: "Triste", emoji: "😔" },
    { id: 7, name: "Aburrido", emoji: "😒" },
    { id: 8, name: "Enojado", emoji: "😠" },
  ]

  return (
    <HomeContainer>
      <Header>
        <MenuButton>
          <FaBars />
        </MenuButton>
        <NotificationButton>
          <FaBell />
        </NotificationButton>
      </Header>

      <WelcomeSection>
        <h1>BIENVENIDO MARIO ARMAS</h1>
        <p>¡Nos alegra acompañarte nuevamente!</p>
      </WelcomeSection>

      <MoodSection>
        <h2>¿Cómo te sientes hoy?</h2>
        <MoodGrid>
          {moods.map((mood) => (
            <MoodItem key={mood.id} selected={selectedMood === mood.id} onClick={() => setSelectedMood(mood.id)}>
              <MoodEmoji>{mood.emoji}</MoodEmoji>
              <MoodName>{mood.name}</MoodName>
            </MoodItem>
          ))}
        </MoodGrid>
      </MoodSection>

      <ContentGrid>
        <ContentCard>
          <CardTitle>FRASE DEL DÍA</CardTitle>
          <CardContent>
            <p>Solo un pequeño pensamiento positivo por la mañana puede cambiar todo tu día.</p>
          </CardContent>
        </ContentCard>

        <ContentCard>
          <CardTitle>¿No sabes por dónde empezar?</CardTitle>
          <CardContent>
            <p>Mira este video corto y descubre cómo aprovechar al máximo UNICARE.</p>
            <VideoPlaceholder>
              <img src={cerebro || "/placeholder.svg"} alt="Video thumbnail" />
            </VideoPlaceholder>
          </CardContent>
        </ContentCard>
      </ContentGrid>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  padding: 20px;
  margin-left: 100px;
  background-color: #AFD9F6;
  min-height: 100vh;
  color: #333;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #0A3D62;
`

const NotificationButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #0A3D62;
`

const WelcomeSection = styled.section`
  margin-bottom: 30px;
  
  h1 {
    font-size: 24px;
    color: #0A3D62;
    margin: 0;
  }
  
  p {
    font-size: 16px;
    color: #555;
    margin: 5px 0 0 0;
  }
`

const MoodSection = styled.section`
  margin-bottom: 30px;
  
  h2 {
    font-size: 18px;
    color: #0A3D62;
    margin-bottom: 15px;
  }
`

const MoodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
`

const MoodItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => (props.selected ? "#0A3D62" : "white")};
  color: ${(props) => (props.selected ? "white" : "#333")};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${(props) => (props.selected ? "#0A3D62" : "#e9f5ff")};
  }
`

const MoodEmoji = styled.div`
  font-size: 30px;
  margin-bottom: 5px;
`

const MoodName = styled.span`
  font-size: 12px;
  text-align: center;
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`

const ContentCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`

const CardTitle = styled.div`
  background-color: #0A3D62;
  color: white;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 600;
`

const CardContent = styled.div`
  padding: 15px;
  
  p {
    margin: 0 0 15px 0;
    font-size: 14px;
    color: #555;
  }
`

const VideoPlaceholder = styled.div`
  width: 100%;
  height: 120px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  
  img {
    width: 40px;
    height: 40px;
    opacity: 0.5;
  }
`
