import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../containers/Home/actions'

const Form = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    props.submit({ username, password })
  };
  return (
    <form className="form-component">
      <div>Hello {props.username}</div>
      <input name="username" type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
      <input name="password" type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type='button' onClick={() => handleSubmit()}>
        <div>submit</div>
      </button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  username: state.home.username
});

const mapDispatchToProps = (dispatch) => ({
  submit: (data) => dispatch(updateUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);