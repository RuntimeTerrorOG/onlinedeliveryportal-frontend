import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Pillows" />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="text" placeholder="Rs.200" />
        </div>
        <div className="addProductItem">
          <label>Categoery</label>
          <input type="text" placeholder="Other" />
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}