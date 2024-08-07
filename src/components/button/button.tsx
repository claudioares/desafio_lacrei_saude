import { ReactNode } from "react";
import { ButtonDefault, ButtonMobile } from "./styled";
import Image from "next/image";
import Link from "next/link";

type PropsButtonType = {
    id: string;
    name: ReactNode;
    color: string;
    icon?: any;
    link?: string;
    type?:  "button" | "submit" | "reset" | undefined;
    func?: any;
}

export function Button ({id, name, color, icon, link, type=undefined, func}:PropsButtonType) {
    return(
        <>
            {
                type ? 
                    <ButtonDefault color={color} type={type} id={id}>
                        {name}
                    </ButtonDefault>
                    : icon ?
                    <Link href={link ? link : ''} id={id}>
                        <ButtonMobile color={color} onClick={()=> func()}>
                            <Image src={icon} alt="Icone do botao" width={30} height={30}/>
                        </ButtonMobile>
                    </Link>
                    :
                    <Link href={link ? link : ''} id={id}>
                        <ButtonDefault color={color}>
                            {name}
                        </ButtonDefault>
                    </Link>
            }
        </>
    )
}