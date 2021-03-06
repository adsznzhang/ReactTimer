var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Timer App</li>
            <li>
              <IndexLink to="/" activeClassName="active-link">Set Time</IndexLink>
            </li>
            <li>
              <Link to="/Countdown" activeClassName="active-link">Count Down</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">App created by <a href="https://github.com/adsznzhang" target="_blank">zhangzhen</a></li>
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = Nav;
