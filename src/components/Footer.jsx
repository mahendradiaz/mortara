import React from 'react'
import '../style/home.css'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container-footer">
          <div className="footer-header">
              <h1>Asked about news and updates</h1>
              <h1>about your future home.</h1>
          </div>
          <div className="footer-body">
              <form action="" method="POST">
                <div className="form-header">
                  <div className="form-head">
                    <label htmlFor="email">Email</label>
                    <input type="text"  className="form-control" id="email" name="email" placeholder="Your Email Address"/>
                  </div>
                  <div className="form-head">
                    <label htmlFor="nama">Name</label>
                    <input type="text"  className="form-control" id="nama" name="nama" placeholder="Your Name"/>
                  </div>
                </div>
                <div className="form-body">
                  <input type="text"  className="form-control" placeholder="Your Mobile Number*" />
                  <input type="text"  className="form-control" placeholder="Your Current Home Address*" />
                  <textarea type="text" name="" className="form-control" id="" cols="30" rows="10" placeholder="Your Inquiry"></textarea>
                </div>
                <button className="btn btn-secondary mt-2">Submit</button>
              </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer