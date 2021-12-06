import React, { useState, useEffect } from "react";

const AddUser = (props) => {
  const [formValue, setFormValue] = useState({});

  const onChangeValue = (type, event) => {
    if (["title", "first", "last"].includes(type)) {
      const userName = { ...formValue?.name, [type]: event.target.value };
      setFormValue({
        ...formValue,
        name: userName,
      });
    } else {
      setFormValue({ ...formValue, [type]: event?.target?.value });
    }
  };

  const submitUserData = () => {
    props.submitUser(formValue);
  };

  return (
    <div className="container">
      <div className="close-button" onClick={props.closeModal}>
        x
      </div>
      <h2>Add User</h2>
      <div className="input-field-container">
        <div className="label">Title</div>
        <input
          value={formValue?.name?.title}
          onChange={(event) => onChangeValue("title", event)}
        />
      </div>
      <div className="input-field-container">
        <div className="label">First Name</div>
        <input
          value={formValue?.name?.first}
          onChange={(event) => onChangeValue("first", event)}
        />
      </div>
      <div className="input-field-container">
        <div className="label">Last Name</div>
        <input
          value={formValue?.name?.last}
          onChange={(event) => onChangeValue("last", event)}
        />
      </div>
      <div className="input-field-container">
        <div className="label">Email</div>
        <input
          value={formValue.email}
          onChange={(event) => onChangeValue("email", event)}
        />
      </div>
      <div className="input-field-container">
        <div className="label">User Name</div>
        <input
          value={formValue.username}
          onChange={(event) => onChangeValue("username", event)}
        />
      </div>
      <div className="input-field-container">
        <div className="label">Password</div>
        <input
          value={formValue.password}
          type="password"
          onChange={(event) => onChangeValue("password", event)}
        />
      </div>
      <div className="input-field-container">
        <div className="label">DOB</div>
        <input
          value={formValue.dob}
          onChange={(event) => onChangeValue("dob", event)}
        />
      </div>
      <div className="input-field-container">
        <div className="label">Phone Number</div>
        <input
          value={formValue.phone}
          onChange={(event) => onChangeValue("phone", event)}
        />
      </div>

      <div className="button" onClick={submitUserData}>
        Submit
      </div>
    </div>
  );
};

export default AddUser;
