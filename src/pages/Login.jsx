
import { AuthTemplate } from "../components/templates/AuthTemplate"
import { LoginForm } from "../components/organismos/LoginForm"
import { useNavigate } from "react-router-dom"

export function Login({ onLogin }) {
 const navigate = useNavigate();
 const handleSubmit = (formData) => {
  console.log("Datos de login:", formData)
  // Aquí iría la lógica de autenticación
  onLogin();

  navigate('/');//se usa para redireccionar
 }

 return (
  //Este onSubmit es un Prop personalizada que nosotros nombramos así por convención.
  <AuthTemplate>
   <LoginForm onSubmit={handleSubmit} />{/* Se pasa la función como prop */}
  </AuthTemplate>
 )
}

