import "./style.scss";

const DashboardTime = () => {
  return (
    <div className = "dashboardTime">
       {new Date().toDateString()}
    </div>
  )
}

export default DashboardTime