import React from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
 
} from "mdbreact";

function Result({ result, openPopup }) {
  
  return (
    <MDBCol onClick={openPopup} lg="4" md="6" className="mb-lg-0 mt-5">
      <MDBCard className="align-items-center mt-3">
        <MDBCardImage
          src={result.Poster}
          top
          alt="sample photo"
          overlay="white-slight"
          width="400px"
          height="350px"
        />
        <MDBCardBody className="text-center minh">
          <MDBCardTitle>
            <strong>
              <a href="#!">{result.Title + " (" + result.Year + ") "}</a>
            </strong>
          </MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default Result;
