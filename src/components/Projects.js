import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Todo",
      description: "I created a React Todo web app for streamlined task management, offering easy task addition, status toggling, and deletion. Its sleek design, including shadow boxes and white text, guarantees user satisfaction. The dynamic background video and responsive design enhance the app's appeal and usability.",
      imgUrl: projImg1,
    },
    {
      title: "Ecommerce",
      description: "I designed and developed a React-based e-commerce website, replicating the Reliance Digital platform. This clone offers a user-friendly interface and functionalities similar to the original, providing an immersive shopping experience for electronic products and gadgets.",
      imgUrl: projImg2,
    },
    {
      title: "Tour and Expense tracker",
      description: "A React-based tour and expense tracker app efficiently manages travel plans and expenses. It offers seamless tracking of expenditures and itinerary planning, ensuring organized and hassle-free trips.",
      imgUrl: projImg3,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
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
                <p>In my work, I use all my skills to create amazing results. I'm really good at what I do, and I carefully make successful stories that grab attention and motivate others. Every job and challenge is like a blank canvas where I create impressive accomplishments. I show how skilled and creative I am. By always aiming for the best, I turn possibilities into impressive, inspiring achievements. This proves how much dedication and skill can truly achieve.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item> */}
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                    <Tab.Pane eventKey="section"><p>I possess the ability to swiftly grasp new concepts and adjust to changes rapidly.</p>
                      </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>I have a strong commitment to personal growth and advancing my career. I actively seek out opportunities to learn new things that will have a positive impact on my development.</p>
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
