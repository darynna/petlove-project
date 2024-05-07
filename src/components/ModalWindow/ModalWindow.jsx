import { ModalOverlay, ModalContent } from "./ModalWindow.styled";

export const ModalWindow = ({Content}) => {
    return (
        <ModalOverlay className='modal-background'>
            <ModalContent>
                {Content}
            </ModalContent>
     </ModalOverlay>
    )
}