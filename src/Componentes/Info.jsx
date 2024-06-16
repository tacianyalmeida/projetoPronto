import { ContainerInfo, P } from "../Style/Planilha";

const Info = ({nome, sala, hora, data })=>{
    return( 
    <ContainerInfo>
    <P> NOME: {nome}</P>
    <P> LOCAL:{sala} </P>
    <P> HORARIO: {hora}</P>
    <P> DATA:{data}  </P>
    </ContainerInfo>
    )
}
export default Info; 