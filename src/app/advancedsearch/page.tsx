'use client'
import { Header } from "@/components/header/header";
import { ContainerAdvancedSeach, DivForm, DivImage, DivSection, FormAdvancedSeach } from "./styled";
import { Line } from "@/components/line/line";
import { SectionDefault } from "@/components/section/section";
import Image from "next/image";
import imgSearch from '../../../public/bunner/img_search.jpg';
import { Button } from "@/components/button/button";
import { Footer } from "@/components/footer/footer";
import { FormEvent, useState } from "react";


export default function AdvancedSearch () {

    const [code, setCode] = useState<string>('');
    const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');
    const [selectedGender, setSelectedGender] = useState<string>('');
    const [selectedExpert, setSelectedExpert] = useState<string>('');


    function handleSubmit (e:FormEvent<HTMLFormElement>) {
        e.preventDefault();


        alert(`
            Aqui você encontraria uma implementação que, em uma versão completa, redirecionaria para os cards de profissionais que atendem ao perfil selecionado pelo usuário. Como esta é apenas uma página demonstrativa, a funcionalidade completa não foi implementada.
        `);
        setCode('')
        setSelectedSpecialty('')
        setSelectedGender('')
        setSelectedExpert('')
    }

  
    return(
        <>
            <Header />
            <ContainerAdvancedSeach>
                <SectionDefault>
                   <DivSection>
                        <h1>Encontre Profissionais de Saúde Inclusivos</h1>
                        <Line />
                        <p>
                            Utilize os filtros abaixo
                            para encontrar profissionais de saúde
                            que atendem às suas necessidades específicas.
                        </p>
                   </DivSection>

                    <FormAdvancedSeach onSubmit={handleSubmit}>
                        <DivForm>
                            <label htmlFor="specialty">Especialidade:</label>
                            <select 
                                id="specialty" 
                                name="specialty"
                                value={selectedSpecialty}
                                onChange={(e)=>setSelectedSpecialty(e.target.value)}
                            >
                                <option value="">Selecione uma Especialidade</option>
                                <option value="clinico_geral">Clínico Geral</option>
                                <option value="psicologia">Psicologia</option>
                                <option value="endocrinologia">Endocrinologia</option>
                                <option value="ginecologia">Ginecologia</option>
                                <option value="urologia">Urologia</option>
                                <option value="dermatologia">Dermatologia</option>
                            </select>
                        </DivForm>

                        <DivForm>
                            <label htmlFor="localizacao">Localização:</label>
                            <input 
                                type="text" 
                                id="localizacao" 
                                name="localizacao" 
                                placeholder="Cidade ou CEP"
                                value={code}
                                onChange={(e)=> setCode(e.target.value)}
                            />
                        </DivForm>

                        <label>Gênero do Profissional:</label>
                        <div id="div___professional__gender">
                            <input 
                                type="radio" 
                                name="genero" 
                                value="feminino"
                                checked={selectedGender === 'feminino'}
                                onChange={(e)=>setSelectedGender(e.target.value)} 
                            />
                            <label>Feminino</label>
                        </div>
                        <div id="div___professional__gender">
                            <input 
                                type="radio" 
                                name="genero" 
                                value="masculino"
                                checked={selectedGender === 'masculino'}
                                onChange={(e)=>setSelectedGender(e.target.value)}
                            />
                            <label>Masculino</label>
                        </div>
                        <div id="div___professional__gender">
                            <input 
                                type="radio" 
                                name="genero" 
                                value="nao_binario"
                                checked={selectedGender === 'nao_binario'}
                                onChange={(e)=>setSelectedGender(e.target.value)}
                            /> 
                            <label>Não-binário</label>
                        </div>
                        <div id="div___professional__gender">
                            <input 
                                type="radio"
                                name="genero" 
                                value="qualquer"
                                checked={selectedGender === 'qualquer'}
                                onChange={(e)=>setSelectedGender(e.target.value)}
                            /> 
                            <label>Qualquer</label>
                        </div>
                       

                        <label>Experiência com a Comunidade LGBTQIAPN+:</label>
                        <div id="div___professional__gender">
                            <input 
                                type="radio" 
                                name="experiencia_lgbtqiapn" 
                                value="yes"
                                checked={selectedExpert === 'yes'}
                                onChange={(e)=>setSelectedExpert(e.target.value)}
                            />
                            <label>Sim</label>
                        </div>
                        <div id="div___professional__gender">
                            <input 
                                type="radio" 
                                name="experiencia_lgbtqiapn" 
                                value="no" 
                                checked={selectedExpert === 'no'}
                                onChange={(e)=>setSelectedExpert(e.target.value)}
                            />
                            <label>Não</label>
                        </div>

                        <Button 
                            name={"Buscar"}
                            color={"#018762 "} 
                            link={""}
                            type="submit"
                            id="search"
                        />
                        <Button 
                            name={"Voltar"}
                            color={"#018762 "} 
                            link={"/"}
                            id="return"
                        />
                    </FormAdvancedSeach>
                </SectionDefault>

                <SectionDefault>
                    <DivImage>
                        <Image src={imgSearch} alt="Imagem de medicos pesquisadores trabalhando" width={500}/>
                    </DivImage>
                </SectionDefault>
            </ContainerAdvancedSeach>
            <Footer />
        </>
    )
}