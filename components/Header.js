import PropTypes from 'prop-types';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <ul>
      <li>
        <div className="title">
          <div className="inner">
            <h1>My name's Chelsi.</h1>
            <h2>Frontend developer and artist.</h2>
          </div>
        </div>
      </li>
      <li>
        <div className="content">
          <h2>Interactive experiences and visual storytelling</h2>
        </div>
      </li>
    </ul>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
};

export default Header;
