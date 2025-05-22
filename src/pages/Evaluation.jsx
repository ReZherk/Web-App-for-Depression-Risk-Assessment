import styled from "styled-components"
import { FaBars, FaBell } from "react-icons/fa"

export function Evaluation() {
 return (
  <EvaluationContainer>
   <Header>
    <MenuButton>
     <FaBars />
    </MenuButton>
    <NotificationButton>
     <FaBell />
    </NotificationButton>
   </Header>

   <PageTitle>EVALUACIÓN</PageTitle>

   <ContentCard>
    <CardTitle>Evaluación de Bienestar</CardTitle>
    <CardContent>
     <p>Aquí encontrarás diferentes evaluaciones para medir tu bienestar emocional.</p>

     <EvaluationList>
      <EvaluationItem>
       <EvaluationTitle>Test de Ansiedad</EvaluationTitle>
       <EvaluationDescription>Evalúa tu nivel de ansiedad actual</EvaluationDescription>
       <StartButton>Iniciar Evaluación</StartButton>
      </EvaluationItem>

      <EvaluationItem>
       <EvaluationTitle>Test de Estrés</EvaluationTitle>
       <EvaluationDescription>Mide tu nivel de estrés académico</EvaluationDescription>
       <StartButton>Iniciar Evaluación</StartButton>
      </EvaluationItem>

      <EvaluationItem>
       <EvaluationTitle>Evaluación de Bienestar General</EvaluationTitle>
       <EvaluationDescription>Análisis completo de tu bienestar emocional</EvaluationDescription>
       <StartButton>Iniciar Evaluación</StartButton>
      </EvaluationItem>
     </EvaluationList>
    </CardContent>
   </ContentCard>
  </EvaluationContainer>
 )
}

const EvaluationContainer = styled.div`
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

const PageTitle = styled.h1`
  font-size: 24px;
  color: #0A3D62;
  margin-bottom: 30px;
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
  padding: 15px;
  font-size: 18px;
  font-weight: 600;
`

const CardContent = styled.div`
  padding: 20px;
  
  p {
    margin: 0 0 20px 0;
    font-size: 14px;
    color: #555;
  }
`

const EvaluationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const EvaluationItem = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px;
  transition: box-shadow 0.2s;
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`

const EvaluationTitle = styled.h3`
  font-size: 16px;
  color: #0A3D62;
  margin: 0 0 5px 0;
`

const EvaluationDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 15px 0;
`

const StartButton = styled.button`
  background-color: #0A3D62;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background-color: #0c4d7a;
  }
`
