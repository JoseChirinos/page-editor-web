import React from 'react'
import RouterApp from './routes';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

function App() {
  return (
    <div className="App">
      <Provider template={AlertTemplate} {...options}>
        <RouterApp />
      </Provider>
    </div>
  );
}

export default App;
