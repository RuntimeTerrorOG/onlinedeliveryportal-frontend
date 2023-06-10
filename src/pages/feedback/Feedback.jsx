import "./feedback.css";

export default function Feedback() {
  fetch("ht");
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Feedbacks</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">madison bebier</span>
              <span className="userShowUserTitle">@hey_im_madi</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">I'm truly amazed by this laundry website! 
            It's a game changer for me and my busy schedule. 
            The quality of service and convenience are exceptional, 
            and it saves me so much time and hassle. I highly recommend it to anyone 
            who wants a reliable laundry solution. Thank you for making my life easier!</span>
          </div>
        </div>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">kri unkuku</span>
              <span className="userShowUserTitle">@kri345</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">WOW! This laundry website is seriously amazing! 
            As a busy mom and performer, it's been a complete game changer. 
            The process is so easy and convenient, and my clothes always come back looking fantastic. 
            I can't recommend it enough to anyone looking for a hassle-free laundry solution!</span>
          </div>
        </div>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">jon snow</span>
              <span className="userShowUserTitle">@jonny3</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">I highly recommend it to anyone 
            who wants a reliable laundry solution. Thank you for making my life easier!</span>
          </div>
        </div>
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
              <span className="userShowUsername">dustin porier</span>
              <span className="userShowUserTitle">@dustyP</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle"> I love this laundry website! As a busy artist, 
            I don't have time to do laundry, but this website has been a lifesaver. 
            The process is super easy, and my clothes always come back looking and smelling amazing. 
            If you want a hassle-free laundry solution, this website is the way to go!</span>
          </div>
        </div>
      </div>
    </div>
  );
}