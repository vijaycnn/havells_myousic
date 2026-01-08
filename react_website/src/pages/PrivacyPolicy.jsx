import { Container, Image } from "react-bootstrap";
import mike from "../assets/mice.png";

function PrivacyPolicy({data}) {
  let remark = data?.remark
    .replace(/<(.|\n)*?>/g, '') // remove html tags
    .replace(/&nbsp;/g, ' ')
    .trim();
  return (
    <>
      <section className="sec sec-form text-tnc">
        <Container className="mt-5">
          <div className="artist-card">
            <Image src={mike} alt="Mike" className="artist-card-element mike" />

            <h3 className="font-secondary mb-4 text-primary">
              {data?.subtitle}
            </h3>
            {              
              (data?.remark && remark.length > 0) ?
              <>
              <div dangerouslySetInnerHTML={{ __html: data?.remark || "" }} />
              </>: ''
            }
            {/* <p>
              Havells India Limited (“Havells”, “we”, “us”, “our”) is committed
              to protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, store and safeguard your information when
              you access or participate in the{" "}
              <strong>Havells mYousic platform</strong>, including its website,
              applications, submission portal and any digital services that
              refer to this Privacy Policy (collectively, the “Services”).
            </p>
            <p>
              By using our Services or submitting any information, you consent
              to the practices described in this Privacy Policy. If you do not
              agree, please discontinue use of the Services.
            </p>
            <p>
              <strong>1. SCOPE</strong>
            </p>
            <p>
              This Privacy Policy applies to all users of the Havells mYousic
              platform, including participants, visitors, mentors, partners and
              collaborators, regardless of the device used to access the
              Services (mobile, laptop, tablet, etc.).
            </p>
            <p>
              <strong>2. INFORMATION WE COLLECT</strong>
            </p>
            <p>We collect the following categories of information:</p>
            <p>
              <strong>A. Information You Provide Directly</strong>
            </p>
            <p>This includes:</p>
            <ul>
              <li>
                Name, age, email address, phone number and contact details
              </li>
              <li>Location/city</li>
              <li>
                Submission materials (musical composition, lyrics, tune,
                audio/video files)
              </li>
              <li>Profile or biography details</li>
              <li>
                Communication submitted through forms, queries or messages
              </li>
              <li>Identity or age-verification information if required</li>
              <li>Consent forms, release forms, agreements and declarations</li>
            </ul>
            <p>
              <strong>B. Information Automatically Collected</strong>
            </p>
            <p>When you use our Services, we may collect:</p>
            <ul>
              <li>IP address, browser type, device type, operating system</li>
              <li>Log data (time, date, duration, interactions)</li>
              <li>Cookie identifiers and preference signals</li>
              <li>
                Usage patterns such as pages visited and navigation behaviour
              </li>
            </ul>
            <p>
              <strong>C. Information from Third Parties</strong>
            </p>
            <p>We may receive additional information about you from:</p>
            <ul>
              <li>
                Service providers supporting the platform (hosting, analytics,
                marketing)
              </li>
              <li>
                Social media platforms when you choose to link or log in using
                them
              </li>
              <li>
                Payment or ticketing partners (if any future offerings require
                payment)
              </li>
            </ul>
            <p>
              <strong>3. HOW WE USE YOUR INFORMATION</strong>
            </p>
            <p>We may use your information to:</p>
            <ul>
              <li>Register you for participation in Havells mYousic</li>
              <li>Review, evaluate, develop or process your submission</li>
              <li>
                Communicate with you regarding selection, updates, mentoring or
                operational requirements
              </li>
              <li>
                Provide guidance, recordings and project-related activities
              </li>
              <li>
                Publish, feature or promote your work as part of the Havells
                mYousic initiative
              </li>
              <li>
                Manage the platform’s technical functioning and improve user
                experience
              </li>
              <li>
                Ensure eligibility and compliance with the Terms & Conditions
              </li>
              <li>
                Conduct analytics, surveys or internal assessments to improve
                the initiative
              </li>
              <li>Provide customer support and resolve issues</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>
              We will also use your data for any specific purpose disclosed at
              the point of collection or otherwise with your explicit consent.
            </p>
            <p>
              <strong>4. SHARING OF INFORMATION</strong>
            </p>
            <p>
              We do <strong>not</strong> sell your personal information. We may
              share your information only with:
            </p>
            <p>
              <strong>A. Managing Agency / Project Partners</strong>
            </p>
            <p>To run the Havells mYousic initiative, including:</p>
            <ul>
              <li>evaluation of submissions,</li>
              <li>mentorship,</li>
              <li>production and publication support.</li>
            </ul>
            <p>
              <strong>B. Service Providers</strong>
            </p>
            <p>For tasks such as:</p>
            <ul>
              <li>website hosting</li>
              <li>data analytics</li>
              <li>email/SMS communication</li>
              <li>file storage</li>
              <li>event management</li>
            </ul>
            <p>
              Such providers are contractually bound to handle data only on our
              behalf.
            </p>
            <p>
              <strong>C. Legal or Regulatory Bodies</strong>
            </p>
            <p>Where required to:</p>
            <ul>
              <li>comply with law or court orders</li>
              <li>prevent fraud or misuse</li>
              <li>protect rights, safety or property of Havells or users</li>
            </ul>
            <p>
              <strong>D. With Your Consent</strong>
            </p>
            <p>For any situation where you explicitly authorize sharing.</p>
            <p>
              <strong>5. COOKIES & TRACKING TECHNOLOGIES</strong>
            </p>
            <p>
              The Havells mYousic website uses cookies and similar technologies
              to:
            </p>
            <ul>
              <li>enable website functionality,</li>
              <li>remember your preferences,</li>
              <li>analyze usage patterns,</li>
              <li>enhance user experience.</li>
            </ul>
            <p>
              You can manage or disable cookies through your browser settings,
              but certain features may not function properly if cookies are
              restricted.
            </p>
            <p>
              <strong>6. INTERNATIONAL TRANSFERS</strong>
            </p>
            <p>
              Your information may be stored or processed outside India by our
              service providers. By using our Services, you consent to such
              transfers, subject to applicable data protection laws.
            </p>
            <p>
              <strong>7. DATA SECURITY</strong>
            </p>
            <p>
              We use reasonable technical and organizational measures to
              safeguard your information. However, no system or transmission
              over the internet is fully secure, and we cannot guarantee
              absolute security.
            </p>
            <p>
              <strong>8. DATA RETENTION</strong>
            </p>
            <p>We retain your information only for:</p>
            <ul>
              <li>the duration necessary for the Havells mYousic project,</li>
              <li>compliance with legal or contractual obligations, or</li>
              <li>until you withdraw consent (where applicable).</li>
            </ul>
            <p>
              <strong>9. YOUR RIGHTS</strong>
            </p>
            <p>Depending on applicable law, you may have the right to:</p>
            <ul>
              <li>access your personal information</li>
              <li>correct inaccurate data</li>
              <li>withdraw consent</li>
              <li>request deletion (subject to legal constraints)</li>
              <li>restrict or object to processing</li>
            </ul>
            <p>
              Requests may be submitted via{" "}
              <a href="mailto:privacy@havells.com">privacy@havells.com</a> or
              through the website’s contact form.
            </p>
            <p>
              <strong>10. THIRD-PARTY LINKS</strong>
            </p>
            <p>
              The Havells mYousic platform may contain links to third-party
              websites. Havells is not responsible for their privacy practices
              or content. Users are encouraged to review those policies
              independently.
            </p>
            <p>
              <strong>11. UPDATES TO THIS POLICY</strong>
            </p>
            <p>
              We may modify this Privacy Policy from time to time. Changes will
              be posted on the website with an updated “Effective Date.” Your
              continued use of the Services constitutes acceptance of updated
              terms.
            </p>
            <p>
              <strong>12. CONTACT US</strong>
            </p>
            <p>For questions, concerns, or data requests, contact:</p>
            <p>
              <strong>Havells India Limited</strong>
            </p>
            <p>
              <strong>Corporate Office:</strong>
              <br />
              QRG Towers, 2D, Sec- 126, Expressway Noida - 201304 U.P. (India)
            </p>
            <p>
              Email:{" "}
              <a href="mailto:privacy@havells.com">privacy@havells.com</a>
            </p> */}
          </div>
        </Container>
      </section>
    </>
  );
}

export default PrivacyPolicy;
