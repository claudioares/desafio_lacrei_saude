import Image from "next/image";
import logo from "../../../public/logo.svg";
import { ContainerHeader, DivBotton, DivBottonMobile } from "./styled";
import { Button } from "../button/button";
import icon__help from "../../../public/icons/help.svg";
import icon__menu from "../../../public/icons/menu.svg";

export function Header () {
    const buttonsData = [
        {id:'who_we_are', name:'Quem somos', color:'', link:'https://lacreisaude.com.br/quem-somos/'},
        {id:'help' ,name:'Ajuda', color:'', link:'https://lacreisaude.com.br/ajuda/'},
        {id:'enter' ,name:'Entrar', color:'#018762', link:'https://lacreisaude.com.br/selecionar-pessoa/'},
    ]


    return (
        <>
            <ContainerHeader>
                <Image src={logo} alt="Logotipo da empresa Lacrou Saúde" width={203} />
                <DivBotton>
                    {buttonsData.map((data, index)=>(
                        <Button id={data.id} name={data.name} color={data.color} link={data.link} key={index}/>
                    ))}
                </DivBotton>
                <DivBottonMobile>
                    <Button id={'help'} name={""} color={""} icon={icon__help} link={"https://lacreisaude.com.br/ajuda/"} />  
                </DivBottonMobile>
            </ContainerHeader>
        </>
    )
}