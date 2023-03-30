import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Order Processed</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src=""
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">udara dilaksha</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src=""
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">jason druello</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src=""
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan rose</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src=""
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">dustin porrior</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}