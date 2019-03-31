import PropTypes from 'prop-types';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="content">
      <div className="inner">
        <h1>Chelsi Nolasco</h1>
        <p>Developer. Artist.</p>
      </div>
    </div>
    <nav>
      <ul className="options">
        <li>
          <a href="https://github.com/chellerific">Github</a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('experience');
            }}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('projects');
            }}
          >
            Projects
          </a>
        </li>
      </ul>
    </nav>
    <ul className="info-options">
      <li>
        <a
          href="javascript:;"
          onClick={() => {
            props.onOpenArticle('about');
          }}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="javascript:;"
          onClick={() => {
            props.onOpenArticle('contact');
          }}
        >
          Contact
        </a>
      </li>
    </ul>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
};

export default Header;
