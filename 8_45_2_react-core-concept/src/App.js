import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name:'Laptop', price:150000, color:'black', brand:'Dell' },

    { name:'Mobile', price:10000, color:'black', brand:'Samsung' },

    { name: 'Camera', price: 55000, color: 'black', brand: 'Canon' },
    
    { name:'Iphone 8plus', price:45000, color:'mateBlack', brand:'Iphone' }
  ]

  return (
    <div className="App">

      {/* Process 2: Add data dynamically by map */}
      {
        products.map(product => <Product name={product.name} price={product.price} color={product.color} brand={product.brand}></Product>)
      }
      
      {/* Process 1: Add data manually*/}
      {/* <Product name='Laptop' price='150000' color='black' brand='Dell'></Product>

      <Product name='Mobile' price='10000' color='blue' brand='Samsung'></Product>

      <Product name='Camera' price='550000' color='black' brand='Canon'></Product> */}
    </div>
  );
}

function Product(props) {
  
  const productStyle = {
    backgroundColor: 'green',
    color : 'black',
  }
  
  return (
    <div className='product' style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h3>Price: {props.price}</h3>
      <h3>Color: {props.color}</h3>
      <h3>Brand: {props.brand}</h3>
    </div>
  )
}

export default App;
