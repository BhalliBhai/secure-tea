import React from "react";

function Signin() {
 
  return (
    <>
        <main class="main-content  mt-0 signin-bg">
    <div class="page-header align-items-start min-vh-100">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto pt-5">
        <div class="row mt-5">
          <div class="col-lg-6 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                <div class="bg-gradient-info shadow-info border-radius-lg py-3 pe-1">
                  <h4 class="text-white font-weight-bolder text-center mt-2 mb-1">Sign in</h4>
                </div>
              </div>
              <div class="card-body">
                <form role="form" class="text-start">
                  <div class="input-group input-group-outline my-2">
                    <input type="email" class="form-control" placeholder="Email"/>
                  </div>
                  <div class="input-group input-group-outline mb-2">
                    <input type="password" class="form-control" placeholder="Password"/>
                  </div>
                  <div class="input-group input-group-outline mb-2">
                    <input type="url" class="form-control" placeholder="URL"/>
                  </div>
                 
                  <div class="text-center signin-btn">
                    <button type="submit" class="text-white btn bg-gradient-info w-100 my-4 mb-2">Sign in</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-auto mt-5">
        <div className="col-lg-6 col-md-8 col-12 mx-auto">
          <p className="text-light text-center">The app should route to Login in case the cookie is not found or login is unsuccessful. In 
            case login is unsuccessful, delete the previous cookie as well.
          </p>
        </div>
        </div>
      </div>

    </div>
  </main>
    </>
  );
}

export default Signin;
