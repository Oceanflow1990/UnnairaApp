mport React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import CategoryList from './components/CategoryList';
import ItemList from './components/ItemList';

const App = () => {
	  return (
		      <Router>
		        <Routes>
		          <Route path="/" element={<Login />} />
		          <Route path="/categories" element={<CategoryList />} />
		          <Route path="/items/:categoryId" element={<ItemList />} />
		        </Routes>
		      </Router>
		    );
};

export default App;

