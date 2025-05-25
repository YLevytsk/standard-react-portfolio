import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 500px;
  margin: 200px auto 0 auto; /* ← большой отступ сверху для десктопа */
  font-size: 1.8rem;
  line-height: 1.3em;

  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
    margin: 40px auto 0 auto; /* ← уменьшили отступ сверху для мобилки */
  }
`;

const PText = ({ children }) => (
  <PStyle className="para">
    <p>{children}</p>
  </PStyle>
);

export default React.memo(PText);
