import React from 'react';
import PersonalInfo from './PersonalInfo';

const initialValues = {
  first_name: "",
  last_name: "",
  email_address: "",
  contact_number: "",
}

export default class AgentApplication extends React.Component {
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = {
      page: 0,
      formValues: {...initialValues}
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <PersonalInfo />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}