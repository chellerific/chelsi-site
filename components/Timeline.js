import PropTypes from 'prop-types';
import Tab from './Tab';

class Timeline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activetab: this.props.children[0].props.label
    };
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab }
    } = this;

    return (
      <div className="timeline">
        <ol className="tab-list">
          {children.map(child => {
            const { label } = child.props;

            return <Tab activeTab={activeTab} key={label} label={label} onClick={onClickTabItem} />;
          })}
        </ol>
        <div className="tab-content">
          {children.map(child => {
            if (child.props.label !== activeTab) {
              return undefined;
            } else {
              return child.props.children;
            }
          })}
        </div>
      </div>
    );
  }
}
Timeline.PropTypes = {
  children: PropTypes.instanceOf(Array).isRequired
};

export default Timeline;
