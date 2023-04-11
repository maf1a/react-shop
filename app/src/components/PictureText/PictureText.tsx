export type PictureTextProps = {
    text: string,
    image: string,
    color?: "#707070" | "#1968DF",
    cursor?: "pointer" | "default",
    clickCallback?: () => void,
    fatAndDisabled?: boolean,
    fontWeight?: number,
    borderRadius?: "50%",
}

export const PictureText = (props: PictureTextProps) => {
    const styles = {
        fill: props.color,
        color: props.color || "#707070",
        cursor: props.cursor || "pointer",
        fontWeight: 400,
        borderRadius: props.borderRadius || "0"
    }

    let callback = props.clickCallback
    if (props.fatAndDisabled) {
        styles.fontWeight = 600
        styles.cursor = "default"
        callback = () => {}
    }

    return (
        <div className="picture-text" style={styles} onClick={callback}>
            <img src={props.image} style={styles} />
            <span>{props.text}</span>
        </div>
    )
}