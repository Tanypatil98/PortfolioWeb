import React from "react"
import { FaCode, FaSketch, FaAndroid, FaLock, FaCog } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `Web development service involves the creation and maintenance of websites and web applications. This individual specializes in designing and coding websites, ensuring functionality, responsiveness, and a user-friendly experience. They work with programming languages such as HTML, CSS, and JavaScript to bring visual and interactive elements to life. From initial concept to final deployment, this person navigates the entire development process, incorporating client requirements and industry best practices. Their skills encompass front-end and back-end development, database management, and troubleshooting to deliver a seamless online presence for businesses and individuals. We develop Web applications that help to run your businesses smoothly and we provide backend systems.`,
  },
  {
    id: 2,
    icon: <FaAndroid className="service-icon" />,
    title: "app development",
    text: `Mobile development service is the process of creating applications for mobile devices, such as smartphones and tablets. This service involves designing, coding, testing, and deploying mobile apps to meet the specific needs and goals of an individual client. A skilled mobile developer, working solo, can provide end-to-end services, from conceptualizing the app idea to delivering a fully functional product. This includes user interface (UI) design, user experience (UX) optimization, and ensuring compatibility across different mobile platforms. The goal is to create a seamless and responsive mobile application that aligns with the client's vision and requirements.`,
  },
  {
    id: 3,
    icon: <FaLock className="service-icon" />,
    title: "Security",
    text: `Hosting providers protect the server your website is on, not the website itself. You can think of the website-host relationship like an apartment building: management provides security for the whole building, but it’s up to each occupant to lock their door.`,
  },
  {
    id: 4,
    icon: <FaCog className="service-icon" />,
    title: "Maintenance",
    text: `Maintenance service involves tasks such as bug fixes, software patches, updates, and enhancements, all of which are managed and executed by the designated person. The individual overseeing the maintenance ensures the smooth functioning of the software, addressing issues promptly, and implementing improvements as needed. This personalized approach allows for efficient communication and a tailored response to the specific requirements of the software and the user.`,
  },
]

export default services
