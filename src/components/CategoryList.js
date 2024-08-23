mport React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryList = () => {
	  const [categories, setCategories] = useState([]);

	  useEffect(() => {
		      const fetchCategories = async () => {
			            const res = await axios.get('http://localhost:5000/api/categories');
			            setCategories(res.data);
			          };
		      fetchCategories();
		    }, []);

	  return (
		      <ul>
		        {categories.map(category => (
				        <li key={category._id}>{category.name}</li>
				      ))}
		      </ul>
		    );
};

export default CategoryList;

