import { ModalProps } from "@/types/types";
import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
} from "@chakra-ui/react";

const DescriptionModal: React.FC<ModalProps> = ({
  title,
  description,
  showModal,
  setShowModal,
}) => {
  return (
    <Modal
      scrollBehavior="inside"
      size="lg"
      isOpen={showModal}
      onClose={() => setShowModal(false)}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton size="xl" />
        <ModalBody padding="30px">
        <ModalHeader paddingX="0px">{title}</ModalHeader>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DescriptionModal;
