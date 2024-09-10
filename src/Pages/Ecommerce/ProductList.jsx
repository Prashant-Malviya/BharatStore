import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, filterByCategory, filterByPrice, sortProducts, searchProducts } from '../../redux/slice/productSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const { filteredProducts, loading, error, categoryFilter, sortOption, searchTerm } =
    useSelector((state) => state.products);

  const [searchInput, setSearchInput] = useState(searchTerm);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(searchProducts(searchInput));
  }, [searchInput, dispatch]);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        {/* Search Filter */}
        <div>
          <label className="font-semibold">Search:</label>
          <input
            type="text"
            className="ml-2 p-2 border"
            placeholder="Search by name or category"
            value={searchInput}
            onChange={handleSearch}
          />
        </div>

        {/* Category Filter */}
        <div>
          <label className="font-semibold">Category:</label>
          <select
            className="ml-2 p-2 border"
            value={categoryFilter}
            onChange={(e) => dispatch(filterByCategory(e.target.value))}
          >
            <option value="">All</option>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Home Appliances">Home Appliances</option>
            <option value="Books">Books</option>
            <option value="Sports">Sports</option>
          </select>
        </div>

        {/* Price Filter */}
        <div>
          <label className="font-semibold">Price Range:</label>
          <select
            className="ml-2 p-2 border"
            onChange={(e) =>
              dispatch(filterByPrice(e.target.value === 'low' ? [0, 50] : [50, 1000]))
            }
          >
            <option value="">All</option>
            <option value="low">Under $50</option>
            <option value="high">Above $50</option>
          </select>
        </div>

        {/* Sort Options */}
        <div>
          <label className="font-semibold">Sort By:</label>
          <select
            className="ml-2 p-2 border"
            value={sortOption}
            onChange={(e) => dispatch(sortProducts(e.target.value))}
          >
            <option value="">None</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product List */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border hover:border-gray-200"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover mb-4 rounded"
              />
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-lg font-bold">${product.price}</p>
              </div>
              <p className="text-gray-600">{product.description}</p>

              <div className="mt-4">
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                  onClick={() => alert(`Added ${product.name} to cart`)}
                >
                  Add to Cart
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No products found</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
