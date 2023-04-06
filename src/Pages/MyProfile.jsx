import React from "react";
import "../styles/myprofile.css";

const MyProfile = () => {
    return(
        <div className="myprofile">
            <h2 className="myprofile__title">My Profile</h2>

            <div className="myprofile__wrapper">
                
               
        <div className="details__form">        {/*form to collect data*/}
          <h2 className="profile__title">Your Details</h2>
          <p className="profile__desc">
            Update your photo and personal details here
          </p>
          <form>
            <div className="form__group">

            <div>
                <label>First Name</label>
                <input type="text" placeholder="" />
              </div>

              <div>
                <label>Last Name</label>
                <input type="text" placeholder="" />
              </div>
              </div>
            
              <div className="form__group">
              <div>
                <label>Email</label>
                <input type="email" placeholder="" />
              </div>

              <div>
                <label>Mobile Number</label>
                <input type="number" placeholder="" />
              </div>
            </div>


            <div className="form__group">
              <div>
                <label>Address</label>
                <input type="text" placeholder="" />
              </div>

              <div>
                <label>No</label>
                <input type="number" placeholder="" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>City</label>
                <input type="" placeholder="" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Your Photo</label>
                <p className="profile-img__desc">
                  This will be displayed in your profile
                </p>
                <input type="file" placeholder="choose file" />   {/*uploading the profile image*/}
              </div>

              <div className="profile__img-btns">
                <button className="dlt__btn">Delete</button>
                <button className="update__btn">Update</button>
              </div>
            </div>
          </form>
        </div>
       </div>
      </div>
    );
};
export default MyProfile;