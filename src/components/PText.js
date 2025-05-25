import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 500px;
  margin: 200px auto 0 auto; /* ← отступ сверху */
  font-size: 1.8rem;
  line-height: 1.3em;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const PText = ({ children }) => (
  <PStyle className="para">
    <p>{children}</p>
  </PStyle>
);

export default React.memo(PText);
