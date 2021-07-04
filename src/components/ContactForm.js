import React, { useState } from 'react';
import styled from 'styled-components';

const ContactFormStyles = styled.div`
width:100%;
.form__group{
    width;100%;
    margin-bottom:2rem;
}
label{
    font-size:1.8rem;
}
input,
textarea{
    width:100%;
    font-size:2rem;
    padding:1.2rem;
    color:var(--gray-1);
    background-color:var(--deep-dark);
    outline:none;
    border:none;
    border-radius:8px;
    margin-top:1rem;
}
textarea{
    min-height:250px;
    resize:vertical;
    margin-bottom:2rem;
}
button[type='submit']{
background-color:var(--gray-1);
color:var(--black);
font-size:2rem;
display:inlin-block;
outline:none;
padding:1rem 4rem;
border-radius:8px;
cursor:pointer;
}`;

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <ContactFormStyles>
      <form>
        <div className="form__group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your email
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your messagee
            <textarea
              type="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">send</button>
      </form>
    </ContactFormStyles>
  );
}

export default ContactForm;
