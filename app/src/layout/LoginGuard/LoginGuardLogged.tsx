import { observer, useObserver } from "mobx-react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { stores } from "../../stores"
import { Header } from "../Header/Header"

export const LoginGuardLogged = observer(({ children }: {children: React.ReactElement}): React.ReactElement | null => {
    const storeUser = useObserver(() => stores.userStore)
    const navigate = useNavigate()
    const user = storeUser.user
  
    useEffect(() => { if (user === null) navigate('/') }, [user])
    if (user === null) return null
  
    return (
        <div>
            <Header />
            {children}
        </div>
    )
})