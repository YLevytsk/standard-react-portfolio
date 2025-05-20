import React from 'react';
import styled from 'styled-components';

const DownloadButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: var(--gray-1);
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: black;
    text-decoration: none;
  }

  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function DownloadButton({ text = 'Download', file = '#' }) {
  return (
    <DownloadButtonStyle className="button-wrapper">
      <a
        className="button"
        href={file}
        download
        target="_blank"
        rel="noreferrer"
      >
        {text}
      </a>
    </DownloadButtonStyle>
  );
}
