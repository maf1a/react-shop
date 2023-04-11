import { observer, useObserver } from "mobx-react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { stores } from "../stores"
import { Login } from "../pages/login/Login"

export const LoginGuardUnlogged = observer((): React.ReactElement | null => {
    const storeUser = useObserver(() => stores.userStore)
    const navigate = useNavigate()
    const user = storeUser.user
  
    useEffect(() => { if (user !== null) navigate('/shop') }, [user])
    if (user !== null) return null
    return <Login />
  })