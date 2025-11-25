import { Modal, Button, Image, Row, Col } from "react-bootstrap";
import profileImage from "../../assets/Atul-Churamani.png";

const AtulChuramani = ({ show, handleClose, title }) => {
  return (
    <Modal size="xl" show={show} onHide={handleClose}>
      {title && (
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body>
        <Row className="mb-5 align-items-center text-large">
          <Col lg={4} className="text-center mb-lg-0 mb-5 ">
            <Image src={profileImage} alt="" />
          </Col>
          <Col lg={8}>
            <p>
              Atul Churamani is one of the most experienced and respected
              professionals in India’s music and entertainment industry, with a
              career spanning more than three decades across A&R, publishing,
              artist management, label leadership, live entertainment, and
              policy development. He has played a pivotal role in shaping the
              structure and scope of India’s modern music business — from the
              rise of Indipop in the 1990s to the formalisation of music
              publishing and the adoption of digital and rights-management
              systems.
            </p>
            <p>
              Known for his ability to bridge artistry, commerce, and
              regulation, Atul has consistently worked to ensure that Indian
              music is both globally connected and locally empowered.
            </p>
          </Col>
        </Row>

        <h4>Early Career and the Global Soundscape</h4>
        <p>
          Atul began his career in 1987 with CBS Gramophone Records & Tapes
          (India) Ltd., which later became Sony Music Entertainment India. His
          early role focused on selecting and curating international music for
          release in the Indian market, requiring a deep understanding of both
          global repertoire and domestic listening habits.{" "}
        </p>
        <p>
          At a time when international albums typically reached India months
          after their global launch, Atul broke new ground by ensuring the
          simultaneous Indian release of Michael Jackson’s Bad in 1987 — a first
          for the country’s recorded-music business. This milestone reflected
          his forward-thinking approach and his determination to bring global
          musical experiences to Indian audiences in real time.{" "}
        </p>
        <p>
          The success of that initiative marked the beginning of a career
          defined by innovation, cultural sensitivity, and a commitment to
          professionalising the Indian music industry.
        </p>
        <h4>Shaping the Golden Age of Indian Recorded Music</h4>
        <p>
          In the 1990s, Atul became a central figure in India’s emerging
          non-film music scene through his work with Magnasound and later Virgin
          Records India. During this era, he was instrumental in discovering,
          signing, and promoting independent artists who went on to define the
          country’s pop and fusion sound.
        </p>
        <p>
          His instinct for identifying talent, combined with his ability to pair
          artists with the right producers and creative teams, helped usher in
          what is now regarded as the golden age of Indian pop. Albums developed
          under his guidance achieved both commercial success and lasting
          cultural impact, setting the stage for the independent-music boom that
          followed decades later. During this period — and later at Saregama
          India Ltd. — Atul also served on the boards of the Indian Performing
          Right Society (IPRS) and Phonographic Performance Ltd. (PPL),
          contributing to the evolution of India’s copyright, licensing, and
          royalty frameworks. These roles allowed him to help shape the
          governance structures that continue to underpin the country’s
          music-rights ecosystem.
        </p>
        <h4>Saregama Years: Building Digital, Publishing, and Live Music</h4>
        <p>
          In 2002, Atul joined Saregama India Ltd., one of India’s most storied
          music companies, and over the following years played a transformative
          role in modernising its business. He set up Saregama’s digital and
          music-publishing verticals, both of which were ahead of their time and
          went on to influence the wider industry.
        </p>
        <p>
          At a time when music publishing was poorly understood in India, Atul
          became a driving force in educating record labels, broadcasters, and
          corporate partners about the mechanics and value of publishing. He
          spearheaded the creation of a global network of sub-publishers across
          multiple countries — a first for an Indian company — which enabled
          Saregama’s catalogue to generate new revenue streams internationally.
        </p>
        <p>
          This global outreach resulted in several landmark sync-licensing
          deals, including placements for Peugeot 205, Heineken beer, and
          participation in royalties from the Black Eyed Peas’ worldwide hit
          “Don’t Funk With My Heart,” which sampled a Saregama composition.
          These achievements demonstrated his ability to convert Indian
          repertoire into globally recognised intellectual property.
        </p>
        <p>
          Atul also pioneered the live-concert business at Saregama, creating
          and producing several high-profile international tours that blended
          Indian music with orchestral performance:{" "}
        </p>
        <ul>
          <li>
            2008 – “Rafi Resurrected”, featuring Sonu Nigam with the City of
            Birmingham Symphony Orchestra (CBSO), a tribute to Mohammed Rafi
            that toured the UK to critical acclaim.
          </li>
          <li>
            2009 – “Remembering Nusrat”, with Rahat Fateh Ali Khan and the CBSO,
            marking the first time a Western orchestra performed qawwalis.
          </li>
          <li>
            2011 – “Naina Lagaike”, a three-city UK tour celebrating the
            collaboration between Asha Bhosle and Ustad Shujaat Khan.
          </li>
        </ul>
        <p>
          These tours broke new ground for Indian live music abroad, combining
          cultural authenticity with global production values and positioning
          Indian music within the international concert circuit.
        </p>
        <h4>Leadership and Industry Transformation</h4>
        <p>
          As his career progressed, Atul’s focus expanded from creative and
          operational leadership to industry structure and policy. His deep
          expertise in intellectual property, licensing, and royalties made him
          one of the most authoritative voices in Indian music rights. He has
          consistently advocated for fair remuneration, accurate crediting, and
          transparent metadata systems, and has worked with various bodies to
          bring clarity to distinctions such as broadcast, public performance,
          and communication to the public.
        </p>
        <p>
          Currently, Atul heads the Music & Sound Sector for the Bureau of
          Indian Standards (BIS), where he has initiated India’s first national
          framework for music-metadata standardisation — a pioneering step that
          places India alongside the United Kingdom as one of the only countries
          to develop such standards. The initiative aims to ensure consistency
          and interoperability in the way songs and rights information are
          recorded and tracked, improving transparency and royalty distribution
          throughout the industry.
        </p>
        <p>
          In addition, Atul serves as Chairman of Phonographic Digital Ltd.
          (PDL), a not-for-profit distribution company that focuses on fair,
          accurate, and timely distribution of digital revenues among rights
          holders. These initiatives reflect his belief that a sustainable
          creative industry depends on robust systems that protect both artistry
          and accountability.
        </p>
        <h4>Entrepreneurial Vision</h4>
        <p>
          Atul’s entrepreneurial drive is also reflected in his work with
          Turnkey Music & Publishing Pvt. Ltd., a company he helped establish to
          bring international standards of music-publishing and
          rights-management practice to India. Turnkey represents writers,
          composers, and catalogues, managing sub-publishing, sync licensing,
          and creative placements in film, television, and advertising.{" "}
        </p>
        <p>
          Under his leadership, Turnkey has been instrumental in promoting the
          concept of publishing as a distinct, revenue-generating business in
          India. His efforts have helped transform the way Indian creators view
          ownership and intellectual property, aligning the country’s practices
          with those of the global music economy.
        </p>
        <h4>Mentorship, Legacy, and Vision</h4>
        <p>
          Across his career, Atul Churamani has been a consistent advocate for
          professionalism, ethics, and knowledge in the music business. He has
          mentored countless young executives and artists, guiding them to
          balance creativity with commercial understanding.
        </p>
        <p>
          Colleagues describe him as a rare combination of strategist, educator,
          and innovator — equally at home in a boardroom, recording studio, or
          live venue. His influence spans not just the companies he has led but
          the very frameworks through which India’s music industry operates
          today.
        </p>
        <p>
          {" "}
          From pioneering publishing and digital systems to leading national
          standardisation in music metadata, Atul continues to champion a vision
          of an industry that values creators, protects rights, and embraces
          innovation — ensuring that India’s music resonates as powerfully in
          the boardroom as it does in the heart.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AtulChuramani;
