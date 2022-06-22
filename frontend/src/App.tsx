import MyRoutes from "./routes";
import './App.scss';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}> 
      <MyRoutes />
      </Provider>
  );
};
