export type PictureTextProps = {
    text: string,
    image: string,
    color?: "#707070" | "#1968DF",
    cursor?: "pointer" | "default",
    clickCallback?: () => void,
    fatAndDisabled?: boolean,
    fontWeight?: number,
}

export const PictureText = (props: PictureTextProps) => {
    const styles = {
        fill: props.color,
        color: props.color || "#707070",
        cursor: props.cursor || "pointer",
        fontWeight: 400,
    }

    if (props.fatAndDisabled) {
        styles.fontWeight = 600
        // props.clickCallback = undefined
    }

    return (
        <div className="picture-text" style={styles} onClick={props.clickCallback}>
            <img src={props.image} style={styles} />
            <span>{props.text}</span>
        </div>
    )
}