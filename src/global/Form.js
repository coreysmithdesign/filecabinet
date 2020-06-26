import styled from "styled-components";

export const Form = styled.form`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 500px;
  margin: 0 auto 2rem;
`;

export const FormSection = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin: 1.5rem 0 0.5rem;
`;

export const Label = styled.label`
  margin: 0.5rem 0;
  font-size: 0.75rem;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #ddd;
  padding: 0.35rem;
  background: #ebebf1;
  border-radius: 4px;
`;

export const Datalist = styled.datalist``;

export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid #ddd;
  padding: 0.35rem;
  background: #ebebf1;
  border-radius: 4px;
`;

export const Select = styled.select`
  width: 100%;
  border: 1px solid #ddd;
  padding: 0.35rem;
  background: #ebebf1;
  border-radius: 4px;
`;

export const Option = styled.option``;

export const Submit = styled.input`
  width: inherit;
  margin-top: 1rem;
`;
