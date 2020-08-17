import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "http://placeimg.com/64/64/1",
    name: "홍길동",
    birthday: "940721",
    gender: "남자",
    job: "학생",
  },
  {
    id: 2,
    image: "http://placeimg.com/64/64/2",
    name: "김길동",
    birthday: "940722",
    gender: "남자",
    job: "회사원",
  },
  {
    id: 3,
    image: "http://placeimg.com/64/64/3",
    name: "이길동",
    birthday: "940720",
    gender: "여자",
    job: "프로그래머",
  },
];

class App extends Component {
  render() {
    return (
      <div className="gray-background">
        {customers.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
