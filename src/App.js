import React, {Component} from "react"

import './style.css';
/**
  Example taken from the course https://scrimba.com/g/glearnreact
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        }) 
    }
    
    render() {
        return (

            <div>
                <div class="container w-container">
                <h1 class="titulo-form">React Travel Form</h1>
                <div class="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" class="form">
                        <div class="w-row">
                            <div class="w-col w-col-6"><label for="name" class="field-label-3">Firts Name</label>
                                
                                <input 
                                    name="firstName" 
                                    value={this.state.firstName} 
                                    onChange={this.handleChange} 
                                    placeholder="First Name" 
                                    class="text-field-3 w-input"
                                />

                            </div>
                            <div class="w-col w-col-6"><label for="email" class="field-label-4">Last Name</label>
                                
                                <input 
                                    name="lastName" 
                                    value={this.state.lastName}
                                    onChange={this.handleChange} 
                                    placeholder="Last Name"
                                    class="text-field-4 w-input"
                                />

                            </div>
                        </div>
                        <div class="columns-2 w-row">
                            <div class="w-col w-col-3"><label class="field-label-2">Age</label>

                                <input 
                                    name="age" 
                                    value={this.state.age}
                                    onChange={this.handleChange} 
                                    placeholder="Age" 
                                    class="text-field-2 w-input"
                                />

                            </div>
                            <div class="column w-clearfix w-col w-col-9"><label class="radio-button-field-2 w-radio">
                                
                                    <input 
                                        type="radio" 
                                        name="gender"
                                        value="male"
                                        checked={this.state.gender === "male"}
                                        onChange={this.handleChange}
                                        class="w-form-formradioinput w-radio-input"

                                    />

                                <span class="radio-button-label-2 w-form-label">Male</span></label><label class="radio-button-field w-radio">

                                <input 
                                        type="radio" 
                                        name="gender"
                                        value="female"
                                        checked={this.state.gender === "female"}
                                        onChange={this.handleChange}
                                        class="w-form-formradioinput w-radio-input"
                                    />
                                <span class="radio-button-label w-form-label">Female</span></label>

                            </div>
                        </div>
                        <div class="columns w-row">
                            <div class="w-col w-col-7">
                            <label class="field-label-5">Please Choose a destination</label>
                            
                            <select 
                                    value={this.state.destination} 
                                    name="destination" 
                                    onChange={this.handleChange}
                                    class="select-field w-select" >
                                    <option value="">-- Select one --</option>
                                    <option value="germany">Germany</option>
                                    <option value="norway">Norway</option>
                                    <option value="north pole">North Pole</option>
                                    <option value="south pole">South Pole</option>
                                </select>

                            </div>
                            <div class="w-col w-col-5"></div>
                        </div>
                        <label class="field-label">Your dietary restrictions</label>
                        <div class="div-block-2 w-clearfix">
                            <label class="w-checkbox checkbox-field">
                                <input 
                                        type="checkbox"
                                        name="isVegan"
                                        onChange={this.handleChange}
                                        checked={this.state.isVegan}
                                        class="w-checkbox-input"
                                    />
                                <span class="checkbox-label w-form-label">Vegan?</span>
                            </label>
                                <label class="w-checkbox checkbox-field-2">
                                    
                                    <input 
                                        id="checkbox-3"
                                        class="w-checkbox-input"
                                        type="checkbox"
                                        name="isKosher"
                                        onChange={this.handleChange}
                                        checked={this.state.isKosher}
                                    />

                                    <span class="checkbox-label-2 w-form-label">Kosher?</span>
                                </label>
                            <label class="w-checkbox checkbox-field-3">
                                    
                                    <input 
                                        class="w-checkbox-input"  
                                        id="checkbox-2"  
                                        type="checkbox"
                                        name="isLactoseFree"
                                        onChange={this.handleChange}
                                        checked={this.state.isLactoseFree}
                                    />
                                    <span class="checkbox-label-3 w-form-label">Lactose Free?</span>

                            </label>
                        </div>
                        <input type="submit" value="Submit" data-wait="Please wait..." class="submit-button w-button"/>
                    </form>
                    <div class="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div class="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                </div>
                <div class="div-block-4">
                    <div class="w-row">
                        <div class="w-col w-col-6">
                            <h4 class="heading">Entered information</h4>
                            <div class="w-layout-grid grid">
                            <p class="paragraph">Your name:</p>
                            <p class="paragraph-2">{this.state.firstName} {this.state.lastName}</p>
                            <p class="paragraph">Your age:</p>
                            <p class="paragraph-2">{this.state.age}</p>
                            <p class="paragraph">Your gender:</p>
                            <p class="paragraph-2">{this.state.gender}</p>
                            <p class="paragraph">Your destination:</p>
                            <p class="paragraph-2">{this.state.destination}</p>
                            </div>
                        </div>
                        <div class="w-col w-col-6">
                            <p class="paragraph-2 dietary-restric">Your dietary restrictions:</p>
                            <div class="w-layout-grid grid">
                            <p class="paragraph">Vegan:</p>
                            <p class="paragraph-2"> {this.state.isVegan ? "Yes" : "No"}</p>
                            <p class="paragraph">Kosher:</p>
                            <p class="paragraph-2">{this.state.isKosher ? "Yes" : "No"}</p>
                            <p class="paragraph">Lactose Free:</p>
                            <p class="paragraph-2">{this.state.isLactoseFree ? "Yes" : "No"}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="w-container">
                <p class="paragraph-3"><a href="http://damian.epizy.com/" target="_blank" class="link">Damian Santilli</a></p>
                </div>
            </div>


        )
    }
}


export default App
