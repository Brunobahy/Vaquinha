import React from "react";
import styles from "./Conversa.module.css";
import Resposta from "../Resposta";
import Cabecalho from "../Cabecalho";
import formatura from "./formatura.jpeg";
import pedido from "./pedido.jpeg";
import casa from "./casa.jpeg";
import { motion } from "framer-motion";

export default function Conversa() {
  return (
    <div>
      <Cabecalho />
      <motion.div
        className={styles.box}
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        }}
      >
        <Resposta
          tempo={2}
          texto={
            "Estamos aqui para te apresentar um sonho, mas antes gostaríamos de te contar nossa história"
          }
        />
        <Resposta
          tempo={4}
          texto={"Ou parte dela porque a Livian demorou para ficar comigo 😂😂"}
          pessoa="art"
        />
        <Resposta
          tempo={6}
          texto={
            " Vamos começar pelo simples fato de termos nos conhecido no IACS, e ele era meu colega (mais chato) e com certeza foi ali que eu vi que não me apaixonei à primeira vista. 😂😂"
          }
        />
        <Resposta
          tempo={12}
          foto={formatura}
          texto={
            "nesse dia eu disse para o fotógrafo que ela já era a minha namorada, mas ela não sabia."
          }
          pessoa="art"
        />
        <Resposta
          tempo={18}
          texto={
            "Felizmente, um ano e meio depois, em uma das nossas conversas, nós falamos o nosso primeiro “eu te amo”, mesmo não tendo a certeza de que iríamos entrar em um relacionamento."
          }
          pessoa="art"
        />
        <Resposta
          tempo={24}
          texto={
            "E quando o Arthur me disse que iria para Moçambique, eu disse a ele que iria estudar no Paraná e foi aí que começamos a pensar se iríamos ou não levar o relacionamento adiante"
          }
        />
        <Resposta
          tempo={30}
          pessoa="art"
          texto={
            "Uma semana antes de eu viajar para Moçambique, nós nos encontramos e como poderia ser a última vez que eu iria ver ela, eu a pedi em namoro e por incrível que pareça ela aceitou."
          }
        />
        <Resposta
          tempo={34}
          texto={
            " infelizmente a foto do pedido de namoro a gente vai ficar devendo, porque nem o Arthur sabia que iria me pedir em namoro naquele dia"
          }
        />

        <Resposta
          tempo={38}
          texto={
            "Quando nos despedimos, achávamos que iríamos nos ver novamente dali a 4 anos. Ele estando na África e eu na América do Sul. Na época, realmente parecia ser uma boa ideia."
          }
        />
        <Resposta
          tempo={44}
          pessoa="art"
          texto={
            "Mas com a chegada da Pandemia tive que retornar ao Brasil. Depois de 8 meses namorando com 5 horas de fuso horário, nós finalmente nos reencontramos, e quando completamos 1 ano de namoro, foi quando demos o nosso primeiro beijo"
          }
        />
        <Resposta tempo={48} texto={"uns fofos né?!"} />
        <Resposta
          tempo={49}
          texto={
            " No fim das contas, eu voltei para o RS, comecei a estudar Psicologia."
          }
        />
        <Resposta
          tempo={52}
          pessoa="art"
          texto={
            "E eu passei em um concurso público e estou estudando para ser internacionalista."
          }
        />
        <Resposta
          tempo={58}
          texto={
            "E depois de completarmos quase 4 anos de namoro, eu fui finalmente pedida em casamento e ele me deu duas opções de resposta: SIM ou "
          }
          textoVermelho={"SIM EM VERMELHO"}
        />
        <Resposta tempo={60} pessoa="art" foto={pedido} />
        <Resposta tempo={61} texto={"Já era a hora"} />
        <Resposta
          tempo={62}
          pessoa="art"
          texto={"Estamos planejando nos casar em Fevereiro"}
        />
        <Resposta tempo={64} texto={"Ou antes né, lindo?!"} />

        <Resposta
          tempo={66}
          texto={
            "Há cerca de um mês, conseguimos alugar uma casa para morar. O lugar é bem tranquilo de morar, entretanto os horários dos ônibus e a distância até o trabalho dele e a minha futura faculdade atrasam nosso casamento."
          }
          foto={casa}
        />
        <Resposta
          tempo={72}
          texto={
            "Nós estamos hoje diante de um sonho que compartilhamos e que gostaríamos muito de realizar: Adquirir o nosso próprio carro."
          }
        />
        <Resposta
          tempo={78}
          texto={
            " Precisamos de um carro principalmente para ela poder ir para faculdade à noite, já que aqui em Torres não tem transporte público nesse horário."
          }
          pessoa="art"
        />
        <Resposta
          tempo={84}
          texto={
            "Nós entendemos que a aquisição de um carro é um investimento necessário, e estamos dispostos a pesquisar e considerar opções de carros usados que se adequem ao orçamento arrecadado, numa faixa de R$10.000 a R$15.000."
          }
        />
        <Resposta
          tempo={90}
          texto={
            "Portanto, pedimos a vocês que considerem nos apoiar nessa jornada para conseguir um carro, independente do valor doado. Qualquer ajuda financeira será extremamente apreciada e se você puder compartilhar, também já estará nos ajudando muito"
          }
        />
        <Resposta
          tempo={94}
          texto={
            "Com o apoio de vocês, estamos dirigindo em direção ao nosso futuro juntos, e quem sabe, com um carro novo, finalmente conseguiremos dar uma 'carona' ao amor!"
          }
          pessoa="art"
        />
        <Resposta
          tempo={96}
          texto={
            "É sério mesmo que tu vai tentar convencer eles de nos ajudarem com isso?"
          }
        />
        <Resposta
          tempo={100}
          texto={
            "Agradecemos profundamente por seu apoio e por fazer parte deste momento especial em nossas vidas. Juntos, podemos tornar nosso sonho realidade. Estamos ansiosos para compartilhar essa conquista com vocês!"
          }
        />
      </motion.div>
    </div>
  );
}
