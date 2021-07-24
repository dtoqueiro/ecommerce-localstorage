import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container } from "./style";
import MyHeader from "../../components/MyHeader";
import api from "../../services/api";

interface ProductsApi {
  id: number;
  title: string;
  price: number;
  image: string;
}
interface CartProducts {
  id: number;
  title: string;
  price: number;
  image: string;
  qtd: number;
}

toast.configure();

const Home: React.FC = () => {
  const [data, setData] = useState<ProductsApi[]>([]);
  const [cartItems, setCartItems] = useState<CartProducts[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    api.get("").then((response) => {
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem(`@Carrinho`, JSON.stringify(cartItems));
    const handleBadge = () => {
      let totalItems = 0;
      for (const i of cartItems) {
        totalItems += i.qtd;
      }
      return totalItems;
    };
    let total = handleBadge();
    setTotalItems(total);
  }, [totalItems, cartItems]);

  const handleCart = (index: number) => {
    let product = data[index];
    toast.dark(`${product.title} adicionado ao carrinho`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
    });

    const exist = cartItems.find((item) => item.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qtd: exist.qtd + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qtd: 1 }]);
    }
  };

  return (
    <>
      <MyHeader title="Produtos" items={totalItems} />
      <Container>
        <ToastContainer />
        <section className="cardsContainer">
          {data.map((prod, index) => (
            <div className="card" key={prod.id}>
              <div className="imgBox">
                <img src={prod.image} alt="Pro" />
              </div>
              <div className="content">
                <div className="productName">
                  <h3>{prod.title}</h3>
                </div>
                <div className="price">
                  <h2>
                    {prod.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                      minimumSignificantDigits: 2,
                    })}
                  </h2>
                  <div className="shopBtn">
                    <button onClick={() => handleCart(index)}>Comprar</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </Container>
    </>
  );
};

export default Home;
