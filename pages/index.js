import ReactFullpage from '@fullpage/react-fullpage';
import Head from 'next/head';
import stylesheet from 'styles/main.scss';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

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
      sectionsColor: [...originalColors]
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
  }

  render() {
    return (
      <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
        {/* <Navbar /> */}
        <ReactFullpage
          navigation
          onLeave={this.onLeave.bind(this)}
          sectionsColor={this.state.sectionsColor}
          render={comp =>
            console.log('render prop change') || (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <div className="slide">
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
                </div>
                <div className="section">
                  <div className="slide" />
                  <div className="slide">slide 2 </div>
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
