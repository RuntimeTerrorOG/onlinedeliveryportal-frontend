import "./featuredInfo.css";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Orders</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">300</span>
        </div>
        <span className="featuredSub">Today</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">In progress</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">400</span>
        </div>
        <span className="featuredSub">Today</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Completed</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">200</span>
        </div>
        <span className="featuredSub">Today</span>
      </div>
    </div>
  );
}