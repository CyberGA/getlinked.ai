import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
interface Props extends ButtonProps { text: string; sx?: string };

export default function Button({text, sx = "", ...props} : Props) {
    return (
        <button className={`h-[53px] w-[172px] text-white font-montserrat rounded bg-c-button-gradient ${sx}`}
         {...props}>
            {text}
        </button>
    )
}