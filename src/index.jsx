import App from './App';
import {  createRoot } from 'react-dom/client';

const index = () => {
  return (
    <App />
  )
}

export default index
const root = createRoot(document.getElementById("root"));
root.render(<App />)