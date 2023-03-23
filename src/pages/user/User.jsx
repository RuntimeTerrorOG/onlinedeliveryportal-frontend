  import { Link } from "react-router-dom";
  import "./user.css";
  import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
  import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
  import MailOutlineIcon from '@mui/icons-material/MailOutline';
  import PermIdentityIcon from '@mui/icons-material/PermIdentity';
  import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
  import PublishIcon from '@mui/icons-material/Publish';
  
  export default function User() {
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src=""
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">Udara Dilaksha</span>
                <span className="userShowUserTitle">Resource Handler</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentityIcon className="userShowIcon" />
                <span className="userShowInfoTitle">Udara7</span>
              </div>
              <div className="userShowInfo">
                <CalendarTodayIcon className="userShowIcon" />
                <span className="userShowInfoTitle">07.12.2000</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroidIcon className="userShowIcon" />
                <span className="userShowInfoTitle">+94 77 297 5936</span>
              </div>
              <div className="userShowInfo">
                <MailOutlineIcon className="userShowIcon" />
                <span className="userShowInfoTitle">Udara@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <LocationSearchingIcon className="userShowIcon" />
                <span className="userShowInfoTitle">No.231/12 Colombo/Srilanka</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="Udara7"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Udara Dilaksha"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="Udara@gmail.com"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+94 77 297 5936"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="No.231/12 Colombo/Srilanka"
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src=""
                    alt=""
                  />
                  <label htmlFor="file">
                    <PublishIcon className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }