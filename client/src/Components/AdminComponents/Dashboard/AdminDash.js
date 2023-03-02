import React, { Fragment } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AdminHeader from '../Header/AdminHeader'
import './AdminDash.css'


function AdminDash() {

  return (
    <Fragment>
      <AdminHeader />
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://png.pngtree.com/background/20211217/original/pngtree-blue-round-technology-dashboard-picture-image_1598386.jpg" className="d-block  adminHomePage1" alt="..." />
            <span className="homeHeader1">USER LISTS </span>
            <Link to={'/users'}><button className="homeName2" style={{color:'green'}}> view all users</button></Link>
          </div>
        </div>
      </div>

      <Footer />

    </Fragment>
    /* <div classNameName='body1'>
       <h1 classNameName='main1'>USER LISTS</h1>
       <Link to={'/users'}><button  classNameName='main2'>Users</button></Link>
       
     </div> */




  )
}

export default AdminDash