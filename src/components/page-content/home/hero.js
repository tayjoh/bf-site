import React from 'react'
import styled from 'styled-components'
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
  const [state, handleSubmit] = useForm("xvodgqgn");
  if (state.succeeded) {
      return <p className="bodyText">Thanks for joining!</p>;
  }
  return (
    <Form id="signup" onSubmit={handleSubmit}>
      <Input
        id="email"
        type="email" 
        name="email"
        placeholder="your email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <Button 
        backgroundColor="#2f64ec" 
        color="white" 
        type="submit" 
        disabled={state.submitting}
      >
        Sign up
      </Button>
    </Form>
  );
}

const Hero = props => (
  <>
    <Headline className="sectionTitle">Future proof your payments</Headline>
    <BodyText className="bodyText"><strong>Borderfree</strong> is a low code, embedded payment 
      infrastructure that enables marketplaces and enterprises to create a seamless 
      payment experience while dramatically reducing the cost and complexity of payments.
    </BodyText>
    <ContactForm />
  </>
)

export default Hero

const Headline = styled.h1`
  font-size: 32px;

  @media (min-width: 670px) {
    max-width: 420px;
    font-size: 40px;
  }
`
const BodyText = styled.p`
  margin: 25px 0;
  @media (min-width: 670px) {
    margin: 25px 56% 40px 0;
  }
`

const Form = styled.form`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  > * {
    margin-right: 20px;
  }
`

const Input = styled.input`
  font-size: 17px;
  padding: 5px 20px 8px 13px;
  background-color: #f6f9fc;
  border-radius: 4px;
  -webkit-box-shadow: 0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);
  box-shadow: 0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);
  text-decoration: none;
  border: none;
  outline: none;
  webkit-transition: background-color .1s ease-in,color .1s ease-in;
  transition: background-color .1s ease-in,color .1s ease-in;

  &:hover,
  &:active,
  &:focus {
    background-color: white;
  }
`

const Button = styled.button`
  white-space: nowrap;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  -webkit-box-shadow: 0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);
  box-shadow: 0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);
  background-color: ${props => props.backgroundColor || "white"};
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${props => props.color || "#2f64ec"};
  text-decoration: none;
  -webkit-transition: all .15s ease;
  transition: all .15s ease;

  &:hover,
  &:active,
  &:focus {
    color: ${props => ( props.color ? "white" : "#4d79eb" )};
    background-color: ${props => ( props.backgroundColor ? "#4d79eb" : "white")};
    -webkit-transform:translateY(-1px);
    transform:translateY(-1px);
    -webkit-box-shadow:0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3),0 -6px 16px -6px rgba(0,0,0,.025);
    box-shadow:0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3),0 -6px 16px -6px rgba(0,0,0,.025);
    -webkit-box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08);
    box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08)
  }


`