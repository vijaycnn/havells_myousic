import { Container, Image } from "react-bootstrap";
import mike from "../assets/mice.png";

function Disclaimer() {
  return (
    <>
      <section className="sec sec-form text-tnc">
        <Container className="mt-5">
          <div className="artist-card">
            <Image src={mike} alt="Mike" className="artist-card-element mike" />

            <h3 className="font-secondary mb-4 text-primary">
              Fake Call &amp; Fraudulent Communication Disclaimer
            </h3>
            <p>“Havells India Limited hereby informs all participants that:</p>
            <p>
              Havells will contact participants <strong>only</strong> through
              the following official channels:{" "}
            </p>
            <ul>
              <li>
                <strong>Website:</strong>{" "}
                <a href="https://havellsmyousic.com/" target="_blank">
                  https://havellsmyousic.com/
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:myousichavells@gmail.com">
                  myousichavells@gmail.com
                </a>{" "}
                and{" "}
                <a href="mailto:info@havellsmyousic.com">
                  info@havellsmyousic.com
                </a>
              </li>
              <li>
                <strong>YouTube:</strong>{" "}
                <a
                  href="https://www.youtube.com/@HavellsMyousic"
                  target="_blank"
                >
                  https://www.youtube.com/@HavellsMyousic
                </a>
              </li>
              <li>
                <strong>Instagram:</strong>{" "}
                <a
                  href="https://www.instagram.com/havellsmyousic/"
                  target="_blank"
                >
                  https://www.instagram.com/havellsmyousic/
                </a>
              </li>
            </ul>
            <p>
              Any message, email, communication, or social media message{" "}
              <strong>not</strong> originating from the above authorised
              channels is <strong>fraudulent</strong> and should be ignored.
            </p>
            <p>
              Participants are strongly advised <strong>not</strong> to share
              any personal, financial, or confidential information with any
              unauthorised individual or platform.
            </p>
            <p>
              Havells shall not be responsible or liable for any loss, damage,
              or misuse of information arising due to participants responding to
              fraudulent communications.”
            </p>
            <hr />
            <p>
              <strong>CONSENT FOR COLLECTION AND USE OF PERSONAL DATA</strong>
            </p>
            <p>
              “By submitting your details, you hereby provide{" "}
              <strong>
                free, informed, specific, unconditional, and revocable consent
              </strong>{" "}
              to Havells India Limited (“Havells”) to collect, store, process,
              share, and use your personal data (including name, age, contact
              details, address, audio/video submissions and any information
              voluntarily provided by you) for purposes related to:
            </p>
            <ul>
              <li>evaluation of your Submission,</li>
              <li>
                management and operation of this music competition/project,
              </li>
              <li>communication with you regarding project updates, and</li>
              <li>
                publication, promotion, or showcasing of your work as part of
                the project.
              </li>
            </ul>
            <p>
              Your data may be shared with the WWP Media (“Agency”), mentors,
              evaluators, and other third parties involved in executing this
              project.
            </p>
            <p>You understand that:</p>
            <ul>
              <li>
                Your personal data will be processed in accordance with
                applicable data protection laws.
              </li>
              <li>
                You may withdraw your consent at any time by writing to:{" "}
                <a href="mailto:privacy@havells.com">privacy@havells.com</a> and{" "}
                <a href="mailto:myousichavells@gmail.com">
                  myousichavells@gmail.com
                </a>
                .
              </li>
              <li>
                Withdrawal of consent may affect your participation in the
                project.
              </li>
            </ul>
            <p>
              By proceeding, you acknowledge that you have read and understood
              this consent statement and voluntarily agree to the processing of
              your personal data for the purposes stated above.”
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Disclaimer;
