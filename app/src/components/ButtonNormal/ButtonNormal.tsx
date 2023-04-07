type ButtonNormalProps = {
    label: string,
    onClick: () => void,
}

export const ButtonNormal = (props: ButtonNormalProps) => {
    return <button className="button-normal" onClick={props.onClick}>{props.label}</button>
}