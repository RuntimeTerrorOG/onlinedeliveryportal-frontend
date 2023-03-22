import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import PublishIcon from '@mui/icons-material/Publish';

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Item Selected Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="" />
                  <span className="productName">T-shirt</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">Product ID:</span>
                      <span className="productInfoValue">04</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">300</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Price:</span>
                      <span className="productInfoValue">Rs.250</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Category:</span>
                      <span className="productInfoValue">Top</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="T-Shirt" />
                  <div className="productFormLeft">
                  <label>Price</label>
                  <input type="text" placeholder="Rs.200" />
                  </div>
                  <div className="productFormLeft">
                  <label>Category</label>
                  <input type="text" placeholder="Top" />
                  </div>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="" alt="" className="productUploadImg" />
                      <label for="file">
                          <PublishIcon/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}