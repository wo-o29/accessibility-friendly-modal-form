import styled from "@emotion/styled";
import { overlay } from "overlay-kit";
import ApplicationFormModal from "./components/ApplicationFormModal/ApplicationFormModal";
import type { ApplicationFormData } from "./types/formType";

const ModalFormPage = () => {
  return (
    <SContainer>
      <SApplicationButton
        type="button"
        onClick={async () => {
          const result = await overlay.openAsync(({ isOpen, close }) => {
            const onSubmit = (data: ApplicationFormData) => {
              close(data);
            };

            const onCancel = () => {
              close(null);
            };

            return (
              <ApplicationFormModal
                isOpen={isOpen}
                onSubmit={onSubmit}
                onCancel={onCancel}
              />
            );
          });

          if (result === null) {
            alert("모달이 닫혔습니다.");
            return;
          }

          alert(`폼 결과: ${result}`);
        }}
      >
        🚀 신청하기
      </SApplicationButton>
    </SContainer>
  );
};

export default ModalFormPage;

const SContainer = styled.main`
  width: 1024px;
  height: 3000px; /* 스크롤 테스트를 위해 높이를 크게 설정 */
  margin: 300px auto 0;
  text-align: center;
`;

const SApplicationButton = styled.button`
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.3);
  color: white;
  border: none;
  border-radius: 0.75rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;
