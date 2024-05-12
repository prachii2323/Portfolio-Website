import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "React-Registration-Form",
      description: "React & Downlaod",
      imgUrl: projImg1,
    },
    {
      title: "Resume Builder",
      description: "React Framework",
      imgUrl: projImg2,
    },
    {
      title: "Expense Tracker",
      description: "Session Storage",
      imgUrl: projImg3,
    },
    {
      title: "E-commerce Website",
      description: "Design & Tailwind",
      imgUrl: projImg4,
    },
    {
      title: "Temp Converter",
      description: "JavaScript",
      imgUrl: projImg6,
    },
    {
      title: "API Fecting Products Website",
      description: "API fetching",
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> I've embarked on a journey of crafting digital experiences that seamlessly blend creativity with functionality. From dynamic web applications to responsive interfaces, each project is a testament to my passion for pushing boundaries and delivering solutions that resonate with users. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Throughout my academic and professional journey, I've continually honed my skills and embraced emerging technologies. Here's a glimpse of my trajectory:
Education: Graduated with distinction in Computer Science Engineering, where I gained a solid foundation in software development principles, algorithms, and data structures.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Full stack software developer with expertise in frontend and backend development, experienced in working under big projects. Robust skill set spanning ReactJS, NodeJS, ExpressJS, C++, HTML, CSS, JavaScript, Chakra UI, Material UI, Bootstrap, basic Python and Java, MySQL, and PHP. Passionate about solving complex problems and creating seamless user experiences. Open to exciting opportunities in the tech realm.</p>
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
