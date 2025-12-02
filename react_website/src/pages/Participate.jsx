import React, { useState, useRef, useEffect } from "react";
import { Container, Form, Image, Row, Col, Button, Modal, Alert, FloatingLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import mike from "../assets/mice.png";
import tabla from "../assets/tabla.png";
import guitar from "../assets/guitar.png";

import {
  getUploadUrl,
  submitForm,
  checkValidEnquiry, verifyOTP,
  stateList,
  cityList,
} from "../api";

function Participate() {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);
  const [error, setError] = useState("");
  const [fileError, setFileError] = useState("");
  const [loading, setLoading] = useState(false);

  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [show, setShow] = useState(false);
  
  const [otpError, setOtpError] = useState("");  
  const [otpSuccess, setOtpSuccess] = useState("");
  const [resend, setResend] = useState(false);
  const [timer, setTimer] = useState(0);
  const openModal = () => {
    // setSelectedMentor(mentor);
    setShow(true);
 `` };
  const closeModal = () => setShow(false);

  const getState = async () => {
    let stateRes = await stateList();
    if (stateRes?.data) {
      setState(stateRes.data);
    }
  };

  const getCity = async (stateId) => {
    let cityRes = await cityList(stateId);
    if (cityRes?.data) {
      setCity(cityRes.data);
    }
  };

  const avoidAlphabets = (event) => {
    var k = event ? event.which : window.event.keyCode;
    if (k >= 48 && k <= 57) {
      return true;
    } else {
      event.preventDefault();
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    contact: "",
    stateId: "",
    cityId: "",
    address: "",
    pincode: "",
    other_roles: "",
    story: "",
    dream_remarks: "",
    how_to_know_about_this: "",
    i_confim: false,
    read_tnc: false,
    agree_tnc: false,
    verificationCode: "",
  });
  // Allowed file types
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "pdf",
    "doc",
    "video/mp4",
    "audio/mpeg",
    "video/x-ms-wmv",
    "webm",
    "mkv",
    "flv",
    "vob",
    "mov",
    "avi",
    "wmv",
    "yuv",
    "amv",
    "mp4",
    "mpg",
    "svi",
    "3gp",
    "3g2",
  ];
  const MAX_SIZE = 500 * 1024 * 1024; // 500 MB
  const [selectedValues, setSelectedValues] = useState([]);
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedValues((prev) => [...prev, value]);
    } else {
      setSelectedValues((prev) => prev.filter((v) => v !== value));
    }
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // console.log('handleChange', name, e.target.value, formData);
  };
  const isSubmitEnabled = formData.i_confim && formData.agree_tnc;

  const [uploadMediaFile, setUploadMediaFile] = useState(null);

  const fileUloadEvent = (file)=>{
    const selected = file; //e.target.files[0];
    setFileError(""); // reset
    if (!selected) return;
    console.log("fileType", selected.type);
    if (!allowedTypes.includes(selected.type)) {
      setFileError(
        "Only PDF, Word, WEBM, MP4, MP3, AVI, VOB, MKV, MOV, FLV, AMV, MPG, WMV, 3GP, 3G2, SVI files are allowed."
      );
      setUploadMediaFile(null);
      return;
    }

    if (selected.size > MAX_SIZE) {
      setFileError("File size must be less than 500 MB.");
      setUploadMediaFile(null);
      return;
    }
    setUploadMediaFile(selected);
  }

  const handleFileChange = (e) => {
    console.log("handleFileChange >>");
    fileUloadEvent(e.target.files[0]);
    // console.log('file >>', selected);
    // setFiles([...files, ...Array.from(e.target.files[0])]);
    // console.log('fileArr >>', files);
  };

  const handleDrag = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    // console.log("handleDrop >>");
    e.preventDefault();
    fileUloadEvent(e.dataTransfer.files[0]);
  };

  const onButtonClick = () => inputRef.current.click();
  const validateAge = (dob) => {
    if (!dob) return false;

    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    return age >= 18;
  };

  const validation = (values) => {
    const formErrors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    let hasError = false;
    if (
      !values.name ||
      values.name == "" ||
      !values.contact ||
      values.contact == "" ||
      !values.dob ||
      !values.story ||
      values.story == "" ||
      !uploadMediaFile ||
      uploadMediaFile == null ||
      values.cityId == "" ||
      !values.stateId || selectedValues.length == 0 || !selectedValues
    ) {
      formErrors.allError = "Mandatory fields are missing";
      hasError = true;
    }
    if (values.contact) {
      if (values.contact.length !== 10) {
        formErrors.contact = "Please enter a valid Contact";
        hasError = true;
      }
    }
    if (values.email && values.email != '') {
      if (!regex.test(values.email)) {
        formErrors.email = "Please enter a valid email";
        hasError = true;
      }
    }
    if (values.dob) {
      if (!validateAge(values.dob)) {
        formErrors.dob = "Age must be 18 or older";
        hasError = true;
      }
    }
    if (selectedValues.includes("Others")) {
      if (!values.other_roles || values.other_roles == "") {
        formErrors.other_roles = "Please enter other role";
        hasError = true;
      }
    }
    setError(formErrors);
    return hasError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOtpSuccess('');
    setOtpError('');
    if(timer > 0)return;

    let hasError = validation(formData);
    // console.log("hasError >>", hasError, formData, uploadMediaFile);
    try {
      if (!hasError) {
        if (!formData.i_confim || !formData.agree_tnc) {
          return;
        }
        setLoading(true);
        let validateBody = {
          contact: formData.contact,
          email: formData.email,
        };
        //check validate and sent otp here
        const validateRes = await checkValidEnquiry(validateBody);
        // console.log("validateRes >>", validateRes);

        if (validateRes.status == "success") {
          openModal();
          setTimer(60);
          setLoading(false);
        } //End of checkValidEnquiry
        else if (validateRes.status == "successWithVerified") {
          closeModal();
          setTimer(0);
          // console.log("call Final submit >>");
          setLoading(false);

          await finalSubmitWithVerification();
        }
        else {
          alert("Contact Number already exist");
          setError({ allError: "Contact Number already exist" });
        }
        setLoading(false);
      }
    } catch (error) {
      console.log("Catch Err >>", error);
      setError({ allError: error.message });
      alert(error.message);
      setLoading(false);
    }
  };

  const finalSubmit = async (e) => {
    e.preventDefault();
    setOtpSuccess('');
    setOtpError('');

    let hasError = validation(formData);
    // console.log("final Error >>", hasError, formData, uploadMediaFile);
    try {
      if (!hasError) {
        if (!formData.i_confim || !formData.agree_tnc || !formData.verificationCode || formData.verificationCode == '') {
          return;
        }
        setLoading(true);

        if(formData.verificationCode != ''){          
          let verificationBody = {
            contact: formData.contact,
            verificationCode: formData.verificationCode,
          };
          const verificationRes = await verifyOTP(verificationBody);  //replace with verify otp api 
          // console.log("verificationRes >>", verificationRes);

          if (verificationRes.status == "success") {  
            setOtpSuccess('OTP Verified');
            closeModal();
            // setLoading(false); return;
            await formProcess();
          } //End of checkValidEnquiry
          else {
            // alert("Invalid OTP");
            setOtpError(verificationRes.message);
          }
        }
        setLoading(false);
      }
    } catch (error) {
      console.log("Catch Err >>", error);
      setError({ allError: error.message });
      alert(error.message);
      setLoading(false);
    }
  };

  const finalSubmitWithVerification = async () => {
    setOtpSuccess('');
    setOtpError('');

    let hasError = validation(formData);
    // console.log("final Error >>", hasError, formData, uploadMediaFile);
    try {
      if (!hasError) {
        if (!formData.i_confim || !formData.agree_tnc) {
          return;
        }
        setLoading(true);
        await formProcess();
        setLoading(false);
      }
    } catch (error) {
      console.log("Catch Err >>", error);
      setError({ allError: error.message });
      alert(error.message);
      setLoading(false);
    }
  };

  const formProcess = async () => {    
    let videoUrl = "";
    const { uploadUrl, fileUrl } = await getUploadUrl(uploadMediaFile);
    console.log("s3 url >>", uploadUrl, " ::::", fileUrl);

    const uploadRes = await fetch(uploadUrl, {
      method: "PUT",
      headers: { "Content-Type": uploadMediaFile.type },
      body: uploadMediaFile,
    });
    console.log("uploadRes", uploadRes);
    videoUrl = fileUrl;
    if (uploadRes.status == 200) {
      let data = {
        name: formData.name,
        contact: formData.contact,
        email: formData.email,
        dob: formData.dob,
        stateId: formData.stateId,
        cityId: formData.cityId,
        address: formData.address,
        pincode: formData.pincode,
        story: formData.story,
        dream_remarks: formData.dream_remarks
          ? formData.dream_remarks
          : "",
        how_to_know_about_this: formData.how_to_know_about_this
          ? formData.how_to_know_about_this
          : "",
        interest_in_role: selectedValues.join(","),
        other_roles: formData.other_roles,
        videoUrl: videoUrl,
      };
      
      // console.log("data >>", data);
      const res = await submitForm(data);
      console.log("res >>", res);

      setLoading(false);
      if (res.status == "success") navigate("/thankyou");
      else {
        setError({ allError: res.message });
        alert(res.message);
      }
    }
  };

  useEffect(() => {
    if (state.length == 0) {
      getState();
    }
    if (formData.stateId) {
      getCity(formData.stateId);
    }
  }, [formData.stateId]);

  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(countdown);
  }, [timer]);


  return (
    <>
      {loading == true ? (
        <>
          <div className="loader">
            <div className="loader-spinner"></div>
          </div>
        </>
      ) : (
        ""
      )}
      <section className="sec sec-form">
        <Container className="mt-5">
          <div className="artist-card">
            <Image src={mike} alt="Mike" className="artist-card-element mike" />
            <Image
              src={tabla}
              alt="Tabla"
              className="artist-card-element tabla"
            />
            <Image
              src={guitar}
              alt="Guitar"
              className="artist-card-element guitar"
            />
            <Form className="artist-form" onSubmit={handleSubmit}>
              <header className="sec-head text-center mb-5">
                <h2 className="sec-title">
                  Havells mYOUsic <br></br>Submissions
                </h2>
                <p className="sec-sub-title">
                  At Havells mYOUsic, we believe that talent has no boundaries
                </p>
              </header>

              <Row>
                {error.allError && (
                  <p className="mt-2 text-sm text-danger-600">
                    ⚠️ {error.allError}
                  </p>
                )}
                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-medium">
                      Full Name <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-medium">
                      Contact ( Phone / Whatsapp )
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      onKeyPress={avoidAlphabets}
                      placeholder="Your contact number"
                      maxLength={10}
                      name="contact"
                      onChange={handleChange}
                      required
                    />
                    <p className="text-danger">{error.contact}</p>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-medium">
                      Email
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your Email Address"
                      name="email"
                      onChange={handleChange}
                    />
                    <p className="text-danger">{error.email}</p>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-medium">
                      Date of Birth <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="dob"
                      onChange={handleChange}
                      required
                    />
                    <p className="text-danger">{error.dob}</p>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-medium">
                      State <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      name="stateId"
                      onChange={handleChange}
                      value={formData.stateId}
                    >
                      <option value="">Select State</option>
                      {state.map((data) => {
                        return <option value={data.id}>{data.name}</option>;
                      })}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-medium">
                      City <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      name="cityId"
                      onChange={handleChange}
                      value={formData.cityId}
                    >
                      <option value="">Select City</option>
                      {city.map((data) => {
                        return <option value={data.id}>{data.name}</option>;
                      })}
                      <option value="0">Other</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-medium">Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your Address"
                      name="address"
                      onChange={handleChange}
                      maxLength={255}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-medium">Pincode</Form.Label>
                    <Form.Control
                      type="tel"
                      onKeyPress={avoidAlphabets}
                      placeholder="Your Pincode"
                      maxLength={6}
                      name="pincode"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={12}>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semi-bold">
                      Your role in music
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <div className="d-flex gap-4 flex-wrap">
                      <Form.Check
                        type="checkbox"
                        label="Singer"
                        value="Singer"
                        id="singleCheck"
                        onChange={handleCheckboxChange}
                        checked={selectedValues.includes("Singer")}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Lyricist"
                        id="lyricistCheck"
                        checked={selectedValues.includes("Lyricist")}
                        value="Lyricist"
                        onChange={handleCheckboxChange}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Composer"
                        id="composerCheck"
                        checked={selectedValues.includes("Composer")}
                        value="Composer"
                        onChange={handleCheckboxChange}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Instrumentalist"
                        id="instrumentalistCheck"
                        checked={selectedValues.includes("Instrumentalist")}
                        value="Instrumentalist"
                        onChange={handleCheckboxChange}
                      />
                      {/* <Form.Check
                        type="checkbox"
                        label="Music Producer"
                        id="musicProducerCheck"
                        checked={selectedValues.includes("Music Producer")}
                        value="Music Producer"
                        onChange={handleCheckboxChange}
                      /> */}
                      <Form.Check
                        type="checkbox"
                        label="Others"
                        id="othersCheck"
                        checked={selectedValues.includes("Others")}
                        value="Others"
                        onChange={handleCheckboxChange}
                      />
                    </div>
                    {selectedValues.includes("Others") ? (
                      <>
                        <Col md={12}>
                          <Form.Group className="mt-2">
                            <Form.Control
                              type="text"
                              placeholder="Enter Your Other Roles"
                              name="other_roles"
                              onChange={handleChange}
                              maxLength={255}
                            />

                            <p className="text-danger">{error.other_roles}</p>
                          </Form.Group>
                        </Col>
                      </>
                    ) : (
                      ""
                    )}
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semi-bold">
                      Your story in short ( Max 100 words )
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Leave your story here"
                      style={{ height: "100px" }}
                      maxLength={100}
                      name="story"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semi-bold">
                      Your dream as an artist — what do you hope to achieve with
                      Havells mYOUsic?
                    </Form.Label>
                    <div className="d-flex gap-4 flex-wrap">
                      <Form.Check
                        type="radio"
                        label="Mentorship"
                        id="mentorshipCheck"
                        name="dream_remarks"
                        value="Mentorship"
                        onChange={handleChange}
                      />
                      <Form.Check
                        type="radio"
                        label="Skill Development"
                        id="skilldevelopmentCheck"
                        name="dream_remarks"
                        value="Skill Development"
                        onChange={handleChange}
                      />
                      <Form.Check
                        type="radio"
                        label="Collaborations"
                        id="collaborationsCheck"
                        name="dream_remarks"
                        value="Collaborations"
                        onChange={handleChange}
                      />
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semi-bold">
                      Upload / Share one sample of your work{" "}
                      <small className="text-muted">(Max. 500 mb)</small>
                      <span className="text-danger">*</span>
                    </Form.Label>
                    {fileError && (
                      <p className="mt-2 text-sm text-red-600">
                        ⚠️ {fileError}
                      </p>
                    )}
                    <div
                      onDragEnter={handleDrag}
                      onDragOver={handleDrag}
                      onDragLeave={handleDrag}
                      onDrop={handleDrop}
                      onClick={onButtonClick}
                      className={`drop-file ${
                        dragActive ? "is-drag" : "is-blank"
                      }`}
                    >
                      <input
                        ref={inputRef}
                        type="file"
                        className="d-none"
                        onChange={handleFileChange}
                      />

                      <p className="m-0 fw-semi-bold fs-6">
                        Drag & Drop your files here or
                      </p>
                      <p className="text-muted">
                        <small>
                          (Formats allowed: PDF, Word File, MP3, MP4, MOV, AVI, WMV, YouTube,
                          SoundCloud etc.)
                        </small>
                      </p>
                      <button
                        type="button"
                        // onClick={onButtonClick}
                        className="btn btn-sm btn-primary"
                      >
                        <span>Browse Files</span>
                      </button>
                      {uploadMediaFile ? (
                        <>
                          <div className="mt-3">
                            <span className="text-sm">
                              📄 {uploadMediaFile.name}
                            </span>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      {/* {files.length > 0 && (
                        <div className="mt-3">
                          {files.map((file, index) => (
                            <span key={index} className="text-sm">
                              📄 {file.name}
                            </span>
                          ))}
                        </div>
                      )} */}
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semi-bold">
                      Where did you get to know about this?
                    </Form.Label>
                    <div className="d-flex gap-4 flex-wrap">
                      <Form.Check
                        type="radio"
                        label="Social Media"
                        id="socialMediaCheck"
                        name="how_to_know_about_this"
                        value="Social Media"
                        onChange={handleChange}
                      />
                      {/* <Form.Check
                        type="radio"
                        label="Email"
                        id="emailCheck"
                        name="how_to_know_about_this"
                        value="Email"
                        onChange={handleChange}
                      />
                      <Form.Check
                        type="radio"
                        label="WhatsApp"
                        id="whatsappCheck"
                        name="how_to_know_about_this"
                        value="WhatsApp"
                        onChange={handleChange}
                      /> */}
                      <Form.Check
                        type="radio"
                        label="Word of Mouth"
                        id="wordCheck"
                        name="how_to_know_about_this"
                        value="Word of Mouth"
                        onChange={handleChange}
                      />
                      <Form.Check
                        type="radio"
                        label="Other"
                        id="otherCheck"
                        name="how_to_know_about_this"
                        value="Other"
                        onChange={handleChange}
                      />
                    </div>
                  </Form.Group>

                  <Form.Text className="mb-4 d-block">
                    Note: Only complete forms with original submissions will be
                    considered. Selected artists will be contacted directly by
                    the Havells mYOUsic team.
                    <br />
                    <span className="text-danger">*</span>T&C apply.
                  </Form.Text>
                  <Form.Group className="mb-2">
                    <Form.Check
                      type="checkbox"
                      label="I confirm this is my original work."
                      id="confirmForm"
                      name="i_confim"
                      onChange={handleChange}
                      checked={formData.i_confim}
                    />
                  </Form.Group>
                  {/* <Form.Group className="mb-2">
                    <Form.Check
                      type="checkbox"
                      id="confirmForm2"
                      label="I have read the T&C and i understand them"
                      name="read_tnc"
                      checked={formData.read_tnc}
                      onChange={handleChange}
                    />
                  </Form.Group> */}
                  <Form.Group className="mb-2">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="confirmForm3"
                        className="form-check-input"
                        name="agree_tnc"
                        checked={formData.agree_tnc}
                        onChange={handleChange}
                      />
                      <label htmlFor="confirmForm3">
                        I have read and understand the{" "}
                        <a href="/terms-conditions" target="_blank">
                          Terms and Conditions
                        </a>{" "}
                        of Havells mYOUsic
                      </label>
                    </div>
                  </Form.Group>

                  <Row className="justify-content-center mt-5">
                    <Col md={6}>
                      <Form.Group>
                        <Button
                          variant="primary pill"
                          className="w-100"
                          size="lg"
                          type="submit"
                          disabled={!isSubmitEnabled}
                        >
                          <span>Submit</span>
                        </Button>
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </div>
        </Container>
      </section>
      <Modal size="" show={show} centered onHide={closeModal} backdrop="static" keyboard={false}>
      <Modal.Header >
        <Modal.Title>Enter OTP</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group >
          {otpError && (<Alert variant="danger">{otpError} </Alert> )}
          {otpSuccess && (<Alert variant="success">{otpSuccess} </Alert> )}
          <FloatingLabel
            label="Enter OTP*"
            className="mb-3"
          >
          <Form.Control
            type="tel"
            onKeyPress={avoidAlphabets}
            placeholder="Enter OTP*"
            maxLength={6}
            name="verificationCode"
            onChange={handleChange}
            required
          />
          </FloatingLabel>
        </Form.Group>
        <div className="text-center">
          <Button variant="primary"  size="lg" onClick={finalSubmit}>
            <span>Verify & Submit</span>
          </Button>
          <div>
            <a href="javascript:void(0);" variant="primary pill" className="w-100"
                          size="lg" onClick={handleSubmit} disabled={timer > 0}>
              {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
            </a>
          </div>
        </div>
        <Row className="mb-5 align-items-center text-large">
          <Col lg={8}>
            <br/>
            
            {/* <p>  Resend OTP in </p>
            <p onClick={handleSubmit} ><small><span className="text-danger">Resend OTP</span></small></p> */}
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
    </>
  );
}

export default Participate;


