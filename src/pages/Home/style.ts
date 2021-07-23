import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: auto;

  section {
    height: 92vh;
    width: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    z-index: -10;
    display: flex;
  }

  .product-content {
    display: grid;
    text-align: center;
    height: 25%;
    background-color: #fff;
    border-radius: ${(props) => props.theme.borderRadius};
    padding: 12px;

    img {
      height: 100px;
      width: auto;
    }
  }
`;
