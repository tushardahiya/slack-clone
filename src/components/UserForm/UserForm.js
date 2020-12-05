import { TextField } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';

import "./UserForm.css";


const useStyles = (theme) => ({
    root: {
        "& .MuiTextField-root": {
          margin: theme.spacing(1),
          width: "25ch",
          
        }
        
    
    
      }
  });


class UserForm extends Component {
  state = {
    userData: {
      firstName: "",
      lastName: "",
      bio: "",
      quote: "",
      instagram: "",
      facebook: "",
      twitter: "",
      snapchat:""
    }
    
  };

  changeHandler = (input) => (event) => {
    event.preventDefault();
    const updateduserData = {
      ...this.state.userData
    };
    updateduserData[input] = event.target.value;

    this.setState({ userData:updateduserData } , ()=> {console.log(this.state.userData);} );
    
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state.userData);
    
    swal({
      title:"SUBMITTED",
      text:`
      First Name : ${this.state.userData.firstName}
      Last Name : ${this.state.userData.lastName}
       About You: ${this.state.userData.bio}
       What You Live By : ${this.state.userData.quote}
       FaceBook : ${this.state.userData.facebook}
       Instagram : ${this.state.userData.instagram}
       Twitter : ${this.state.userData.twitter}
       SnapChat : ${this.state.userData.snapchat}
      `,
      icon: "success",
      button:"Let's Go Ahead"
    });

  };

  render() {
    const { classes } = this.props;

    return (
      <div className="wrapper">
      <Card className="form-wrapper">
        <form className={classes.root} onSubmit={this.submitHandler} noValidate>
          <h2 style={{ color: '#f31276' }}>Let's get you started</h2>
          <Grid container spacing={12} >
          <Grid  item xs={6}>
            <TextField
              label="First Name"
              variant="outlined"
              onChange={this.changeHandler("firstName")}
              margin="dense"
              color="secondary"
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
              className="lastname"
              label="Last Name"
              variant="outlined"
              onChange={this.changeHandler("lastName")}
              margin="dense"
              color="secondary"
            />
            </Grid>
          </Grid>
          <div>
            <TextField
              className="bio"
              label="Tell us about yourself"
              multiline
              color="secondary"
              rows="2"
              style = {{width: 440}}
              variant="outlined"
              onChange={this.changeHandler("bio")}
            />
          </div>
          <div>
            <h4 style={{ color: '#f31276' }}>A saying you live by</h4>
            <TextField
              className="quote"
              variant="filled"
              margin="dense"
              color="secondary"
              style = {{width: 440}}
              onChange={this.changeHandler("quote")}
            />
          </div>
          <h4 style={{ color: '#f31276' }}>Your Social Media Presence</h4>
          <Grid container spacing={12}>
              <Grid item xs={6}>
            <TextField
              className="facebook"
              label="FaceBook"
              variant="outlined"
              margin="dense"
              color="secondary"
              onChange={this.changeHandler("facebook")}
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
              className="instagram"
              label="Instagram"
              variant="outlined"
              margin="dense"
              color="secondary"
              onChange={this.changeHandler("instagram")}
            />
            </Grid>
            </Grid>
            <Grid container spacing={12}>
            <Grid item xs={6}>
            <TextField
              className="twitter"
              label="Twitter"
              variant="outlined"
              margin="dense"
              color="secondary"
              onChange={this.changeHandler("twitter")}
            />
            </Grid>
            
            <Grid item xs={6}>
            <TextField
              className="snapchat"
              label="SnapChat"
              color="secondary"
              variant="outlined"
              margin="dense"
              onChange={this.changeHandler("snapchat")}
            />
            </Grid>
            
          </Grid>
          <div>
            <button className="submit-button" type="submit">Submit</button>
          </div>
        </form>
      </Card>
      </div>
    );
  }
}

export default withStyles(useStyles)(UserForm);
