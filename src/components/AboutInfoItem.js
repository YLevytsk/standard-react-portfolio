import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const AboutItemStyles = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 3rem;

  .title {
    font-size: 2.4rem;
    min-width: 180px;
    margin-bottom: 1rem;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    flex: 1;
  }

  .item {
    line-height: 1.6;
    white-space: pre-line;
    background-color: var(--deep-dark);
    padding: 1rem 1.5rem;
    border-radius: 8px;
    word-break: break-word;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    .title {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .items {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  }
`;

export default function AboutInfoItem({
  title = 'Title',
  items = ['HTML', 'CSS'],
}) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
