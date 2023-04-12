import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/labormate.png";
import projImg2 from "../assets/img/magni.png";
import projImg3 from "../assets/img/shopi.png";
import stream from "../assets/img/stream.png";
import chat from "../assets/img/chat.png";
import xray from "../assets/img/chest.png";
import lip from "../assets/img/lip.png";
import recom from "../assets/img/recom.png";
import audio from "../assets/img/audio.png";
import mental from "../assets/img/mental.png";
import comment from "../assets/img/comment.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const web = [
    {
      title: "LabourMate",
      description: "Compare and Hire labours based on Rating, Expreince and Charges",
      imgUrl: projImg1,
    },
    {
      title: "MagnifiQue",
      description: "A public platform where you can explore a wide range of ideas, display photography skills, share those cherishable moments ",
      imgUrl: projImg2,
    },
    {
      title: "ShopiQue",
      description: "An Ecommerce Website where you can find, compare and buy items",
      imgUrl: projImg3,
    },
    {
      title: "Suraksha",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "StreamQue",
      description: "Stream anything whatever you want wherever you want",
      imgUrl: stream,
    },
    {
      title: "ChatiQue",
      description: "Web 3.0 based chating app",
      imgUrl: chat,
    },
  ];

  const DS = [
    {
      title: "Lip Reader and Annotation Generator",
      description: "LSTM-CNN model capable of reading human lips",
      imgUrl: lip,
    },
    {
      title: "Speech Emotions Recognition",
      description: "Speech Emotion Recognition, abbreviated as SER, is the act of attempting to recognize human emotion and affective states from speech ",
      imgUrl: audio,
    },
    {
      title: "Chest X-ray",
      description: "Predicting probablity of COVID19, PNEUMONIA, TURBERCULOSIS by scanning thhrough Chest X-Ray",
      imgUrl: xray,
    },
    {
      title: "Comment Toxicity Analyzer",
      description: "",
      imgUrl: projImg1,
    },
    {
      title: "Reverse Image Search and Recommendation System",
      description: "The Model involves the process of searching for more relevant images using images",
      imgUrl: recom,
    },
    {
      title: "Student Mental Health",
      description: "The importance of mental health in college students cannot be emphasized enough. As students leave everything familiar to them and enter university, they may experience emotional and mental strain",
      imgUrl: mental,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Data Science</Nav.Link>
                    </Nav.Item>

                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          web.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          DS.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
