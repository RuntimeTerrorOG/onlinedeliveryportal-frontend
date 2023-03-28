import "./navbar.scss"


import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

const Navbar = () => {
  return (
    <div className = "navbar">
      <div className="wrapper">

        <div className="PageSelected">
          SELECTED TAB NAME
        </div>

        <div className="optionPanel">
          
          <div className="search">
            <input type="text" placeholder="search.."/>
            <SearchIcon/>
          </div>

          <div className="items">
            
            <div className="item">
              <DarkModeOutlinedIcon className="icon"/>
            </div>

            <div className="item">
              <NotificationsNoneIcon className="icon"/>
                <div className="counter">1</div>
            </div>

            

            <div className="item">
              <ChatBubbleOutlineOutlinedIcon className="icon"/>
                <div className="counter">2</div>
            </div>

            <div className="item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnS22x8ehPdR7xDZTZQCdjBoA5WdZSfaE_sQ&usqp=CAU" alt="" className="avatar"/>
            </div>

          </div>
        </div>

  


      </div>
    
    </div>
  )
}

export default Navbar