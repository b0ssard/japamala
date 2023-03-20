import { UnorderedList, ListItem, Text } from '@chakra-ui/react';

const modalData = [
  {
    key: 'modal1',
    label: 'Instruções',
    header: 'Instruções',
    body: (
      <UnorderedList>
        <h6>MODO MANUAL</h6>
        <ListItem>
          Os sinos tocam no início, ao chegar ao 108 e ao resetar.
        </ListItem>
        <ListItem>
          O modo manual funciona clicando o botão, ou as teclas 'Enter' e
          'Espaço'.
        </ListItem>
        <ListItem>
          Caso o praticante nçao queira se atrelar a contagem pode esconder o
          contador e esperar tocar o sino.
        </ListItem>
        <ListItem>
          A contagem pode ser reiniciada a qualquer momento com o botão
          'Resetar'.
        </ListItem>
        <h6>MODO AUTOMÁTICO</h6>
        <ListItem>
          Os sinos tocam no início, ao chegar ao 108 e ao resetar.
        </ListItem>
        <ListItem>
          O ritmo pode ser ajustado nos botões, da última fileira.
        </ListItem>
        <ListItem>
          O ritmo pode ser ajustado mesmo após o início da meditação, quantas
          vezes achar necessário.
        </ListItem>
        <ListItem>
          Para saber qual está selecionado, observe a caixa acima dos botões.
        </ListItem>
        <ListItem>
          A contagem pode ser reiniciada a qualquer momento com o botão
          'Resetar'.
        </ListItem>
      </UnorderedList>
    ),
  },
  {
    key: 'modal2',
    label: 'Sobre',
    header: 'Sobre a Japamala',
    body: (
      <Text>
        {' '}
        <p>
          O japamala é um cordão de contas utilizado nas práticas de meditação
          indiana para contar mantras, desejos, intenções ou apenas orações de
          quem manuseia o objeto. Na religião católica, por exemplo, o objeto é
          similar aos terços. A palavra 'japa' significa rezar, sussurrar,
          enquanto que 'mala' significa terço, cordão. Já em sânscrito, 'mala'
          apresenta o significado de guirlanda. Apesar da variedade de formas de
          uso do japamala, ele é considerado um item sagrado para diferentes
          religiões.{' '}
        </p>
        <p>
          Existe uma crença de que o cordão é capaz de reunir as energias
          espirituais de quem o carrega. Sua origem baseia-se, sobretudo, na
          religião hinduísta e no budismo, que consideram o japamala uma
          ferramenta eficiente para manter a mente focada e livre de pensamentos
          negativos.
        </p>{' '}
        <p>
          São diversas as técnicas de manuseio de um japamala, por exemplo, a
          pessoa pode usá-lo para fazer a contagem das pedras ao mesmo tempo que
          entoa um mantra. Ou ainda intercalar o japamala com uma meditação de
          respiração clássica, um método que ajuda a diminuir a taxa de
          respiração e concentração, promovendo maior relaxamento para a mente.{' '}
        </p>
      </Text>
    ),
  },
];

export default modalData;
