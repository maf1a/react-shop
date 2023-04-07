export type OnInputFieldInputCallback = (pl: InputFieldOnChangePayload) => void
export type OnKeyPressedCallback = (pl: OnKeyPressedCallbackPayload) => void

type InputFieldProps = {
    label: string,
    type: "text",
    className?: string,
    onInput: OnInputFieldInputCallback,
    value?: string,
    onKeyPressedCallback?: OnKeyPressedCallback,
}

export type InputFieldOnChangePayload = {
    value: string
}

export type OnKeyPressedCallbackPayload = {
    keyCode: string,
}

const onInput = (e: React.FormEvent<HTMLInputElement>, cb: OnInputFieldInputCallback) => {
    const target = e.target as HTMLInputElement
    const result: InputFieldOnChangePayload = {
        value: target.value,
    }

    return cb(result)
}

const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, cb: OnKeyPressedCallback = () => {}) => {
    const result: OnKeyPressedCallbackPayload = {
        keyCode: e.key,
    }

    return cb(result)
}

export const InputField = (props: InputFieldProps) => {
    return (<div className={`input-field ${props.className}`}>
        <p>{props.label}</p>
        <input 
            type={props.type} 
            onInput={e => onInput(e, props.onInput)} 
            value={props.value}
            onKeyDown={(e => onKeyDown(e, props.onKeyPressedCallback))}
        />
    </div>)
}
