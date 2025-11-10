import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Image } from "react-bootstrap";
import mike from "../assets/mice.png";
import tabla from "../assets/tabla.png";
import guitar from "../assets/guitar.png";

function Thankyou() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    // Decrease the countdown every second
    const countdown = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    // Redirect when countdown reaches 0
    const redirect = setTimeout(() => {
      navigate("/");
    }, 5000);

    // Cleanup both timers on unmount
    return () => {
      clearInterval(countdown);
      clearTimeout(redirect);
    };
  }, [navigate]);
  return (
    <>
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
            <div className="thank-you text-center">
              <svg
                stroke="currentColor"
                fill="#139547"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="150px"
                width="150px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
                  fill="#139547"
                  stroke-width="0"
                ></path>
              </svg>
              <header className="sec-head text-center mb-5 d-flex flex-column justify-content-center align-items-center">
                <h2 className="sec-title">Thank You!</h2>
                <p className="sec-sub-title mb-4">
                  Your submission has been received successfully.
                </p>
              </header>

              <p className="text-center mb-3 fs-5">
                Redirecting to the home page in <strong>{seconds}</strong>{" "}
                second{seconds !== 1 ? "s" : ""}...
              </p>

              <div className="text-center">
                <a href="/" className="btn btn-primary">
                  <span>Back to Home</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Thankyou;
