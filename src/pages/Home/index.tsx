import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { Navbar } from "../../components/Navbar/Navbar";
import api from "../../services/api";

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Home: React.FC = () => {
  const [data, setData] = useState<Products[]>([]);

  useEffect(() => {
    api.get("").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      <Navbar title="Title">Teste</Navbar>
      <Container>
        <section>
          {data.map((prod) => (
            <div className="product-content" key={prod.id}>
              <p>{prod.title}</p>
              <img src={prod.image} alt="Pro" />
              <span>{prod.description}</span>
              <h6>{prod.price}</h6>
            </div>
          ))}
        </section>
      </Container>
    </>
  );
};

export default Home;
