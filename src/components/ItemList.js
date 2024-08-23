mport React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ItemList = () => {
	  const { categoryId } = useParams();
	  const [items, setItems] = useState([]);

	  useEffect(() => {
		      const fetchItems = async () => {
			            const res = await axios.get(`http://localhost:5000/api/items/${categoryId}`);
			            setItems(res.data);
			          };
		      fetchItems();
		    }, [categoryId]);

	  return (
		      <ul>
		        {items.map(item => (
				        <li key={item._id}>{item.name}</li>
				      ))}
		      </ul>
		    );
};

export default ItemList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ItemList = () => {
	  const { categoryId } = useParams();
	  const [items, setItems] = useState([]);

	  useEffect(() => {
		      const fetchItems = async () => {
			            const res = await axios.get(`http://localhost:5000/api/items/${categoryId}`);
			            setItems(res.data);
			          };
		      fetchItems();
		    }, [categoryId]);

	  return (
		      <ul>
		        {items.map(item => (
				        <li key={item._id}>{item.name}</li>
				      ))}
		      </ul>
		    );
};

export default ItemList;

