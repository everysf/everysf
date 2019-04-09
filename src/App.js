import React, { Component } from 'react';
import styled from 'styled-components'

const Wrap = styled.div`

  min-height: 100vh;
  min-width: 100vw;
  // background-color: ${props => props.theme.primary};
  display: flex;
  justify-content: center;

  h1 {
    font-size: 3.5em;
    color: ${props => props.theme.secondary};
    line-height: 1.3em;
    z-index: 20;
    // min-width: 60vw;
    // padding: 60px 40px 40px 60px;
  }

  .mustard{

    font-size: 40em;

    @keyframes wiggle {
      0% {
        margin: 0;
        transform: skewY(-5deg);
      }
      50% {
        transform: skewY(0deg);
      }0
      100% {
        margin: 900px;
        transform: skewY(5deg);
      }
    }

    animation-name: wiggle;
    animation-duration: 1s;
    aniation-repeat: infinite;



  }

  @media (max-width: 800px) {
   
    h1 {
      font-size: 2em;
    }

  }

`

const Kevin = styled.div`

  min-width: 50vw;
  min-height: 100vh;
  z-index: 10;
  position: fixed;
  right: 0;
  background-image: url(img/kevin.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 5;

  @media (max-width: 800px) {
   
    min-width: 100vw;
    opacity: .3;
    margin: 0;
    right: 50%;
    transform: translateX(50%);

  }

`

function BioContent(props) {
  return (
    <h1 id="bioCopy" className="bookmania"><span className="bookalt3">K</span>ev<span className="">i</span>n <span className="bookalt5">M</span>acaraeg is a de<span className="bookalt1">s</span>igner, develo<span className="bookalt3">p</span>er, <span className="bookalt1">c</span>on<span className="bookalt1">t</span>ent <span className="bookalt3">w</span>riter, and <span className="bookalt1">m</span>usician that is o<span className="bookalt1">b</span>ssesse<span className="bookalt1">d</span> <span className="bookalt3">w</span>ith grap<span className="bookalt1">h</span>ics, <span className="bookalt3">p</span>ro<span className="bookalt1">d</span>ucts, <span className="bookalt1">b</span>randing, and an<span className="bookalt2">y</span>thin<span className="bookalt2">g</span> c<span className="bookalt2">r</span>ea<span className="bookalt2">t</span>ive. <span className="bookalt1">H</span>e can <span className="bookalt1">b</span>e <span className="bookalt4">f</span>ound in t<span className="bookalt2">h</span>e wi<span className="bookalt1">l</span>d ro<span className="bookalt4">a</span><span className="bookalt1">m</span>ing the s<span className="bookalt2">t</span>reets of <span className="bookalt1">S</span>an <span className="bookalt3">F</span>ra<span className="bookalt1">n</span>cisc<span className="bookalt3">o</span> searching for ins<span className="bookalt3">p</span>iration.
    </h1>
  )
}

const Content = styled.div`

  position: absolute;
  left: 0;  
  z-index: 200;
  max-width: 55vw;
  margin: 5px 0 0 65px;

  @media (max-width: 800px) {
    margin: 0;
    padding: 10px;
    max-width: 100%;
    margin: 0;

  }
  

`

const LandingCopy = styled.div`

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 20;

  h1 {
    background: url(img/pattern-01.svg) no-repeat;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-size: cover;
    background-position: center;
  }

`

const LandingCopyAlt = styled.div`

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 30;
  margin: -2px 0px 0px 62px;
  position: fixed;
  left: 0;
  max-width: 55vw;
  text-shadow: 2px 2px 0px ${props => props.theme.primary};

  @media (max-width: 800px) {
    margin: 0;
    max-width: 100%;
    display: none;
  }

`

const Resume = styled.div`
  z-index: 200;

  min-height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.secondary};
  background: url(img/deco.svg);
  background-position: center;
  margin-bottom: 60px;

  a {
    color: ${props => props.theme.secondary};
    font-size: 2em;
    margin: 15px;
    padding: 10px 15px;
    border: 1px solid ${props => props.theme.secondary};
    text-decoration: none;
    transition: .2s ease;
    background-color: ${props => props.theme.primary};
  }

  a:hover {
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.primary};
  }

  .buttons {
    display: flex;
  }

  @media (max-width: 800px) {
    min-height: 700px;
    margin: 0;
    max-width: 100%;

    .buttons {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      min-height: 400px;
    }

    a {
      font-size: 1.5em;
      overflow: auto;
    }

    .designCoin {
      margin-bottom: 50px;
    }

  }

`

// const Progress = styled.div`

//   position: fixed;
//   top: 0;
//   right: 40;
//   width: 100vw;
//   background: #f2928f;
//   height: 0;
//   z-index: 50;
//   mix-blend-mode: hue;

// `

class App extends Component {
  state = {
  }

  colors = {
    primary: "#41478a",
    secondary: "#f2928f"
  };

  componentDidMount() {
    window.onscroll = function () {
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrolled = (winScroll / height) * 100;

      const barCont = document.getElementById("progressBarCont");
      const landingCopy = document.getElementById("landingCopy");
      const ketchup = document.getElementById("bioCopy");

      console.log(winScroll)
      // console.log(scrolled)

      ketchup.style.transition =".5s ease";
      landingCopy.style.transition =".5s ease";

      const skewValue = 2

      landingCopy.style.opacity = (100 - scrolled);

      if (winScroll > 60) {
        landingCopy.style.opacity = 0;
      } else {
        landingCopy.style.opacity = 1;
      }

      if (scrolled > 60) { 
        ketchup.style.display = "none";
      } else if (scrolled > 30) {
        ketchup.style.opacity = 0;

      } else {
        ketchup.style.transform = "skewY(" + scrolled* .5 + "deg)";
        ketchup.style.opacity = 1;
        ketchup.style.display = "block";
      }
    };
  }

  render() {
    return (
      <Wrap theme={this.colors}>
        <Content>
          <LandingCopyAlt theme={this.colors}>
            <BioContent />
          </LandingCopyAlt>
          <LandingCopy id="landingCopy">
            <BioContent className="mustard"/>
          </LandingCopy>
          <Resume theme={this.colors}>
            <div className="buttons">
              <div className="designCoin"><a href="https://designcoin.io/">designcoin.io</a></div>
              <div className="linkedIn"><a href="https://linkedin.com/in/sandiegokevin">linkedIn</a></div>
            </div>
          </Resume>
        </Content>
        <Kevin />
      </Wrap>
    );
  }

}

export default App;
