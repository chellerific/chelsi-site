import ReactFullpage from '@fullpage/react-fullpage';
import Head from 'next/head';
import stylesheet from 'styles/main.scss';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

// import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true

const originalColors = ['#282c34', '#ff5f45', '#0798ec'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
      sectionsColor: [...originalColors],
      fullpages: [
        {
          text: 'section 1'
        },
        {
          text: 'section 2'
        }
      ]
    };
    this.handleOpenArticle = this.handleOpenArticle.bind(this);
    this.handleCloseArticle = this.handleCloseArticle.bind(this);
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      });
    }, 350);
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      });
    }, 350);
  }

  onLeave(origin, destination, direction) {
    console.log('onLeave', { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  changeTheme() {
    const newColors = this.state.sectionsColor[0] === 'yellow' ? [...originalColors] : ['yellow', 'blue', 'white'];
    this.setState({
      sectionsColor: newColors
    });
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    const Menu = () => (
      <div
        className="menu"
        style={{
          position: 'fixed',
          top: 0,
          zIndex: 100
        }}
      >
        <ul>
          <li>
            <button onClick={() => this.changeTheme()}>Change colors</button>
          </li>
        </ul>
      </div>
    );

    return (
      <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
        <Menu />

        <ReactFullpage
          navigation
          onLeave={this.onLeave.bind(this)}
          sectionsColor={this.state.sectionsColor}
          render={comp =>
            console.log('render prop change') || (
              <ReactFullpage.Wrapper>
                {fullpages.map(({ text }) => (
                  <div key={text} className="section">
                    <h1>{text}</h1>
                    <Head>
                      <title>Chelsi Nolasco</title>
                      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
                    </Head>

                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

                    <div id="wrapper">
                      <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
                      <Main
                        isArticleVisible={this.state.isArticleVisible}
                        timeout={this.state.timeout}
                        articleTimeout={this.state.articleTimeout}
                        article={this.state.article}
                        onCloseArticle={this.handleCloseArticle}
                      />
                      <Footer timeout={this.state.timeout} />
                    </div>

                    <div id="bg" />
                  </div>
                ))}
                <div className="section">
                  <div className="slide">hello slide 1</div>
                  <div className="slide">hello slide 2</div>
                  <div className="slide">hello slide 3</div>
                </div>
              </ReactFullpage.Wrapper>
            )
          }
        />
      </div>
    );
  }
}

export default App;
