import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .formWrapper {
    max-width: 700px;
    width: 100%;
    background-color: #fff;
    padding: 25px 30px;
    border-radius: 5px;
    /* display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap; */

    .title {
      font-size: 1.25rem;
      font-weight: 900;
      position: relative;
      padding-bottom: 0.25rem;
    }

    .title::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 0.15rem;
      width: 5rem;
      background-color: ${(props) => props.theme.colors.secondary};
    }

    form .user-details {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .input-box {
        width: calc(100% / 2 -20px);
        /* margin: 1rem; */
        margin: 20px 0 12px 0;

        input {
          height: 3rem;
          width: 100%;
          margin: 0.25rem 0;
          padding: 0.5rem;
        }

        label {
          font-weight: 900;
          font-size: 0.75rem;
          margin-bottom: 2rem;
        }
      }
    }

    button {
      border: none;
      padding: 1rem 2rem;
      background-color: ${(props) => props.theme.colors.success};
      border-radius: 1rem;
      cursor: pointer;
      color: #fff;
      transition: all 0.3s ease-out;
    }

    button:hover {
      background-color: #000;
    }
  }
`;
