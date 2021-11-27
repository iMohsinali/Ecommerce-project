
import data from "./data";
import Product from "./components/Product";
function App() {
  return (
    <div className=" grid-container">
    <header className="row">
        <div>
            <a href="/" className='brand'>amazona</a>

        </div>
        <div>
           <a href="/cart">Cart</a>
           <a href="/signin">Sign </a>
           </div>
    </header>

    <main>
      <div className=" row center">
         
            {
              data.product.map((product)=>(
            <Product product={product}/>
                
              ))              
            }
           
          </div>

     

      
    </main>

    <footer className="row center">
       All right reserved
    </footer>
   </div>
  );
}

export default App;
