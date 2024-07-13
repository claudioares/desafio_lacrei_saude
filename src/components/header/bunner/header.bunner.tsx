import { ContainerBunner, DivButton } from "./styled";
import bunner from '../../../../public/bunner/fly01.jpg';
import { Button } from "@/components/button/button";


export function HeaderBunner () {
    const buttonsData = [
        {id:'patients', name:'Para pacientes', color:'#018762', link:'https://paciente.lacreisaude.com.br/'},
        { id:'professionals', name:'Para profissionais', color:'#018762', link:'https://profissional.lacreisaude.com.br/'},
        {id:'advanced_search', name:'Busca Avançada', color:'#018762', link:'/advancedsearch'}
    ]
    return(
        <ContainerBunner $fly={bunner.src}>
            <h1>
                 Olá, seja bem-vindo(a) <br />
                 à Lacrei Saúde!
            </h1>
            <p>
                Conectamos pessoas LGBTQIAPN+ <br />
                a profissionais de saúde capacitados.<br />
                Nossa missão é garantir que todos se sintam <br />
                acolhidos e respeitados. <br />
            </p>

            <DivButton>
                {buttonsData.map((data, index)=>(
                    <Button id={data.id} name={data.name} color={data.color} link={data.link} key={index}/>
                ))}
            </DivButton>
        </ContainerBunner>
    )
}