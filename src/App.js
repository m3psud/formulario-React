import React from "react";

 export default class myApp extends React.Component{
     constructor(){
      super()

      this.state = {
        firstName:"",
        lastName:"",
        age:"",
        gender:"",
        form:{}
       }
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit= this.handleSubmit.bind(this);
     }
      handleChange(event){
        const {name, value} = event. target
       // this.setState({ [event.target.name] : event.target.value })
        this.setState({ [name] : value})

      }
      handleSubmit(event){
        event.preventDefault()

        const {form, ...stateData} = this. state
        this.setState({ form: stateData})
        console.log(stateData)
      }
     
  render (){
    return (
      <div>
        <fom onSubmit={this.handleSubmit}>
        <input
          name ="firstName"
          value={this.state.firstName}
          onChange={this. handleChange}
          placeholder= "First Name"

        />
        <br />

        <input
          name="lastName"
          value={this.state.lastName}
          onChange={this. handleChange}
          placeholder= "Last Name"

        />
        <br />

        <input
          name="age"
          value={this.state.age}
          onChange={this. handleChange}
          placeholder= "Age"

        />

         <label>
          <input
          type="radio"
          name="gender"
          value="male"
          checked={this.state.gender === "male"}
          onChange={this. handleChange}
          />{" "}
          Male
         </label>

         <br />

         <label>
          <input
          type="radio"
          name="gender"
          value="female"
          checked={this.state.gender === "female"}
          onChange={this. handleChange}
          />{" "}
          Female
         </label>

         <br />
          <button type="submit">Submit</button>


        </fom>
         <br />
         <h2>Entered information</h2>
         <p>
          Your name={this.state.firstName} {this.state.lastName}
         </p>

         <p> Your age={this.state.age}  </p>
      
         <p> Your gender={this.state.gender}  </p>

         <br />
         <h2>Submit information</h2>
         <p>
          Your name={this.state.firstName} {this.state.lastName}
         </p>

         <p> Your age={this.state.age}  </p>
      
         <p> Your gender={this.state.gender}  </p>
      </div>
      
    )
  }
 }
