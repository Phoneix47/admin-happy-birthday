import { useState } from 'react';
import axios from 'axios';
import './App.css';
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from 'mdb-react-ui-kit';

const App = () => {
  async function submit() {
    console.log('btn');
    try {
      const res = await axios.put(
        'https://bday-wish.onrender.com/api/wish/wish/634125e1fd39a9e66b8a0802',
        {
          name: name,
          imagePath: base64,
        }
      );

      console.log(res);
    } catch (error) {
      console.group(error);
    }
  }

  const [name, setName] = useState('');
  const [base64, setBase64] = useState('');
  const [data, setData] = useState({});

  console.log(name);
  console.log(base64);

  function handleBase64(e) {
    let file = e.target.files[0];

    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setBase64(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{ width: '185px' }}
                alt="logo"
              />
              <h4 className="mt-1 mb-5 pb-1">
                Make Someone Birthday Special
              </h4>
            </div>

            <p>Please Enter Details</p>

            <MDBInput
              onChange={(e) => setName(e.target.value)}
              wrapperClass="mb-4"
              label="Name"
              id="form1"
              type="text"
            />
            <MDBInput
              onChange={(e) => handleBase64(e)}
              wrapperClass="mb-4"
              label="Image"
              id="form2"
              type="file"
            />

            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn
                className="mb-4 w-100 gradient-custom-2"
                onClick={submit}
              >
                Submit
              </MDBBtn>
              <a className="text-muted" href="#!"></a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              {/* <p className="mb-0">Don't have an account?</p> */}
              {/* <MDBBtn
                outline
                className="mx-2"
                color="danger"
              ></MDBBtn> */}
            </div>
          </div>
        </MDBCol>

        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">Lets Make Birthdays Speical</h4>
              <p class="small mb-0">
                This site is to make peoples birthday special. You
                this site for your personal. You are responsible for
                all the data you enter. this site wont be responsible
                if someone complaint about his/her pic on this site.{' '}
              </p>
            </div>

            <a
              style={{ textAlign: 'center' }}
              href="https://phoneix47.github.io/HappyBirthday/"
            >
              Go to website
            </a>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default App;
