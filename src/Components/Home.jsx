import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      AllUsers: [],
      SingleUser: ""
    }

    this.onClickUserDetail = this.onClickUserDetail.bind(this)
  }

  async componentDidMount() {
    const url = 'https://reqres.in/api/users?page=1';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ AllUsers: data });
    console.log(data);

    this.onClickUserDetail()
  }

  async onClickUserDetail(id) {
    const url = "https://reqres.in/api/users/" + id;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ SingleUser: data });
    console.log(this.state.SingleUser);
    console.log(id)
  }

  render() {
    let userdata = this.state.SingleUser;
    { console.log(userdata.data && userdata.data.email) }
    return (
      <>
        <div class="sidebar-container">
          <div class="sidebar-logo">
            User Dashboard
  				</div>
          <ul class="sidebar-navigation">
            <li class="header">Navigation</li>
            <li>
              <a href="#">
                <i class="fa fa-home" aria-hidden="true"></i> Homepage
     				 </a>
            </li>

          </ul>
        </div>

        <div class="content-container">

          <div class="container-fluid">


            <div class="jumbotron">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="row">
                      {this.state.AllUsers.data && this.state.AllUsers.data.map(item => {
                        return (
                          <div class="col-12 col-md-6 col-lg-3">
                            <br />  <br />
                            <div class="card">
                              <img class="card-img-top" src={`${item.avatar}`} alt="Card image cap" />
                              <div class="card-body">
                                <h5 class="card-title">{item.first_name} {item.last_name}</h5>
                                <p class="card-text">{item.email}</p>
                                <button type="button" class="btn btn-primary" data-toggle="modal"
                                  onClick={() => this.onClickUserDetail(item.id)}
                                  data-target="#exampleModal">
                                 Check Detail
                             </button>

                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>



                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              <h3></h3></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">

                      <div style={{alignContent: "center"}} className="text-center mb-4">
                     <img src={`${userdata.data && userdata.data.avatar}`} className="rounded-circle" alt="Cinque Terre" />
                      </div>

                      <div className="text-center mb-3">
                      <h5>{userdata.data && userdata.data.first_name} {userdata.data && userdata.data.last_name}</h5>
                      </div>
                      <div className="row mb-3">
                      <div className="col-md-6">
                        <a><h6>Company: {userdata.ad && userdata.ad.company}</h6></a>
                      </div>

                      <div className="col-md-6">
                        <a><h6>{userdata.data && userdata.data.email}</h6></a>
                      </div>
                      </div>

                      <div className="col mb-2">
                      <p className="font-weight-normal">{userdata.ad && userdata.ad.text}</p>
                      </div>
                      <div className="col mb-2">
                      <a href={userdata.ad && userdata.ad.url}
                      className="font-weight-normal">{userdata.ad && userdata.ad.url}</a>
                      </div>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}