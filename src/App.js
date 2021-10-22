import React, { useEffect } from "react";
import CardList from "./Card/CardList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";
import TodoList from "./Todo/TodoList";
import Loader from "./Loader";

function App() {
  // Card
  const [cards, setCards] = React.useState([
    {
      id: 1,
      cardTitle: "John Doe",
      cardText: "Some example text",
      completed: true,
    },
    {
      id: 2,
      cardTitle: "John Doe",
      cardText: "Some example text",
      completed: false,
    },
    {
      id: 3,
      cardTitle: "John Doe",
      cardText: "Some example text",
      completed: false,
    },
    {
      id: 4,
      cardTitle: "John Doe",
      cardText: "Some example text",
      completed: false,
    },
    {
      id: 5,
      cardTitle: "John Doe",
      cardText: "Some example text",
      completed: false,
    },
  ]);

  // hook
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  // JSON
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 2000);
      });
  }, []);

  // ================CARDS=====================
  // REMOVE CARD
  function removeCard(id) {
    setCards(cards.filter((card) => card.id !== id));
  }

  // CHECK CARD
  function checkCard(id) {
    setCards(
      cards.map((card) => {
        if (card.id === id) {
          card.completed = !card.completed;
        }
        return card;
      })
    );
  }

  // =================TODOS====================
  // ADD TODO
  function addTodo(title) {
    setTodos(
      todos.concat({
        id: Date.now(),
        title,
        completed: false,
      })
    );
  }

  // COMPLETED TODO
  function onChange(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  // REMOVE TODO
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <Context.Provider value={{ checkCard, onChange, removeTodo }}>
      <div className="container">
        <h1 className="wrapper-title mb-16">Cards</h1>
        {/* Cards */}
        {cards.length ? (
          <CardList cards={cards} delCard={removeCard} />
        ) : (
          <p>Ma'lumot topilmadi</p>
        )}
        <AddTodo onCreate={addTodo} />
        {loading && <Loader />}
        {/* Todos */}
        {todos.length ? (
          <TodoList todos={todos} />
        ) : loading ? null : (
          <h3>Klub topilmadi</h3>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
