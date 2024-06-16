import React from 'react';
import { ContainerPrincipal, H1, Section1, Container, H2, Container2 } from "../Style/Planilha";
import Info from "./Info";


const Relatorio = ({ list }) => {
    return (
        <>
            
            <ContainerPrincipal>
                <H1>Relatório Semanal</H1>
            </ContainerPrincipal>

            <Section1>
                {Array.from({ length: 6 }, (_, index) => (
                    <Container key={index}>
                        <Container2>
                            <H2>DIA</H2>
                        </Container2>
                        {list[index] ? (
                            <Info 
                                nome={list[index].nome} 
                                sala={list[index].sala} 
                                hora={list[index].hora} 
                                data={list[index].data} 
                            />
                        ) : (
                            <p>Sem dados para este dia</p>
                        )}
                    </Container>
                ))}
            </Section1>
        </>
    );
};
export default Relatorio;