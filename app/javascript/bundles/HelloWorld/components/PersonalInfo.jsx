import React from 'react';
import { Formik, Field, Form } from "formik";

export default class PersonalInfo extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row justify-content-center">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-lg-6">
              <div className="my-4 text-center">
                <h2>Thank you for joining PostCo</h2>
                  We are excited to have you on board
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-lg-6">
              <div className="card">
                <div className="card-body">
                  <Formik
                    initialValues={{ name: "", email: "" }}
                  >
                    <Form>
                      <div className="form-group">
                        <Field name="name" type="text" className="form-control"/>
                      </div>
                      <div className="form-group">
                       <Field name="email" type="email" className="form-control"/>
                      </div>
                      <button
                        className="btn btn-primary w-100"
                        type="submit"
                      >
                        Get Started
                      </button>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}