import React from "react";
import styles from "./Conversa.module.css";
import Resposta from "../Resposta";
import Cabecalho from "../Cabecalho";
import formatura from "./formatura.jpeg";
import pedido from "./pedido.jpeg";
import casa from "./casa.jpeg";

export default function Conversa() {
  return (
    <div className={styles.box}>
      <Cabecalho />
      <Resposta
        texto={
          "Estamos aqui para te apresentar um sonho, mas antes gostaríamos de te contar nossa história"
        }
      />
      <Resposta
        texto={"Ou parte dela porque a Livian demorou para ficar comigo 😂😂"}
        pessoa="art"
      />
      <Resposta
        texto={
          " Vamos começar pelo simples fato de termos nos conhecido no IACS, e ele era meu colega (mais chato) e com certeza foi ali que eu vi que não me apaixonei à primeira vista. 😂😂"
        }
      />
      <Resposta
        foto={formatura}
        texto={
          "nesse dia eu disse para o fotógrafo que ela já era a minha namorada, mas ela não sabia."
        }
        pessoa="art"
      />
      <Resposta
        texto={
          "Felizmente, um ano e meio depois, em uma das nossas conversas, nós falamos o nosso primeiro “eu te amo”, mesmo não tendo a certeza de que iríamos entrar em um relacionamento."
        }
        pessoa="art"
      />
      <Resposta
        texto={
          "E quando o Arthur me disse que iria para Moçambique, eu disse a ele que iria estudar no Paraná e foi aí que começamos a pensar se iríamos ou não levar o relacionamento adiante"
        }
      />
      <Resposta
        pessoa="art"
        texto={
          "Uma semana antes de eu viajar para Moçambique, nós nos encontramos e como poderia ser a última vez que eu iria ver ela, eu a pedi em namoro e por incrível que pareça ela aceitou."
        }
      />
      <Resposta
        texto={
          " infelizmente a foto do pedido de namoro a gente vai ficar devendo, porque nem o Arthur sabia que iria me pedir em namoro naquele dia"
        }
      />

      <Resposta
        texto={
          "Quando nos despedimos, achávamos que iríamos nos ver novamente dali a 4 anos. Ele estando na África e eu na América do Sul. Na época, realmente parecia ser uma boa ideia."
        }
      />
      <Resposta
        pessoa="art"
        texto={
          "Mas com a chegada da Pandemia tive que retornar ao Brasil. Depois de 8 meses namorando com 5 horas de fuso horário, nós finalmente nos reencontramos, e quando completamos 1 ano de namoro, foi quando demos o nosso primeiro beijo"
        }
      />
      <Resposta texto={"uns fofos né?!"} />
      <Resposta
        texto={
          " No fim das contas, eu voltei para o RS, comecei a estudar Psicologia."
        }
      />
      <Resposta
        pessoa="art"
        texto={
          "E eu passei em um concurso público e estou estudando para ser internacionalista."
        }
      />
      <Resposta
        texto={
          "E depois de completarmos quase 4 anos de namoro, eu fui finalmente pedida em casamento e ele me deu duas opções de resposta: SIM ou "
        }
        textoVermelho={"SIM EM VERMELHO"}
      />
      <Resposta pessoa="art" foto={pedido} />
      <Resposta texto={"Já era a hora"} />
      <Resposta
        pessoa="art"
        texto={"Estamos planejando nos casar em Fevereiro"}
      />
      <Resposta texto={"Ou antes né, lindo?!"} />

      <Resposta
        texto={
          "Há cerca de um mês, conseguimos alugar uma casa para morar. O lugar é bem tranquilo de morar, entretanto os horários dos ônibus e a distância até o trabalho dele e a minha futura faculdade atrasam nosso casamento."
        }
        foto={casa}
      />
      <Resposta
        texto={
          "Nós estamos hoje diante de um sonho que compartilhamos e que gostaríamos muito de realizar: Adquirir o nosso próprio carro."
        }
      />
      <Resposta
        texto={
          " Precisamos de um carro principalmente para ela poder ir para faculdade à noite, já que aqui em Torres não tem transporte público nesse horário."
        }
        pessoa="art"
      />
      <Resposta
        texto={
          "Nós entendemos que a aquisição de um carro é um investimento necessário, e estamos dispostos a pesquisar e considerar opções de carros usados que se adequem ao orçamento arrecadado, numa faixa de R$10.000 a R$15.000."
        }
      />
      <Resposta
        texto={
          "Portanto, pedimos a vocês que considerem nos apoiar nessa jornada para conseguir um carro, independente do valor doado. Qualquer ajuda financeira será extremamente apreciada e se você puder compartilhar, também já estará nos ajudando muito"
        }
      />
      <Resposta
        texto={
          "Com o apoio de vocês, estamos dirigindo em direção ao nosso futuro juntos, e quem sabe, com um carro novo, finalmente conseguiremos dar uma 'carona' ao amor!"
        }
        pessoa="art"
      />
      <Resposta
        texto={
          "É sério mesmo que tu vai tentar convencer eles de nos ajudarem com isso?"
        }
      />
      <Resposta
        texto={
          "Agradecemos profundamente por seu apoio e por fazer parte deste momento especial em nossas vidas. Juntos, podemos tornar nosso sonho realidade. Estamos ansiosos para compartilhar essa conquista com vocês!"
        }
      />
    </div>
  );
}
