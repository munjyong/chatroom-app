import React, { Component } from 'react'

class UsernameForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    let button = document.querySelector('.button');
    let buttonText = document.querySelector('.tick');

    const tickMark = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

    buttonText.innerHTML = "Submit";

    button.addEventListener('click', function () {

      if (buttonText.innerHTML !== "Submit") {
        buttonText.innerHTML = "Submit";
      } else if (buttonText.innerHTML === "Submit") {
        buttonText.innerHTML = tickMark;
      }
      this.classList.toggle('button__circle');
    });
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.username)
  }

  onChange(e) {
    this.setState({ username: e.target.value })
  }

  render() {

    const styles = {
      usernameFormContainer: {
        fontFamily: 'Montserrat, sans-serif',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'black',
        height: '100%',
        width: '100%',
        justifyContent: 'center'
      },
      h1: {
        padding: '1em',
        fontSize: '6em'
      },
      h2: {
        paddingBottom: '1em',
        fontSize: '3em'
      }

    }

    return (
      <div style={styles.usernameFormContainer} >
        <h1 style={styles.h1}>Welcome!</h1>
        {/* <h2 style={styles.h2}>What is your username?</h2> */}
        {/* <div className='input-field'>
          <form onSubmit={this.onSubmit}>
              <input
                className='input-text'
                type="text"
                // placeholder="Your full name"
                onChange={this.onChange}
                id="name"
                required
              />
              <input type="submit" />
          </form>
          <label className='input-label' for="name">What is your name?</label>
        </div> */}

        <form onSubmit={this.onSubmit}>
          <div className="input-field">
            <input className='input-text' type="text" onChange={this.onChange} id="name" required />
            <label className='input-label' for="name">What is your name?</label>
            <div class="button">
              <div class="container">
              <button type="submit" className='tick' />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default UsernameForm