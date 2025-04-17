import React, { useRef, useState } from 'react';

const TodoList = () => {
  const inputRef = useRef(); 
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const value = inputRef.current.value.trim();
    if (value) {
      setTodos([...todos, value]);
      inputRef.current.value = '';
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={styles.container}>
      <div style={styles.inputBox}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter a task"
          style={styles.input}
        />
        <button onClick={addTodo} style={styles.addButton}>Add</button>
      </div>
      {todos.map((todo, index) => (
        <div key={index} style={styles.todoItem}>
          <span>{todo}</span>
          <button onClick={() => deleteTodo(index)} style={styles.deleteButton}>
            🗑️
          </button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'white',
    minHeight: '100vh',
    padding: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputBox: {
    display: 'flex',
    marginBottom: '20px',
    gap: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    minWidth: '250px',
  },
  addButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#0056b3',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  todoItem: {
    backgroundColor: '#cceeff',
    padding: '10px 20px',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '350px',
    marginBottom: '10px',
  },
  deleteButton: {
    backgroundColor: '#004080',
    color: '#fff',
    border: 'none',
    padding: '6px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default TodoList;
