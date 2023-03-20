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
      <Bead onClick={onOpen} text={props.label}></Bead>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {props.body}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
