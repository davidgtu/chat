import { connect } from 'react-redux';
import { MessageInput } from '../components';
import { addMessage } from '../actions';

const mapDispatchToProps = {
  addMessage,
}

export default connect(null, mapDispatchToProps)(MessageInput);