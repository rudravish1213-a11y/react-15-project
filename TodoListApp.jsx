import React, { useState } from 'react';

function TodoListApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Review React Hooks concepts', completed: false },
    { id: 2, text: 'Prepare notes for Web Technology', completed: true },
    { id: 3, text: 'Complete B.Sc.IT Practical assignment', completed: false },
  ]);
  const [inputText, setInputText] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputText.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: inputText.trim(),
      completed: false
    };

    setTodos([...todos, newTodo]);
    setInputText('');
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div style={{ maxWidth: '540px', margin: '0 auto' }}>
      <form onSubmit={handleAddTodo} style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
        <input
          type="text"
          className="form-input"
          placeholder="Enter a new task..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit" className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
          Add Task
        </button>
      </form>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {todos.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '20px' }}>
            No tasks available. Add one above!
          </p>
        ) : (
          todos.map(todo => (
            <div
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                backgroundColor: todo.completed ? '#f8fafc' : '#ffffff'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                />
                <span style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? 'var(--text-muted)' : 'var(--text-main)',
                  fontWeight: '500'
                }}>
                  {todo.text}
                </span>
              </div>
              <button
                className="btn btn-danger"
                style={{ padding: '4px 10px', fontSize: '0.8rem' }}
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TodoListApp;
