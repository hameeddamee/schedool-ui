import React, { useState } from "react";
import { Link } from "react-router-dom";

const SelectUser = (props) => {
  const [error, setError] = useState("");

  return (
    <div className="account account--photo">
      <div className="wrapper__user--select">
        <div className="account__wrapper user__select--wrapper">
        
          <div>
            <h4 className="account__name--text text-center">SELECT USER</h4>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 user__card mt-4">
                <div className="row">
                    <div className="col-sm-6">
                      <div className="user__select-card">
                        <Link to="/auth/signup">
                          <div className="user__select--tailor"></div>
                          <p className="account__select--text text-center">
                            Tailor
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-sm-6 user__card mt-4">
                <div className="row">
                    <div className="col-sm-6">
                      <div className="user__select-card">
                        <Link to="/auth/signup">
                          <div className="user__select--designer"></div>
                          <p className="account__select--text text-center">
                            Fashion Designer
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 user__card">
                <div className="row">
                    <div className="col-sm-6">
                      <div className="user__select-card">
                        <Link to="/auth/signup">
                          <div className="user__select--specialist"></div>
                          <p className="account__select--text text-center">
                            Fitting Specialist
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-sm-6 user__card">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="user__select-card">
                        <Link to="/auth/signup">
                          <div className="user__select--cutter"></div>
                          <p className="account__select--text text-center">
                            Pattern Cutter
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectUser;

{
  /* <div className="row">
<div className="col-sm-6">
  <div className="user__select-card">
    <Link to="/auth/user/tailor">
      <div className="user__select--icon "></div>
      <p className="account__select--text text-center">Tailor</p>
    </Link>
  </div>
</div>
</div> */
}
