import type { PropsWithChildren } from "react";
import { useKeyDown } from "../../hooks/useKeyDown/useKeyDown";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll/useLockBodyScroll";
import { useOutsideClick } from "../../hooks/useOutsideClick/useOutsideClick";
import styled from "@emotion/styled";

interface ModalProps {
  isOpen: boolean;
  onCancel: () => void;
}

function Modal({ isOpen, onCancel, children }: PropsWithChildren<ModalProps>) {
  useLockBodyScroll(isOpen);
  useKeyDown({
    Escape: onCancel,
  });
  const addToSafeZone = useOutsideClick(onCancel);

  return (
    <SModalBackdrop>
      <div ref={addToSafeZone}>{children}</div>
    </SModalBackdrop>
  );
}

export default Modal;

const SModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
