import styled from 'styled-components/macro'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  z-index: 9998;
  overflow: hidden;
  transition: opacity 0.2s ease-in;
`

export const Container = styled.div`
  position: relative;
  background-color: white;
  min-width: 30%;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
  padding: ${({ theme }) => theme.sizes.padding}px;
  border-radius: ${({ theme }) => theme.sizes.base}px;
`

export const CloseButton = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.sizes.base}px;
  right: ${({ theme }) => theme.sizes.base}px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: pointer;

  svg {
    font-size: ${({ theme }) => theme.fontSizes.h2}px;
    fill: ${({ theme }) => theme.colors.black};
  }
`

export const ModalTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.sizes.base}px;
  color: ${({ theme }) => theme.colors.secondary};
  ${({ theme }) => theme.fonts.smallTitle};
`

export const ModalText = styled.p`
  ${({ theme }) => theme.fonts.body3};
  margin-bottom: ${({ theme }) => theme.sizes.base}px;
`
