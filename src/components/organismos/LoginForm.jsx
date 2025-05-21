import styled from "styled-components"
import { useState } from "react"
import { Link } from "react-router-dom"
import { FormGroup } from "../moleculas/FormGroup"
import { Input } from "../atomos/Input"
import { Button } from "../atomos/Button"
import { Text } from "../atomos/Typography"
import { Icon } from "../atomos/Icon"

export const LoginForm = ({ onSubmit, className }) => {
 const [showPassword, setShowPassword] = useState(false)
 const [formData, setFormData] = useState({
  documento: "",
  password: "",
 })

 const handleChange = (e) => {
  const { name, value } = e.target
  setFormData({
   ...formData,
   [name]: value,
  })
 }

 const handleSubmit = (e) => {
  e.preventDefault()
  if (onSubmit) {
   onSubmit(formData)
  }
 }

 return (
  <StyledForm onSubmit={handleSubmit} className={className}>
   <FormGroup>
    <Input
     type="text"
     placeholder="Documento de identidad"
     name="documento"
     value={formData.documento}
     onChange={handleChange}
     icon={<Icon name="user" size="small" />}
     required
    />
   </FormGroup>

   <FormGroup>
    <Input
     type={showPassword ? "text" : "password"}
     placeholder="Contraseña"
     name="password"
     value={formData.password}
     onChange={handleChange}
     icon={<Icon name="clipboard" size="small" />}
     rightIcon={
      <PasswordToggle onClick={() => setShowPassword(!showPassword)}>
       <Icon name={showPassword ? "eye-slash" : "eye"} size="small" />
      </PasswordToggle>
     }
     required
    />
   </FormGroup>

   <LoginButton type="submit">INGRESAR</LoginButton>

   <ForgotPassword to="/recuperar">¿Olvidaste tu contraseña?</ForgotPassword>

   <NoAccountText>¿Aún no tienes una cuenta?</NoAccountText>
   <RegisterLink to="/registro">REGÍSTRATE</RegisterLink>
  </StyledForm>
 )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const PasswordToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`

const LoginButton = styled(Button)`
  margin-top: 10px;
`

const ForgotPassword = styled(Link)`
  text-align: center;
  color: #0A3D62;
  font-size: 12px;
  margin-top: 15px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

const NoAccountText = styled(Text)`
  text-align: center;
  color: #666;
  font-size: 12px;
  margin-top: 20px;
  margin-bottom: 5px;
`

const RegisterLink = styled(Link)`
  text-align: center;
  color: #0A3D62;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`
