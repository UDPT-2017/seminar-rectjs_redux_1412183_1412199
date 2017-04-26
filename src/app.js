import React from 'react';
import cart from '';
import productList from '';

const app = () => {
  return(
    <div>
      <div className="jumbotron">
        <div className="container text-center">
          <h1>Redux Shopping Cart</h1>
          <p>...</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <productList />
          </div>
          <div className="col-md-4">
            <cart />
        </div>
      </div>
    <footer class="container-fluid">
      <p>...</p>
    </footer>
    </div>
  );
}
export default App;
