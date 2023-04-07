import { useState } from "react"
import { InputField } from "../../components/InputField/InputField"
import { ButtonNormal } from "../../components/ButtonNormal/ButtonNormal"
import { useNavigate } from "react-router-dom";

function hasMoreThanFiveLetters(input: string): boolean {
    return input.replace(/[^a-zA-Z]/g, '').length > 0
}

const handleUsernameOrEmail = (str: string): string => {
    return str.replace(/[^a-zA-Z0-9._@-]/g, '').slice(0, 40);
}

export const Login = () => {
    const [input, setInput] = useState("")
    const navigate = useNavigate()
    const redirectToShop = () => hasMoreThanFiveLetters(input) && navigate('/shop')

    return (
        <div className="login-container">
            <div className="login-component">
                <img className="logo" src="logo-big.svg" alt="" />
                <InputField 
                    label="Please enter your username to continue" 
                    type="text"
                    className="login-input-field"
                    onInput={r => setInput(handleUsernameOrEmail(r.value))} 
                    onKeyPressedCallback={r => r.keyCode === "Enter" && redirectToShop()} 
                    value={input}
                />
                <ButtonNormal 
                    label="Sign In"
                    onClick={redirectToShop}
                />
            </div>
        </div>
    )
}

