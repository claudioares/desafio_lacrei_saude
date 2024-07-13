import Image from "next/image";
import { ContainerFooter, ContainerIcons, ContentAll, SectionPrimary, SectionSecundary } from "./styled";
import { socialData } from "@/utils/social.data";
import logo2 from '../../../public/logo2.svg';
import { Line } from "../line/line";
import { Column } from "./column/column";
import Link from "next/link";

export function Footer () {
    return(
        <>
            <ContainerFooter>
                <Line />

                <ContentAll>
                    <SectionPrimary>
                        <Image src={logo2} alt="" height={48} id="footer__logo"/>
                        <ContainerIcons>
                            {socialData.map((data, index) => (<Link href={data.link} target="_blank"  key={index}><Image src={data.icon} width={27} height={27} alt="Icone de midia social"/></Link>))}
                        </ContainerIcons>
                    </SectionPrimary>
                    <SectionSecundary>
                        <Column title={"Lacrei Saúde"} arrTextLine={['Quem Somos','Nosso Propósito', 'Missão, Visão e Valor', 'Acessibilidade']} />
                        <Column title={"Saúde"} arrTextLine={['Buscar atendimento','Oferecer atendimento']} />
                        <Column title={"Segurança e Privacidade"} arrTextLine={['Política de Privacidade','Termos de Uso', 'Direitos de Titular']} />           
                    </SectionSecundary>
                </ContentAll>
              
                <Line />
            </ContainerFooter>
        </>
    )
}