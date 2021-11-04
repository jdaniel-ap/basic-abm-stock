import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddItem from './pages/AddItem/AddItem';
import EditItem from './pages/EditItem/EditItem';
import Stock from './pages/Stock/Stock';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Stock} />
        <Route path="/add" component={AddItem} />
        <Route path="/items/:id" component={EditItem} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
