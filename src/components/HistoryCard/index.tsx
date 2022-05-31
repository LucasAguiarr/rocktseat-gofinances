import React from 'react';
import { Wrapper, Title, Amount } from './styles';

interface IProps {
  title: string;
  amount: string;
  color: string;
}

export const HistoryCard = ({ title, amount, color }: IProps) => {
  return (
    <Wrapper color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Wrapper>
  );
};
