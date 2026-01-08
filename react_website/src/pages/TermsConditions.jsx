import { Container, Image } from "react-bootstrap";
import mike from "../assets/mice.png";

function TermsConditions({data}) {
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
              {data?.subtitle}  {/* Havells mYOUsic – Terms & Conditions */}
            </h3>
            {              
              (data?.remark && remark.length > 0) ?
              <>
              <div dangerouslySetInnerHTML={{ __html: data?.remark || "" }} />
              </>: ''
            }
            {/* <p>
              <strong>Effective Date:</strong>
            </p>

            <p>
              By submitting your application, participating in, or engaging with{" "}
              <strong>Havells mYOUsic</strong> (the “Program”), you agree to be
              bound by the following terms and conditions. Please read
              carefully.
            </p>

            <p>
              <strong>1. Eligibility</strong>
            </p>
            <ul>
              <li>
                The Program is <strong>open to residents of India</strong>.
              </li>
              <li>
                Applicants under <strong>18 years of age</strong> must submit a
                consent form signed by a parent or legal guardian.
              </li>
              <li>
                Applicants must have <strong>original work;</strong> covers or
                adaptations are allowed only with proper rights/permissions.
              </li>
            </ul>
            <p>
              <strong>2. Application Process</strong>
            </p>
            <ul>
              <li>
                All applications must be{" "}
                <strong> complete, accurate, and truthful</strong>.
              </li>

              <li>
                Applicants must provide{" "}
                <strong>
                  personal details, music samples, videos, or supporting
                  documents
                </strong>{" "}
                as required.
              </li>

              <li>
                Submissions may be <strong>edited or rejected</strong> if
                incomplete, offensive, plagiarized, or misleading.
              </li>

              <li>
                <strong>Deadline adherence</strong> is mandatory. Late
                applications will not be considered.
              </li>
            </ul>
            <p>
              <strong>3. Intellectual Property & Usage Rights</strong>
            </p>
            <ul>
              <li>Applicants retain ownership of their submissions.</li>
              <li>
                By submitting, applicants grant{" "}
                <strong>
                  Havells, its partners, affiliates, and event organizers a
                  non-exclusive, royalty-free, worldwide license
                </strong>{" "}
                to:
                <ul>
                  <li>
                    Promote, distribute, and display submissions in any media
                    format.
                  </li>
                  <li>
                    Include submissions in marketing, social media,
                    publications, and digital campaigns.
                  </li>
                </ul>
              </li>
              <li>
                Applicants <strong>warrant</strong> that submissions are
                original and do not infringe on third-party rights. Any disputes
                arising from IP violations will be the applicant’s
                responsibility.
              </li>
            </ul>
            <ul>
              <li>
                You represent and warrant the following:
                <ol type="a">
                  <li>
                    Your submission is original and unpublished, and you own all
                    rights, title and interest in the submission, and are
                    permitted to transfer all rights in the submission to the{" "}
                    <strong>
                      Havells, its partners, affiliates, and event organizers
                    </strong>
                    Team;
                  </li>
                  <li>
                    Your creation and submission of, and the{" "}
                    <strong>
                      Havells, its partners, affiliates, and event organizers
                    </strong>{" "}
                    use of the submission does not infringe or otherwise violate
                    the rights of any third party, including such third-party’s
                    intellectual property rights;
                  </li>
                  <li>
                    The submission is unencumbered by any third-party rights or
                    possible claims, including that of a collective rights
                    management organization or copyright society.
                  </li>
                </ol>
              </li>
              <li>
                You shall not share, license, adapt, or use the submitted work
                or any part thereof with third parties after submission, except
                with prior written consent of{" "}
                <strong>
                  Havells, its partners, affiliates, and event organizers
                </strong>{" "}
                . If the submission or any part thereof is not selected for
                commercialisation, this restriction shall remain in effect for
                Six (6) months following the date of submission, after which You
                may use the work elsewhere, unless otherwise notified in writing
                by{" "}
                <strong>
                  Havells, its partners, affiliates, and event organizers
                </strong>
                .
              </li>
              <li>
                If Your submitted work is selected by{" "}
                <strong>Havells Team</strong>, You hereby irrevocably waive, to
                the extent permitted under applicable Indian law, all moral
                rights in relation to the submitted work, including the right to
                object to modification, distortion, or adaptation of the work by{" "}
                <strong>Havells Team</strong>.
              </li>
              <li>
                Attribution of the Artist shall be at the sole discretion of{" "}
                <strong>Havells Team</strong>. The format, placement, and
                visibility of any such credit shall be determined exclusively by
                the <strong>Havells Team</strong>, and the absence of
                attribution shall not entitle the Artist to any claim or
                compensation.
              </li>
              <li>
                Upon selection,{" "}
                <strong>
                  Havells, its partners, affiliates, and event organizers
                </strong>{" "}
                shall have the unrestricted right to license, assign,
                sublicense, or otherwise transfer any or all rights in the final
                work to any third party, digital platform, affiliate, or
                distributor, for any purpose, globally and in perpetuity.
              </li>
              <li>
                You hereby grant{" "}
                <strong>
                  Havells, its partners, affiliates, and event organizers
                </strong>{" "}
                a worldwide, perpetual, irrevocable, and royalty-free license to
                use Your name, image, and likeness, in connection with Your
                submission, or any part thereof, including for purposes of
                promotion, publicity, and commercial use, in any media now known
                or hereafter developed.
              </li>
            </ul>
            <p>
              <strong>4. Selection & Participation</strong>
            </p>
            <ul>
              <li>
                Selection of Applicants is at the{" "}
                <strong>sole discretion of Havells and its partners.</strong>
              </li>

              <li>
                All decisions regarding selection, performance slots, mentoring
                sessions, and awards are <strong>final and binding.</strong>
              </li>

              <li>
                The Program{" "}
                <strong>
                  does not guarantee fame, monetary reward, or commercial
                  success
                </strong>
                . Its purpose is to provide mentorship, exposure, and
                performance opportunities.
              </li>

              <li>
                Havells reserves the right to{" "}
                <strong>modify, postpone, or cancel the Program</strong> in case
                of unforeseen circumstances.
              </li>

              <li>
                Havells’ decisions are <strong>final and binding</strong> on all
                matters related to the Program.
              </li>
            </ul>
            <p>
              <strong>5. Performance Guidelines</strong>
            </p>
            <ul>
              <li>
                Applicants must{" "}
                <strong>
                  adhere to event rules, venue safety protocols, and local laws.
                </strong>
              </li>

              <li>
                Any behaviour deemed unsafe, disruptive, or inappropriate may
                result in <strong>disqualification.</strong>
              </li>

              <li>
                Use of copyrighted materials, offensive content, or third-party
                IP without authorization is{" "}
                <strong>strictly prohibited.</strong>
              </li>

              <li>
                Applicant is prohibited to publish/upload/submit any content
                which is grossly harmful, harassing, blasphemous defamatory,
                obscene, pornographic, paedophilic, libellous, invasive of
                another's privacy, hateful, or racially, ethnically
                objectionable, disparaging, relating or encouraging money
                laundering or gambling, or otherwise unlawful in any manner
                whatever; (ii) harm minors in any way; (iii) infringes any
                patent, trademark, copyright or other proprietary rights; (iv)
                violates any law for the time being in force; (v) deceives or
                misleads the addressee about the origin of such messages or
                communicates any information which is grossly offensive or
                menacing in nature; (vi) impersonate another person; (vii)
                contains software viruses or any other computer code, files or
                programs designed to interrupt, destroy or limit the
                functionality of any computer resource; and (viii) threatens the
                unity, integrity, defence, security or sovereignty of India, or
                public order or causes incitement to the commission of any
                cognizable offence or prevents investigation of any offence or
                is insulting any other nation
              </li>
            </ul>
            <p>
              <strong>6. Mentorship & Guidance</strong>
            </p>
            <ul>
              <li>
                Mentorship and guidance from music supervisors, publishing
                experts, and legal advisors are{" "}
                <strong>provided for educational purposes only.</strong>
              </li>

              <li>
                Havells and its partners are <strong>not liable</strong> for any
                professional, financial, or legal outcomes resulting from
                mentorship.
              </li>
            </ul>
            <p>
              <strong>7. Liability & Indemnity</strong>
            </p>
            <ul>
              <li>
                Applicants{" "}
                <strong>
                  agree to indemnify and hold harmless Havells, its affiliates,
                  partners, employees, and agents
                </strong>{" "}
                from any claims, damages, or legal disputes arising from
                participation or submissions or breach of the present terms and
                conditions • Havells is{" "}
                <strong>
                  not responsible for technical issues, loss of data, delays, or
                  accessibility challenges
                </strong>{" "}
                during the application or event process.
              </li>

              <li>
                Participation is at the Applicant’s <strong>own risk;</strong>{" "}
                medical, legal, or safety precautions are the responsibility of
                the applicant.
              </li>
            </ul>
            <p>
              <strong>8. Privacy & Data Protection</strong>
            </p>
            <ul>
              <li>
                Personal information provided will be used{" "}
                <strong>
                  solely for Program administration, communication, and
                  promotional purposes.
                </strong>
              </li>

              <li>
                Applicants consent to use of their personal data and also
                consent for{" "}
                <strong>
                  digital communication, updates, and marketing messages
                </strong>{" "}
                from Havells related to Havells mYOUsic.
              </li>

              <li>
                Havells will take{" "}
                <strong>reasonable measures to protect applicant data</strong>,
                but is not liable for unauthorized access due to external
                factors.
              </li>
            </ul>
            <p>
              <strong>9. Media & Publicity</strong>
            </p>
            <ul>
              <li>
                Applicants consent to{" "}
                <strong>
                  photography, video recording, and media coverage
                </strong>{" "}
                during events or mentorship sessions.
              </li>

              <li>
                Havells may use Applicant images, videos, or profiles for{" "}
                <strong>promotional purposes</strong> without additional consent
                or compensation.
              </li>
            </ul>
            <p>
              <strong>10. Confidentiality</strong>
            </p>
            <ul>
              <li>
                You agree to maintain strict confidentiality regarding any
                non-public information shared in connection with Your submission
                or any potential collaboration.
              </li>

              <li>
                Confidential information includes, without limitation, artistic
                concepts, draft versions, communication exchanges, and
                monetisation strategies.
              </li>

              <li>
                This obligation shall survive the termination of any engagement
                and remains enforceable for an indefinite period.
              </li>
            </ul>
            <p>
              <strong>11. Right to Modify, Suspend or Terminate</strong>
            </p>
            <ul>
              <li>
                The <strong>Havells Team</strong> reserves the right to cancel,
                modify, suspend, or terminate this initiative or these Terms, in
                whole or in part, at any time, for any reason, including due to
                force majeure or unforeseen circumstances, without incurring any
                liability.
              </li>

              <li>
                Clauses relating to intellectual property, confidentiality,
                governing law and jurisdiction, indemnity, limitation of
                liability, and other clauses that survive by nature shall
                survive the end of the collaboration process.
              </li>
            </ul>
            <p>
              <strong>12. Governing Law and Jurisdiction</strong>
            </p>
            <ul>
              <li>
                These Terms shall be governed by, and construed in accordance
                with, the laws of India.
              </li>

              <li>
                All disputes arising from or related to these Terms shall be
                subject to the exclusive jurisdiction of the courts in New
                Delhi.
              </li>
            </ul>
            <p>
              <strong>13. Miscellaneous</strong>
            </p>
            <ul>
              <li>
                Participation in Havells mYOUsic constitutes{" "}
                <strong>acceptance of all Terms & Conditions.</strong>
              </li>

              <li>
                Havells reserves the right to{" "}
                <strong>update, revise, or amend </strong> these Terms &
                Conditions at any time; updates will be published on the
                website.
              </li>

              <li>
                Any violation of rules may result in{" "}
                <strong>immediate disqualification </strong>
                and withdrawal of Program privileges
              </li>
            </ul> */}
          </div>
        </Container>
      </section>
    </>
  );
}

export default TermsConditions;
