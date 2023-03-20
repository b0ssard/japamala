import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  UnorderedList,
  ListItem,
  useDisclosure,
} from '@chakra-ui/react';

export default function BuddhaDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Instruções</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
                Caso o praticante nçao queira se atrelar a contagem pode
                esconder o contador e esperar tocar o sino.
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
                O ritmo pode ser ajustado mesmo após o início da meditação,
                quantas vezes achar necessário.
              </ListItem>
              <ListItem>
                Para saber qual está selecionado, observe a caixa acima dos
                botões.
              </ListItem>
              <ListItem>
                A contagem pode ser reiniciada a qualquer momento com o botão
                'Resetar'.
              </ListItem>
            </UnorderedList>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
