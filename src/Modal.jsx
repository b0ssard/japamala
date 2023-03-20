import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import Bead from './Button';

export default function OpenModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Bead fontSize="17px" onClick={onOpen} text={props.label}></Bead>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="#990000" color="#FFEE63">
            {props.header}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody bg="#FBE6C2">{props.body}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
