import { ContainerColumn, ContentLinesColumn, HeaderColumn, LineColumn } from "./styled";


type PropsColumnType = {
    title: string;
    arrTextLine: string[];
}
export function Column ({title, arrTextLine}:PropsColumnType) {
    return(
        <>
            <ContainerColumn>
                <HeaderColumn>{title}</HeaderColumn>
                <ContentLinesColumn>
                    {arrTextLine.map((text, index)=>(
                        <LineColumn key={index}><a href="">{text}</a></LineColumn>
                    ))}
                </ContentLinesColumn>
            </ContainerColumn>
        </>
    )
}