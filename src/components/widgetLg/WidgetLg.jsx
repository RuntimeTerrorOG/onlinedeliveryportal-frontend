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
            <span className="widgetLgName">prageeth jayasinghe</span>
          </td>
          <td className="widgetLgDate">1 Jun 2021</td>
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
            <span className="widgetLgName">dilini deshika</span>
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
            <span className="widgetLgName">ransilu sooriahette</span>
          </td>
          <td className="widgetLgDate">3 Jun 2021</td>
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
            <span className="widgetLgName">sajini sandareka</span>
          </td>
          <td className="widgetLgDate">4 Jun 2021</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}