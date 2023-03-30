import "./widgetSm.css";
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Joined Customers</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src=""
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jude belligham</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            View detailes
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src=""
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">camila cabello</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            View detailes
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src=""
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">mandy rose</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            View detailes
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src=""
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">justin bieber</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            View detailes
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src=""
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">jon snow</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            View detailes
          </button>
        </li>
      </ul>
    </div>
  );
}