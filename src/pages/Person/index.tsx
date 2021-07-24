import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MyHeader from "../../components/MyHeader";
import { Container } from "./style";

type Props = {
  route?: number;
};

const Person: React.FC<Props> = ({ route }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  let history = useHistory();
  console.log(route);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      phone,
      date,
    };
    localStorage.setItem(`@UserData`, JSON.stringify(userData));

    history.push("/");
  };

  return (
    <>
      <MyHeader title="Cadastro de Usuário" items={route} />
      <Container>
        <div className="formWrapper">
          <div className="title">Registro</div>
          <form action="#" onSubmit={(e) => handleSubmit(e)}>
            <div className="user-details">
              <div className="input-box">
                <label htmlFor="name" className="details">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Digite seu nome"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>

              <div className="input-box">
                <label htmlFor="email" className="details">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Digite seu email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div className="input-box">
                <label htmlFor="phone" className="details">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Telefone"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </div>

              <div className="input-box">
                <label htmlFor="date" className="details">
                  Nascimento
                </label>
                <input
                  type="date"
                  id="date"
                  placeholder=""
                  required
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                />
              </div>
            </div>

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Person;
