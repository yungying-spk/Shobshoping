import truckicon from "../picture/delivery-truck-truck-svgrepo-com.svg";
import AddressThai from "../commponent/addressform";
import Navbar from "../commponent/navbar";

import {
    FormInput,
    FormGroup,
    FormCheckbox,
    Button,
    Form,
  } from 'semantic-ui-react'
function Order() {
  return (
    <>
    <Navbar/>
    <section className="bg-blue-200 h-screen ">
      <div className=" flex   justify-start  items-center  gap-3 pl-20 ">
        <p className="  flex items-center justify-center text-center text-6xl   pt-10 font-bold">Order</p>
        <img className=" w-[70px] mt-10" src={truckicon} alt="" />
      </div>

      
        <section className=" flex justify-center gap-10 ">
          <div className=" w-[900px]">
        <Form  className=" bg-white h-[100%] w-[100%] p-10 rounded-xl">
        <h4 className="ui dividing header">Shipping Information</h4>
  <div className="field">
    <label>Name</label>
    <div className="two fields">
      <div className="field">
        <input type="text" name="shipping[first-name]" placeholder="First Name"/>
      </div>
      <div className="field">
        <input type="text" name="shipping[last-name]" placeholder="Last Name"/>
      </div>
    </div>
  </div>
  <div className="field">
    <label>Address</label>
    <div className="fields">
      <div className="  pl-2 w-[99%]">
        <input type="text" name="shipping[address]" placeholder="Address Detail"/>
      </div>
      
    </div>
  </div>
  
  <AddressThai/>
  <h4 className="ui dividing header">Payment Information</h4>
  <div className="fields pl-2">
    <label >Select your payment Method:</label>
    <div className="field">
    <div className="ui checkbox">
        <input type="checkbox" name="creditcard" tabindex="0" className=""/>
        <label>Cash</label>
      </div>
    </div>
    <div className="field">
      <div className="ui checkbox">
        <input type="checkbox" name="creditcard" tabindex="0" className=""/>
        <label>Credit Card</label>
      </div>
    </div>
    
  </div>
  <div className="field">
  <label>Card Type</label>
  <div className="field">
          <select className="ui fluid search dropdown" name="card[type]">
          <option value="" type="hidden">Select Card Type...</option>
            <option value="visa">Visa</option>
            <option value="vastercard">Master Card</option>
          
          </select>
        </div>
  </div>
  <div className="fields">
    <div className="seven wide field">
      <label>Card Number</label>
      <input type="text" name="card[number]" maxlength="16" placeholder="Card #"/>
    </div>
    <div className="three wide field">
      <label>CVC</label>
      <input type="text" name="card[cvc]" maxlength="3" placeholder="CVC"/>
    </div>
    <div className="six wide field">
      <label>Expiration</label>
      <div className="two fields">
        <div class="field">
          <select className="ui fluid search dropdown" name="card[expire-month]">
            <option value="">Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <div className="field">
          <input type="text" name="card[expire-year]" maxlength="4" placeholder="Year"/>
        </div>
      </div>
    </div>
  </div>

   
   <div className="ui segment">
    <div className="field">
      <div className="ui toggle checkbox">
        <input type="checkbox" name="gift" tabindex="0" className="hidden"/>
        <label>Do not include a receipt in the package</label>
      </div>
    </div>
  </div>
  <div className="flex  justify-center pt-10 " tabindex="0">
  <button className=" bg-green-300 p-4 rounded-xl">Submit Order</button></div>
        </Form>
          </div>
          
        </section>
      
    </section>
    </>
    
  )
}

export default Order;
