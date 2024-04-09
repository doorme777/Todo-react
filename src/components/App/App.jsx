import React from 'react';
import AppUI from './AppUI.jsx';
import { TodoProvider } from '../TodoContext/TodoContext.jsx';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
