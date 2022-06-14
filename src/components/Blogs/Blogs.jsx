import "./Blogs.css";
import { MdiTimerOutline } from "../../assets/icon";

export function Blogs() {
  return (
    <div className="blogs-container">
      <div className="blogs-wrapper">
        <div className="blogs-sub-wrapper">
          <div className="blogs-description">Blogs</div>
          <div className="blogs-card-container">
            <div className="blogs-card-wrapper">
              <div className="blogs-card-img-container">
                <img
                  className="blogs-card-img"
                  src="https://www.flatandflatmates.com/_next/image/?url=https%3A%2F%2Fflats-and-flatmates-bucket.s3.amazonaws.com%2Fblogs%2FUntitled_design.png&w=3840&q=75"
                  alt="flat"
                />
              </div>
              <div className="blog-card-content-container">
                <span className="blog-card-content">Home Away From Home</span>
                <div className="blog-card-date-container">
                  <MdiTimerOutline className="blog-card-icon" />
                  <span className="blog-card-date">Feb 25 2022</span>
                </div>
                <div className="blog-card-description-container">
                  <span className="blog-card-description">
                    A home away from home. This is one utopia that we all look
                    forward to when looking to stay outside our own homes. Life
                    is all about being on the move.
                  </span>
                </div>
                <button className="blog-card-description-btn">Read More</button>
              </div>
            </div>

            <div className="blogs-card-wrapper">
              <div className="blogs-card-img-container">
                <img
                  className="blogs-card-img"
                  src="https://www.flatandflatmates.com/_next/image/?url=https%3A%2F%2Fflats-and-flatmates-bucket.s3.amazonaws.com%2Fblogs%2FBlog_2.jpg&w=3840&q=75"
                  alt="flat"
                />
              </div>
              <div className="blog-card-content-container">
                <span className="blog-card-content">
                  6 trigger words every landlord should look for
                </span>
                <div className="blog-card-date-container">
                  <MdiTimerOutline className="blog-card-icon" />
                  <span className="blog-card-date">Mar 30 2022</span>
                </div>
                <div className="blog-card-description-container">
                  <span className="blog-card-description">
                    You can hardly turn on a television or read a newsfeed where
                    you don’t encounter the term “trigger words.”
                  </span>
                </div>
                <button className="blog-card-description-btn">Read More</button>
              </div>
            </div>

            <div className="blogs-card-wrapper">
              <div className="blogs-card-img-container">
                <img
                  className="blogs-card-img"
                  src="https://www.flatandflatmates.com/_next/image/?url=https%3A%2F%2Fflats-and-flatmates-bucket.s3.amazonaws.com%2Fblogs%2FBlog_3.jpg&w=3840&q=75"
                  alt="flat"
                />
              </div>
              <div className="blog-card-content-container">
                <span className="blog-card-content">
                  Will A Chain Smoker Next Door Mean I Have To Move?
                </span>
                <div className="blog-card-date-container">
                  <MdiTimerOutline className="blog-card-icon" />
                  <span className="blog-card-date">Mar 30 2022</span>
                </div>
                <div className="blog-card-description-container">
                  <span className="blog-card-description">
                    A tenant is dealing with a chain smoker next door in a
                    non-smoking rental duplex so how to deal with that is the
                    question this week for Ask Landlord Hank.
                  </span>
                </div>
                <button className="blog-card-description-btn">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
