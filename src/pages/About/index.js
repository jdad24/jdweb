import "./styles.css";

const roles = [
  {
    title: "Web Developer",
    description: `I have 5+ years of expertise in web application development, leading and contributing to enterprise projects
         in both the front-end and back-end. Gathering user interface requirements during the planning stages and bringing those
         requirements to life is a fulfillng endeavor in which I lead day-to-day. I prioritize open communication along with
         clearly defined project criteria within all project discussion.`,
    highlights: ["ReactJS", "NodeJS", "JavaScript/HTML/CSS/SCSS", "Python"],
  },
  {
    title: "Mobile iOS Developer",
    description: `I develop user friendly user interfaces for the iOS device platform. I have led the development of enterprise
    level applications using UIKit, which I use to develop in a programmatic approach. Developing programatically, instead of 
    using XCode's Storyboard feature, allows for a more streamline approach when developing or sharing code with other
    developers (it can get messy when the number of storyboard files gets to a certain point!).`,
    highlights: ["Swift Programming Language", "SwiftUI", "UIKit"],
  },
];

const topics = [
  {
    title: "User Interface Development",
    description: `I develop clean, yet engaging user interfaces, providing users with the necessary functionality
    to complete tasks in an effective manner. Less is more - I believe in designing user interfaces without clutter,
    effectively limiting user information overload and unnecessary distractions on the screen.`,
    highlights: ["ReactJS", "CSS/SCSS"],
  },
  {
    title: "API Development and Database Management",
    description: `I handle the communication between the frontend and backend. Following the gold standard, I handle resource 
    retrieval and manipulation via REST API endpoints. I manage relational databases and their stored data via primarily SQL.`,
    highlights: ["SQL, NodeJS, Java, Python", "GraphQL"],
  },
];

const renderInfo = () => {
  return (
    <>
      <div className="info-section">
        <div className="section-title">Developer Roles</div>
        {roles.map((role, i) => {
          return (
            <div className="item-container" key={i}>
              <div className="item-title">{role.title}</div>
              <div className="item-description">{role.description}</div>
            </div>
          );
        })}
      </div>
      <div className="info-section">
        <div className="section-title">Key Areas of Development</div>
        {topics.map((topic, i) => {
          return (
            <div className="item-container" key={i}>
              <div className="item-title">{topic.title}</div>
              <div className="item-description">{topic.description}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const Home = () => {
  return (
    <div className="about-container">
      {/* <div className="title">What I do:</div> */}
      {renderInfo()}
      {/* <div className="name-container">Joshua Dadson</div>
            <h2>IBM (Current Employer)</h2>
            <ul>
                <li>Software Engineer (March 2023 - Present)</li>
                <ul>
                    <li>
                        Leading the development of a user interface serving as a migration from our Slack Bot interface. Application 
                        served as a portal to numerous services provided by our IAAS team, such as dev request management and incident resolution.                            
                    </li>
                    <li>Stack: ReactJS, JavaScript Python, IBM Cloud, Docker/Podman, RedHat</li>
                </ul>
                <li>Software Engineer (February 2019 - March 2023)</li>
                <ul>
                    <li>
                        Merge 
                    </li>
                    <li>Stack: ReactJS, NodeJS, JavaScript, GraphQL, IBM Cloud</li>
                </ul>
            </ul> */}
      {/* <div className="image-container">
                <img className="image" src={Joshua} alt="" />
            </div>
            <div className='intro-container'>My entry into the professional software dev space began with an internship at Mr. Cooper (a loan origination company) summer of 2019. I completed
                this internship in tandem with my Master's degree in Computer Science. During this internship, I was first exposed to ReactJS, one of the most popular
                JavaScript frameworks used for web application development. Taking what I learned from this internship, I managed to land a subsequent internship
                with IBM that following August, where I contributed to a plethora of ReactJS and NodeJS based projects (dashboards, api management, asset catalogs).
                I also introduced myself to mobile application development during this period, learning Swift and its surrounding tools, such as XCode, UIKit, SwiftUI,
                and SpriteKit (game dev - so much fun!). Cloud services were also a focal point in my role, with IBM Cloud being the cloud service utilized.
                In December 2019, I completed my Master's and was hired full-time with IBM, where I continued to contributed with web app dev and even made a
                mobile iOS app for my team. In March of 2020, I took on my current role as a Cloud Engineer.
            </div> */}
    </div>
  );
};

export default Home;
