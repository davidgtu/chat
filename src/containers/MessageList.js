import { connect } from 'react-redux';
import { MessageList } from '../components';

const mapStateToProps = (state) => ({
  messages: state.messages,
});

export default connect(mapStateToProps)(MessageList);