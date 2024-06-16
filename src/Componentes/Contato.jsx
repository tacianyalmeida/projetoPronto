import { BodyContainer, Column, HeaderContainer, HeaderContainer1, Icon, SubText, SubText1, SubText11, Texto, Title1, Titulo } from "../Style/Contato"
import ImgEmail from '../../Image/email.png'
import ImgTelfone from '../../Image/telefone.png'



const Contato = () => {
    return(
        <>
        <HeaderContainer1>
        <Title1>Como você prefere falar conosco?</Title1>
        </HeaderContainer1>
            <BodyContainer>
            <HeaderContainer>
              <Column>
                <Icon src={ImgEmail}></Icon>
                <SubText1>E-mail</SubText1>
                <SubText11>Tem alguma dúvida?</SubText11>
                <Texto>meajudacontrolclean@gmail.com</Texto>
              </Column>
              <Column>
                <Icon src={ImgTelfone}></Icon>
                <Titulo>Telefone</Titulo>
                <SubText>Você pode ligar para nós.</SubText>
                <SubText>0500  402 2939</SubText>
              </Column>
            </HeaderContainer>
            </BodyContainer>
            </>
    )
}

export default Contato;