import React from "react";

function ModalHtml({ userData }) {
  return (
    <div class="container">
      <div class="team-single">
        <div class="row">
          <div class="col-lg-4 col-md-5 xs-margin-30px-bottom">
            <div class="team-single-img">
              <img
                src={userData?.picture?.medium}
                alt=""
                style={{ width: "100%" }}
              />
            </div>
            <div class="bg-light-gray padding-30px-all md-padding-25px-all sm-padding-20px-all text-center">
              <h4 class="margin-10px-bottom font-size24 md-font-size22 sm-font-size20 font-weight-600">
                Class Teacher
              </h4>
              <p class="sm-width-95 sm-margin-auto">
                We are proud of child student. We teaching great activities and
                best program for your kids.
              </p>
              <div class="margin-20px-top team-single-icons">
                <ul class="no-margin">
                  <li>
                    <a href="javascript:void(0)">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i class="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-7">
            <div class="team-single-text padding-50px-left sm-no-padding-left">
              <h4 class="font-size38 sm-font-size32 xs-font-size30">
                {userData?.name?.first} {userData?.name?.last}{" "}
              </h4>
              <p class="no-margin-bottom">
                {`Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum
                voluptatem.`}
              </p>
              <div class="contact-info-section margin-40px-tb">
                <ul class="list-style9 no-margin">
                  <li>
                    <div class="row">
                      <div class="col-md-5 col-5">
                        <i class="fas fa-graduation-cap text-orange"></i>
                        <strong class="margin-10px-left text-orange">
                          Degree:
                        </strong>
                      </div>
                      <div class="col-md-7 col-7">
                        <p>Master's Degrees</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="row">
                      <div class="col-md-5 col-5">
                        <i class="far fa-gem text-yellow"></i>
                        <strong class="margin-10px-left text-yellow">
                          Exp.:
                        </strong>
                      </div>
                      <div class="col-md-7 col-7">
                        <p>4 Year in Education</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="row">
                      <div class="col-md-5 col-5">
                        <i class="far fa-file text-lightred"></i>
                        <strong class="margin-10px-left text-lightred">
                          Courses:
                        </strong>
                      </div>
                      <div class="col-md-7 col-7">
                        <p>Design Category</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="row">
                      <div class="col-md-5 col-5">
                        <i class="fas fa-map-marker-alt text-green"></i>
                        <strong class="margin-10px-left text-green">
                          Address:
                        </strong>
                      </div>
                      <div class="col-md-7 col-7">
                        <p>{userData?.location?.street?.name}</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="row">
                      <div class="col-md-5 col-5">
                        <i class="fas fa-mobile-alt text-purple"></i>
                        <strong class="margin-10px-left xs-margin-four-left text-purple">
                          Phone:
                        </strong>
                      </div>
                      <div class="col-md-7 col-7">
                        <p>{userData?.phone}</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="row">
                      <div class="col-md-5 col-5">
                        <i class="fas fa-envelope text-pink"></i>
                        <strong class="margin-10px-left xs-margin-four-left text-pink">
                          Email:
                        </strong>
                      </div>
                      <div class="col-md-7 col-7">
                        <p>
                          <a href="javascript:void(0)">{userData?.email}</a>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalHtml;
