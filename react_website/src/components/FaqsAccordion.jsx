import { Accordion } from "react-bootstrap";

export default function FaqsAbout() {
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            1. Who can apply to Havells mYOUsic?
          </Accordion.Header>
          <Accordion.Body>
            Any aspiring musician from India-singers, lyricists,
            instrumentalists, composers, or self-taught creators. We especially
            encourage applications from grassroots talent that often remains
            unseen.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            2. Do I need formal music training?
          </Accordion.Header>
          <Accordion.Body>
            No. Havells mYOUsic is for real, raw, passionate artists. Skill and
            sincerity matter more than professional training.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Is there an age requirement?</Accordion.Header>
          <Accordion.Body>
            Yes. Applicants must be 18 years or older and Indian citizens.
            Anyone younger must submit parental/guardian consent as outlined in
            the registration guidelines.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            4. Is Havells mYOUsic a competition?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              No. This is not a contest or elimination show. Havells mYOUsic is
              a platform built to nurture potential, not pit artists against one
              another.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            5. Are there any live shows or public performances?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Not at this stage. The current focus is on artist development,
              music creation, and digital releases.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            6. Will artists receive certificates or official recognition?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes. All shortlisted and final-stage artists will receive official
              recognition from Havells mYOUsic.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            7. What kind of video should I submit?
          </Accordion.Header>
          <Accordion.Body>
            A simple, clear recording of you performing is enough.
            Studio-quality production is not required.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>8. What genres are accepted?</Accordion.Header>
          <Accordion.Body>
            All genres rooted in Indian music culture-classical, folk, indie,
            regional, contemporary, as well as original modern styles.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            9. Will there be future seasons of Havells mYOUsic?
          </Accordion.Header>
          <Accordion.Body>
            Yes. Havells mYOUsic is envisioned as a long-term platform
            contributing to India’s musical landscape.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export function FaqsProcess() {
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. How do I register?</Accordion.Header>
          <Accordion.Body>
            All entries must be submitted through our official microsite. You
            can also reach the form by scanning the Havells mYOUsic QR code
            available across our social media channels and communication
            materials.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            2. How will I know if I’m selected?
          </Accordion.Header>
          <Accordion.Body>
            Shortlisted applicants will be contacted via email and phone, with
            updates shared on our official social handles.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            3. What kind of video should I submit?
          </Accordion.Header>
          <Accordion.Body>
            A simple, clear recording of you performing is enough.
            Studio-quality production is not required.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            4. Can I submit more than one entry?
          </Accordion.Header>
          <Accordion.Body>No! Please submit your best work.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            5. Will my entry be shared on social media?
          </Accordion.Header>
          <Accordion.Body>
            Only with your consent. Some entries may be featured in promotional
            content to showcase the diversity of talent.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            6. Can I participate if I have been on a reality show?
          </Accordion.Header>
          <Accordion.Body>
            If you have been on a major reality show with national visibility,
            you may not be eligible. Havells mYOUsic is designed for truly
            undiscovered talent.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
export function FaqsFees() {
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            1. Is there a participation or registration fee?
          </Accordion.Header>
          <Accordion.Body>No. The entire program is free.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
export function FaqsGeneral() {
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. What is the selection process?</Accordion.Header>
          <Accordion.Body>
            <p>The journey follows a three-stage evaluation:</p>
            <p>
              <strong>
                Online submissions → City Auditions → Bootcamp & Final
                Selection.
              </strong>
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            2. Where will the auditions take place?
          </Accordion.Header>
          <Accordion.Body>
            The first audition will be held in <strong>Delhi NCR</strong>,
            followed by <strong>Mumbai</strong>. A third city will be announced
            at a later stage based on program requirements.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            3. What happens at the Havells mYOUsic Bootcamp?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Artists will undergo an intensive learning experience led by
              respected industry professionals. Sessions include:
            </p>
            <ul>
              <li>Songwriting & composition</li>
              <li>Vocal and performance guidance</li>
              <li>Music production fundamentals</li>
              <li>Rights, royalties & legal essentials</li>
              <li>Building an artistic identity</li>
              <li>Understanding distribution & the business of music</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Who are the mentors involved?</Accordion.Header>
          <Accordion.Body>
            Havells mYOUsic brings together a diverse panel of experts in music
            creation, production, talent development, and artist rights. Names
            and profiles will be published on the website as they are onboarded.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            5. Will selected artists release original music?
          </Accordion.Header>
          <Accordion.Body>
            Yes. A total of <strong>25 original songs</strong> will be produced
            and released under the Havells mYOUsic banner at YouTube.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. How are song rights managed?</Accordion.Header>
          <Accordion.Body>
            <p>
              Havells retains 100% IP ownership. Revenue sharing is structured
              as:{" "}
              <strong>
                40% artist-side (10% each for the singer, composer, lyricist,
                and music producer) and 60% Havells.
              </strong>
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>
            7. Will travel or stay be provided for auditions or the bootcamp?
          </Accordion.Header>
          <Accordion.Body>
            Details on logistics, reimbursements, or arrangements will be shared
            directly with shortlisted artists.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            8. How long does the entire journey last?
          </Accordion.Header>
          <Accordion.Body>
            From registrations to the release of final songs, the journey spans
            several months-ensuring artists get enough time to learn, create,
            and grow.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            9. Will my entry be shared on social media?
          </Accordion.Header>
          <Accordion.Body>
            Only with your consent. Some entries may be featured in promotional
            content to showcase the diversity of talent.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>
            10. Will there be future seasons of Havells mYOUsic?
          </Accordion.Header>
          <Accordion.Body>
            Yes. Havells mYOUsic is envisioned as a long-term platform
            contributing to India’s musical landscape.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
