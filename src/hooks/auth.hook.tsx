import { PROFILE_PATH } from '@/config/path'
import { postLogin } from '@/services/auth.service'
import { useLoginStore } from '@/store/loginStore'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export const useAuthLogin = () => {
  const setUser = useLoginStore(state => state.setUser)
  const navigate = useNavigate()

  return useMutation({
    mutationKey: ['auth', 'login'],
    mutationFn: postLogin,
    onSuccess: res => {
      toast.success('Inicio de sesión exitoso')
      localStorage.setItem('token', res.token)
      setUser({
        id: res.id,
        email: res.email,
        name: res.name
      })
      navigate(PROFILE_PATH)
    },
    onError: () => {
      toast.error('Contraseña o correo incorrecto')
    }
  })
}
