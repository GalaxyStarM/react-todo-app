import React, { useState } from "react";

export default function TodoForm({ addTodo }) {

  const [title, setTitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title);
    setTitle('');
  };

  const handleChangeTtile = (event) => {
    setTitle(event.target.value)
  }

  console.log(title);

  return (
    <div className="container">
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}

          onChange={(event) => {
            handleChangeTtile(event)
          }}
          value={title}
        />
        <button style={styles.button}> Add Todo </button>
      </form>
    </div>
  );
}

const styles = {
  formInput: {
    height: "66px",
    width: "40%",
    fontSize: "16px",
    padding: "0 16px",
  },
  button: {
    height: "72px",
    fontSize: "16px",
  },
};
