import './App.css';
// import rechargeLogo from "./images/image1.png";

function App() {
  return (
    <div className="App">
      <h1 className="only_mobile">Open in Mobile View</h1>
    <div className="content">
        <nav>
            <div className="top">
                <span className="location_icon"><i className="fa-sharp fa-solid fa-location-dot"></i></span>
                <span className="location_text">Current Location</span>
                <span className="notifications_icon"><i className="fa-solid fa-bell"></i></span>
                <span className="cart_icon"><i className="fa-solid fa-cart-plus"></i></span>
            </div>
            <div className="searchbar">
                <div className="search_area">
                    <div className="search_icon"><i className="fa-solid fa-magnifying-glass"></i></div>
                    <input type="text" placeholder="Search for Products..."></input>
                </div>
                <div className="Voice_recognition"><i className="fa-solid fa-microphone"></i></div>
            </div>
        </nav>
        <div className="mainContainer">
            <div>
                <img className="mainLogo" src="https://storage.googleapis.com/putatoeapp/Image/testImage/68V03LL" alt = "Recharge Logo"></img>
            </div>
        </div>
        <div className="icons">
            <div>
                <div>
                    <i className="fa-solid fa-mobile-screen"></i>
                </div>
                <span>Prepaid Mobile recharge</span>
            </div>
            <div>
                <div>
                    <i className="fa-sharp fa-solid fa-tv"></i>
                </div>
                <span>DTH Recharge</span>
            </div>
            <div>
                <div>
                  <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>
                </div>
                <span>Loans</span>
            </div>
            <div>
                <div>
                    <i className="fa-solid fa-bullhorn"></i>
                </div>
                <span>Promotion</span>
            </div>
            <div>
                <div>
                    <i className="fa-regular fa-newspaper"></i>
                </div>
                <span>News</span>
            </div>
            <div>
                <div>
                    <i className="fa-solid fa-message"></i>
                </div>
                <span>Blog</span>
            </div>
            <div>
                <div>
                    <i className="fa-solid fa-people-group"></i>
                </div>
                <span>Jobs</span>
            </div>
            <div>
                <div>
                    <i className="fa-sharp fa-solid fa-comment"></i>
                </div>
                <span>Anonymous Feedback</span>
            </div>
            <div>
                <div>
                    <i className="fa-solid fa-fire-burner"></i>
                </div>
                <span>Gas Booking</span>
            </div>
            <div>
                <div>
                    <i className="fa-solid fa-lightbulb"></i>
                </div>
                <span>Electricity Bill</span>
            </div>
            <div>
                <div>
                    <i className="fa-solid fa-droplet"></i>
                </div>
                <span>Water Bill</span>
            </div>
            <div>
                <div>
                <i class="fa-solid fa-angle-right"></i>
                </div>
                <span>See More</span>
            </div>
        </div>
        <div className="service_products">
            <div className="head">Popular Service Products</div>
            <div className="sub_head">Consultancy</div>
            <div className="companies_container">
                <div className="companies">
                    <div className="image" style={{backgroundColor : "#fdb1c8"}}>Y</div>
                    <div className="text">
                        Service Product 1
                    </div>
                </div>
                <div className="companies">
                    <div className="image" style={{backgroundColor : "#B8E8FC"}}>A</div>
                    <div className="text">
                        Service Product 2
                    </div>
                </div>
                <div className="companies">
                    <div className="image" style={{backgroundColor : "#B3FFAE"}}>T</div>
                    <div className="text">
                        Service Product 3
                    </div>
                </div>
                <div className="companies">
                    <div className="image" style={{backgroundColor : "#B1AFFF"}}>I</div>
                    <div className=" text">
                        Service Product 4
                    </div>
                </div>
                <div className="companies">
                    <div className="image" style={{backgroundColor : "#fdb1c8"}}>S</div>
                    <div className="text">
                        Service Product 5
                    </div>
                </div>
                <div className="companies">
                    <div className="image" style={{backgroundColor : "#a8f76c"}}>H</div>
                    <div className="text">
                        Service Product 6
                    </div>
                </div>
                <div className="companies">
                    <div className="image" style={{backgroundColor : "#B1AFFF"}}>P</div>
                    <div className="text">
                        Service Product 7
                    </div>
                </div>
                <div className="companies">
                    <div className="image" style={{backgroundColor : "#fdb1c8"}}>A</div>
                    <div className="text">
                        Service Product 8
                    </div>
                </div>
                <div className="companies">
                    <div className="image" style={{backgroundColor : "#a8f76c"}}>N</div>
                    <div className="text">
                        Service Product 9
                    </div>
                </div>
                <div className="companies">
                    <div className="image" style={{backgroundColor : "#fdb1c8"}}>D</div>
                    <div className="text">
                        Service Product 10
                    </div>
                </div>
                <div className="companies">
                    <div className="image" style={{backgroundColor : "#B8E8FC"}}>I</div>
                    <div className="text">
                        Service Product 11
                    </div>
                </div>
                <div className="companies">
                    <div className="image" style={{backgroundColor : "#B3FFAE"}}>R</div>
                    <div className="text">
                        Service Product 12
                    </div>
                </div>
                <div className="companies">
                    <div className="image" style={{backgroundColor : "#B1AFFF"}}>I</div>
                    <div className="text">
                        Service Product 13
                    </div>
                </div>
            </div>
        </div>
        <div className="service_products">
            <div className="head">All Popular Service Providers</div>
            <div className="sub_head">Consultancy</div>
            <div className="companies_container">
                <div className="companies">
                    <div className="image" style={{backgroundColor : "#B8E8FC"}}>A</div>
                    <div className="text">
                        Service Provider 1
                    </div>
                </div>
                <div className="companies">
                    <div className="image" style={{backgroundColor : "#B3FFAE"}}>B</div>
                    <div className="text">
                        Service Provider 2
                    </div>
                </div>
                <div className="companies">
                    <div className="image" style={{backgroundColor : "#B1AFFF"}}>C</div>
                    <div className=" text">
                        Service Provider 3
                    </div>
                </div>
                <div className="companies">
                    <div className="image" style={{backgroundColor : "#fdb1c8"}}>D</div>
                    <div className="text">
                        Service Provider 4
                    </div>
                </div>
            </div>
        </div>
        <div className="service_products">
            <div className="head">Services We Provide</div>
            <div className="companies_container">
                <div className="providing_services">
                    <div><h3><b>Consultancy</b></h3></div>
                </div>
            </div>
        </div>
        <div className='putatoeLogo'>
          <img src = "https://www.putatoe.com/img/logo.png" alt='Logo'></img>
        </div>

        <div className='icons footer'>
            <div>
                <div>
                    <i class="fa-solid fa-house"></i>
                </div>
                <span>Home</span>
            </div>
            <div>
                <div>
                    <i class="fa-solid fa-user"></i>
                </div>
                <span>Profile</span>
            </div>
            <div className='logo-div'>
                <div className='logo-icon'>
                    <img src = "https://www.putatoe.com/img/logo.png" alt='Logo'></img>
                </div>
                {/* <span></span> */}
            </div>
            <div>
                <div>
                    <i class="fa-solid fa-list"></i>
                </div>
                <span>Follow List</span>
            </div>
            <div>
                <div>
                    <i class="fa-brands fa-rocketchat"></i>
                </div>
                <span>Chat</span>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
