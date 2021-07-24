import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .cardsContainer {
    position: relative;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13.8rem, 1fr));
    grid-gap: 1.1rem;
    padding: 1.15rem;
    margin-top: 6.5vh;

    .card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      background-color: #fff;
      border-radius: 0.45rem;
      box-shadow: ${(props) => props.theme.dropShadow};

      .imgBox {
        position: relative;
        width: 100%;
        height: 17.22rem;
        overflow: hidden;

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: 0.35s ease-out;
          transform-origin: bottom;
          transform: scale(0.9);
        }
      }
    }
    .card:hover .imgBox img {
      transform: scale(1);
    }

    .content {
      padding: 0.55rem;
      width: 100%;
      background-color: ${(props) => props.theme.colors.light};
      height: 7rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .productName h3 {
        font-size: 1rem;
        font-weight: 900;
        color: #333;
        margin: 0.45rem 0;
      }

      .price {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
          font-size: 1.05rem;
          /* color: #ff2020; */
          color: ${(props) => props.theme.colors.primary};
          font-weight: 900;
        }

        .shopBtn button {
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 0.65rem;
          color: #fff;
          background-color: #ff2020;
          font-size: 0.9rem;
          cursor: pointer;
          transition: 0.35s ease-out;
        }
        .shopBtn button:hover {
          background-color: #000;
        }
      }
    }
  }
`;
