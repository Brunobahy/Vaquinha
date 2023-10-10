import React from "react";
import styles from "./Conversa.module.css";
import Resposta from "../Resposta";
import Cabecalho from "../Cabecalho";
import formatura from "./formatura.jpeg";
import pedido from "./pedido.jpeg";
import casa from "./casa.jpeg";
import { motion } from "framer-motion";
// import lista from "./conversa.json";
import pix from "./pix.jpeg";
import Figurinha from "../Figurinha";

export default function Conversa() {
  let horas = new Date().getUTCHours();
  let minutos = new Date().getUTCMinutes();
  let horario = `${horas}:${minutos > 10 ? minutos : `0${minutos}`}`;
  console.log(horario);

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
        {/* {lista.map((item) => (
          <Resposta
          horario={horario}
            tempo={2}
            texto={item.texto}
            pessoa={item.pessoa}
            cor={item.cor}
          />
        ))} */}
        <Resposta
          horario={horario}
          tempo={2}
          texto={
            "Oii, se você esta lendo nossas mensagens, provavelmente você já nos conhece e estamos aqui pra te apresentar um sonho, mas antes gostaríamos de te contar nossa história... ❤️"
          }
        />
        <Resposta
          horario={horario}
          tempo={4}
          texto={"Ou parte dela porque a Livian demorou pra ficar comigo 😢"}
          pessoa="art"
        />
        <Resposta
          horario={horario}
          tempo={6}
          texto={
            "Vamos começar pelo fato de termos nos conhecido no IACS, e ele era o meu colega (mais chato) e com certeza foi ali que eu vi que eu não me apaixonei a primeira vista 😅"
          }
        />
        <Figurinha horario={horario} figurinha={"liv"} tempo={6.5} />
        <Resposta
          horario={horario}
          tempo={12}
          foto={formatura}
          texto={
            "Nesse dia eu disse para o fotógrafo que ela era minha namorada, mas ela não sabia 😁"
          }
          pessoa="art"
        />
        <Figurinha horario={horario} figurinha={"art"} tempo={12.5} />

        <Resposta
          horario={horario}
          tempo={18}
          texto={
            "Felizmente um ano e meio depois, em uma das nossas conversas, nós falamos o nosso primeiro " +
            '"eu te amo"' +
            ", mesmo não tendo certeza de que iríamos entrar em um relacionamento"
          }
          pessoa="art"
        />
        <Resposta
          horario={horario}
          tempo={24}
          texto={
            "E quando o Arthur me disse que iria pra $&%Moçambique%$&, eu disse a ele que iria estudar no $&%Paraná%$& e foi aí que começamos a pensar se iríamos ou não levar o relacionamento a diante"
          }
        />
        <Resposta
          horario={horario}
          tempo={30}
          pessoa="art"
          texto={
            "Uma semana antes de eu viajar para Moçambique, nós nos encontramos e como poderia ser a última vez que eu iria ver ela, eu a pedi em namoro e por incrível que pareça, ela aceitou 🤷🏽‍♂️😍"
          }
        />
        <Resposta
          horario={horario}
          tempo={34}
          texto={
            "Infelizmente a foto do pedido de namoro a gente vai ficar devendo, porque nem o Arthur sabia que iria me pedir em namoro naquele dia 😅"
          }
        />

        <Resposta
          horario={horario}
          tempo={38}
          texto={
            "Quando nos despedimos, achávamos que iríamos nos ver novamente dali a 4 anos. Ele estando na $&%África%$& e eu na $&%América do Sul%$& ✈️"
          }
        />
        <Resposta
          horario={horario}
          tempo={39}
          texto="Na época realmente parecia ser uma boa ideia 😅"
        />
        <Resposta
          horario={horario}
          tempo={44}
          pessoa="art"
          texto={
            "Mas com a chegada da Pandemia tive que retornar ao Brasil. Depois de 8 meses namorando com 5 horas de fuso horário, nós finalmente nos reencontramos, e quando completamos 1 ano de namoro, foi quando demos o nosso primeiro beijo 😅"
          }
        />
        <Resposta horario={horario} tempo={48} texto={"uns fofos né?! 🤭🥰"} />
        <Resposta
          horario={horario}
          tempo={49}
          texto={
            " No fim das contas, eu voltei para o RS, comecei a estudar Psicologia."
          }
        />
        <Resposta
          horario={horario}
          tempo={52}
          pessoa="art"
          texto={
            "E eu passei em um concurso público e estou estudando para ser internacionalista."
          }
        />
        <Resposta
          horario={horario}
          tempo={58}
          texto={
            "E depois de completarmos quase $&%4 anos%$& de namoro, eu fui finalmente pedida em casamento e ele me deu duas opções de resposta: SIM ou $&%SIM EM VERMELHO%$&"
          }
          cor="red"
        />
        <Resposta horario={horario} tempo={60} pessoa="art" foto={pedido} />
        <Resposta horario={horario} tempo={61} texto={"Já era a hora"} />
        <Figurinha horario={horario} figurinha={"liv"} tempo={61.5} />
        <Resposta
          horario={horario}
          tempo={62}
          pessoa="art"
          texto={"Estamos planejando nos casar em JANEIRO/2024 📆"}
        />
        <Resposta horario={horario} tempo={64} texto={"Ou antes né, lindo?!"} />

        <Resposta
          horario={horario}
          tempo={66}
          texto={
            "Há cerca de um mês, conseguimos alugar uma casa para morar. O lugar é bem tranquilo de morar, entretanto os horários dos ônibus e a distância até o trabalho dele e a minha futura faculdade atrasam nosso casamento."
          }
          foto={casa}
        />
        <Resposta
          horario={horario}
          tempo={72}
          texto={
            "Nós estamos hoje diante de um sonho que compartilhamos e que gostaríamos muito de realizar: $&%Adquirir o nosso próprio carro.%$& ✨🚗✨"
          }
          cor="red"
        />
        <Resposta
          horario={horario}
          tempo={78}
          texto={
            " Precisamos de um carro principalmente para ela poder ir para faculdade à noite, já que aqui em Torres não tem transporte público nesse horário."
          }
          pessoa="art"
        />
        <Resposta
          horario={horario}
          tempo={84}
          texto={
            "Nós entendemos que a aquisição de um $&%carro%$& é um investimento necessário, e estamos dispostos a pesquisar e considerar opções de carros usados que se adequem ao orçamento arrecadado, numa faixa de $&%R$10.000 a R$15.000.%$& 💰"
          }
        />
        <Resposta
          horario={horario}
          tempo={90}
          texto={
            "Portanto, pedimos a vocês que considerem nos apoiar nessa jornada para conseguir um $&%carro%$&, INDEPENDENTE DO VALOR ARRECADADO. Qualquer ajuda financeira será extremamente apreciada e se você puder compartilhar, também já estará nos ajudando muito 🗣️"
          }
        />
        <Resposta
          horario={horario}
          tempo={94}
          texto={
            "Com o apoio de vocês, estamos dirigindo em direção ao nosso futuro juntos, e quem sabe, com um carro novo, finalmente conseguiremos dar uma 'carona' ao amor! 🥰💕😍💋💘💞❣️"
          }
          pessoa="art"
        />
        <Resposta
          horario={horario}
          tempo={96}
          texto={
            "É sério mesmo que tu vai tentar convencer eles de nos ajudarem com isso? 😂"
          }
        />
        <Resposta
          horario={horario}
          tempo={98}
          texto="Bom, se você chegou até aqui e quer nos ajudar com qualquer valor que seja, você pode acessar esse QR code ou a chave pix direto do Arthur, se preferir $&%Arthur Ventura Benses de Souza (51) 98504-1397%$&"
        />
        <Resposta
          horario={horario}
          tempo={99}
          texto="Livian Graziela de Menezes Machado"
          foto={pix}
        />
        <Resposta
          horario={horario}
          tempo={100}
          texto={
            "Agradecemos profundamente seu apoio e por fazer parte deste momento especial em nossas vidas. Juntos, podemos tornar nosso sonho, realidade."
          }
        />
        <Resposta
          horario={horario}
          tempo={100}
          texto={
            "Ps: Antes que perguntem, nós dois já temos carteira de motorista, então podem ficar tranquilos 😅✨ Estamos ansiosos para compartilhar essa conquista com vocês!  🥰💕"
          }
        />
      </motion.div>
    </div>
  );
}
