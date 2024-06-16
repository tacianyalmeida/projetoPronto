import ImgColaboradores from '../../Image/colaboradores.png'
import ImgControle from '../../Image/controle-de-limpeza.png'
import ImgPlanilha from '../../Image/planilha.png'
import ImgCadastro from '../../Image/cadastro.png'
import ImgQuadrado1 from '../../Image/spray-de-limpeza 2.png'
import ImgHomem from '../../Image/homem-limpando.png'
import { ContainerBranco, ContainerMensagem ,ContainerTexto,  H1Title, H2, ImgCard, ImgPrincipal, P, Section, SectionCard, H1Paragrafo, ContainerImg,Img, Img2, ContainerTexto2, ContainerApi, ParagrafoFinal } from "../Style/Home";
import Api from "./Api"

const Home = () => (
    <>

<Section>
            <ImgPrincipal src={ImgColaboradores}/>
        </Section>
        <ContainerTexto>
            <H1Title>Control-Clean</H1Title>
            <H2>SEJA BEM-VINDO COLABORADOR</H2>
        </ContainerTexto>
        <ContainerBranco>
        <ContainerImg>
        <Img src={ImgQuadrado1}/>
        </ContainerImg>
            < H1Paragrafo>A Importância da Limpeza Na Escola</ H1Paragrafo>
            <P>A higiene e limpeza na escola são aspectos
                    essenciais para criar um ambiente seguro e saudável para os estudantes.
                    A prevenção de doenças, o bem-estar dos alunos e o aprendizado eficiente
                    são beneficiados quando a comunidade escolar se envolve e trabalha em conjunto
                    para manter a higiene e a limpeza em dia. A conscientização sobre a importância
                    desses aspectos desde cedo é fundamental para formar alunos responsáveis e conscientes,
                    que carregarão esses valores para a vida adulta.</P>
        </ContainerBranco>
        <SectionCard>
            <ImgCard src={ImgControle}/>
            <ImgCard src={ImgPlanilha}/>
            <ImgCard src={ImgCadastro}/>
        </SectionCard>

        <ContainerMensagem >
            <Img2 src={ImgHomem}/>
        </ContainerMensagem >
        <ContainerTexto2 >
            <ParagrafoFinal>Obrigado por manter nosso ambiante institucional limpo e aconchegante, você faz a diferença na nossa empresa.</ParagrafoFinal>
        </ContainerTexto2 >

        <ContainerApi>
            <Api/>
        </ContainerApi>

    </>
)

export default Home;