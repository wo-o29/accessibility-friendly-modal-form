import Input from "../Input/Input";
import Label from "../Label/Label";
import Description from "../Description/Description";
import Title from "../Title/Title";
import Select from "../Select/Select";
import styled from "@emotion/styled";
import { useApplicationForm } from "./useApplicationForm";
import type { ApplicationFormData } from "../../types/formType";
import Modal from "../Modal/Modal";

interface ApplicationFormModalProps {
  isOpen: boolean;
  onSubmit: (data: ApplicationFormData) => void;
  onCancel: () => void;
}

function ApplicationFormModal({
  isOpen,
  onSubmit,
  onCancel,
}: ApplicationFormModalProps) {
  const { register, handleSubmit, reset, isSubmitDisabled } =
    useApplicationForm();

  const submit = (data: ApplicationFormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <Modal isOpen={isOpen} onCancel={onCancel}>
      <SFormContainer>
        <Title as="h2" id="modal-title">
          신청 폼
        </Title>
        <Description as="p" id="modal-description">
          이메일과 FE 경력 연차 등 간단한 정보를 입력해주세요.
        </Description>

        <form onSubmit={handleSubmit(submit)}>
          <SFieldGroup>
            <Label>이름 / 닉네임</Label>
            <Input
              type="text"
              {...register("name")}
              placeholder="이름을 입력해주세요"
            />
          </SFieldGroup>
          <SFieldGroup>
            <Label>이메일</Label>
            <Input
              type="email"
              {...register("email")}
              placeholder="이메일을 입력해주세요"
            />
          </SFieldGroup>
          <SFieldGroup>
            <Label>FE 경력 연차</Label>
            <Select
              {...register("experience")}
              options={[
                { value: "", label: "선택해주세요" },
                { value: "0~3년", label: "0~3년" },
                { value: "4~7년", label: "4~7년" },
                { value: "8년 이상", label: "8년 이상" },
              ]}
            />
          </SFieldGroup>
          <SFieldGroup>
            <Label>GitHub 링크 (선택)</Label>
            <Input
              type="url"
              {...register("githubLink")}
              placeholder="https://github.com/username"
            />
          </SFieldGroup>

          <SButtonGroup>
            <SCancelButton type="button" onClick={onCancel}>
              취소
            </SCancelButton>
            <SSubmitButton type="submit" disabled={isSubmitDisabled}>
              제출하기
            </SSubmitButton>
          </SButtonGroup>
        </form>
        {/* <STempScrollContent /> */}
      </SFormContainer>
    </Modal>
  );
}

export default ApplicationFormModal;

const STempScrollContent = styled.div`
  height: 1000px;
`;

const SFormContainer = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
`;

const SFieldGroup = styled.div`
  margin-bottom: 24px;
`;

const SButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 32px;
`;

const SCancelButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  background: #f3f4f6;
  color: #6b7280;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #e5e7eb;
  }
`;

const SSubmitButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  background: #3b82f6;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #2563eb;
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }
`;
