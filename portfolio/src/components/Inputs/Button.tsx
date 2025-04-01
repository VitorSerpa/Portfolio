import  {FC} from "react";
import styles from "./Button.module.css"

type Props = { nameButton: string}

const Button: FC<Props> = (props) => {
    return(
        <div className={styles.button}>
            <button>{props.nameButton}</button>
        </div>
    )
}

export default Button