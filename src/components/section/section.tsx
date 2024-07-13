import { ReactNode } from "react";
import { ContainerSection } from "./styled";


type PropsSectionDefaultType = {
    children: ReactNode,
}
export function SectionDefault ({children}:PropsSectionDefaultType) {
    return(
        <>
            <ContainerSection>
                {children}
            </ContainerSection>
        
        </>
    )
}