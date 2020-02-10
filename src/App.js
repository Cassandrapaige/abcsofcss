import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.scss';
import Aa from './components/layouts/Aa'
import Bb from './components/layouts/Bb'
import Cc from './components/layouts/Cc'
import Dd from './components/layouts/Dd'
import Ee from './components/layouts/Ee'
import Ff from './components/layouts/Ff'
import Gg from './components/layouts/Gg'
import Hh from './components/layouts/Hh'
import Ii from './components/layouts/Ii'
import Jj from './components/layouts/Jj'
import Kk from './components/layouts/Kk'
import Ll from './components/layouts/Ll'
import Mm from './components/layouts/Mm'
import Nn from './components/layouts/Nn'
import Oo from './components/layouts/Oo'
import Pp from './components/layouts/Pp'
import Qq from './components/layouts/Qq'
import Rr from './components/layouts/Rr'
import Ss from './components/layouts/Ss'
import Tt from './components/layouts/Tt'
import Uu from './components/layouts/Uu'
import Vv from './components/layouts/Vv'
import Ww from './components/layouts/Ww'
import Xx from './components/layouts/Xx'
import Yy from './components/layouts/Yy'
import Zz from './components/layouts/Zz'

class App extends Component {
  render() {
    const repeat = (elem) => {
      let el = elem.repeat(2);
      let [x, y] = [el[0].toUpperCase(),el[1]];
      return `${x}${y}`;
  }
      
  const onKeypress = (e) => {
    console.log(e.key);
      if(e.key.length < 2 && /[a-zA-Z]/.test(e.key)) {
      window.location = `/${(repeat(e.key))}`
      }
      else {
        window.location = '/'
      }
  };
      
  window.addEventListener('keypress', onKeypress);
  return (
      <Router>
          <Fragment>
          <div className="container">
        <Switch>
          <Route exact path= '/' component = { Aa }/>
          <Route exact path= '/Aa' component = { Aa }/>
          <Route exact path= '/Bb' component = { Bb }/>
          <Route exact path= '/Cc' component = { Cc }/>
          <Route exact path= '/Dd' component = { Dd }/>
          <Route exact path= '/Ee' component = { Ee }/>
          <Route exact path= '/Ff' component = { Ff }/>
          <Route exact path= '/Gg' component = { Gg }/>
          <Route exact path= '/Hh' component = { Hh }/>
          <Route exact path= '/Ii' component = { Ii }/>
          <Route exact path= '/Jj' component = { Jj }/>
          <Route exact path= '/Kk' component = { Kk }/>
          <Route exact path= '/Ll' component = { Ll }/>
          <Route exact path= '/Mm' component = { Mm }/>
          <Route exact path= '/Nn' component = { Nn }/>
          <Route exact path= '/Oo' component = { Oo }/>
          <Route exact path= '/Pp' component = { Pp }/>
          <Route exact path= '/Qq' component = { Qq }/>
          <Route exact path= '/Rr' component = { Rr }/>
          <Route exact path= '/Ss' component = { Ss }/>
          <Route exact path= '/Tt' component = { Tt }/>
          <Route exact path= '/Uu' component = { Uu }/>
          <Route exact path= '/Vv' component = { Vv }/>
          <Route exact path= '/Ww' component = { Ww }/>
          <Route exact path= '/Xx' component = { Xx }/>
          <Route exact path= '/Yy' component = { Yy }/>
          <Route exact path= '/Zz' component = { Zz }/>
        </Switch>
        </div>
        </Fragment>
    </Router>
  );
}
}

export default App;
