import PropTypes from 'prop-types';

const Navbar = props => (
  <div
    className="navbar"
    style={{
      position: 'fixed',
      top: 0,
      zIndex: 100
    }}
  >
    <ul>
      <li>
        <button>About</button>
        <button>Contact</button>
      </li>
    </ul>

    {/* <nav>
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
    </nav> */}
  </div>
);

Navbar.propTypes = {
  onChangeTheme: PropTypes.func
};

export default Navbar;
