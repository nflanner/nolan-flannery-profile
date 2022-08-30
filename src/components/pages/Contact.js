import React from 'react';

export default function Contact() {
  return (
    <div className='row'>
      <div className='col-8'>
        <form>
          <div className="form-group">
            <label for="inputName">Name</label>
            <input type="email" className="form-control" id="inputName" placeholder="Enter name" />
          </div>
          <div className="form-group">
            <label for="inputEmail">Email address</label>
            <input type="email" className="form-control" id="inputEmail" placeholder="Enter email" />
            <small className="form-text text-muted">I will never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="formText">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
