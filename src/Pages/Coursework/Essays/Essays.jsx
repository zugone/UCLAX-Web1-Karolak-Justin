import styled from 'styled-components';

import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled className='Essays'>
            <h1>Essays</h1>
            <Essay question='Q1: Explain the difference between HTML, CSS and JavaScript.'>
                <ul>
                    <li><b>Html: </b>HTML has to do with the content and layout of a given page, what headings, paragraphs, buttons, and images say and how they are organized on the page.</li>
                    <li><b>CSS: </b>CSS influences the look of the page, the color, shape, fonts, and size of its constituents.</li>
                    <li><b>JavaScript: </b>Adds interactivity and functionality like animations and other behaviors. </li>
                </ul>
            </Essay>
            <Essay question='Q2: What is the difference between Git and GitHub?'>
                Git and GitHub are two popular tools in the world of software development that are often used interchangeably, but they are actually different things.

Git is a distributed version control system. It helps developers keep track of the changes made to the source code of a software project over time. It does this by allowing developers to take snapshots of the code, store them, and easily switch between different versions. Git provides a way for developers to collaborate on the same project by sharing their changes with each other.

GitHub, on the other hand, is a web-based platform that provides hosting for Git repositories. It provides a centralized place for developers to store and share their code. GitHub also provides a number of tools and features that make it easier to work with Git, such as issue tracking, project management, and collaboration tools.

In summary, Git is a version control system, while GitHub is a platform that provides hosting and tools for Git repositories. While Git is a standalone tool, it can be used with a number of different hosting providers, while GitHub is a specific platform that provides hosting and tools specifically for Git repositories.

            </Essay>
            <Essay question='Q3: What is the difference between JQuery and React?'>
                jQuery and React are two of the most popular JavaScript libraries used for web development. Although both can be used to create interactive and dynamic user interfaces, they differ in their design principles and use cases.

jQuery was created to simplify HTML document traversal and manipulation, and it makes it easy to add interactivity to a web page by using a simple and intuitive API. It is a small, fast, and feature-rich library that can be added to a web page with just a few lines of code.

On the other hand, React is a JavaScript library for building user interfaces that was developed and is maintained by Facebook. It is based on the concept of components, which are reusable and modular pieces of UI that can be combined to create complex interfaces. React uses a virtual DOM, which allows for efficient updates and rendering of components when the state changes.

In terms of performance, React is faster than jQuery as it only updates the components that have changed, rather than reloading the entire page. React is also better suited for large-scale applications as it allows for better code organization and maintenance, while jQuery is better suited for smaller, simple projects.

Both jQuery and React have their own strengths and weaknesses, and the choice between them largely depends on the specific needs of the project. This project was created with React.

            </Essay>
            <Essay question='Q4: What is the difference between a Front-End and Back-End Developer?'>
            Front end developers are responsible for building the part of the software that users interact with directly. This includes the user interface (UI), which is the visual design of the application, as well as the user experience (UX), which encompasses how users interact with the UI. Front end developers use languages such as HTML, CSS, and JavaScript to build the client-side of web applications. They work closely with designers and UX specialists to ensure that the software is visually appealing, easy to use, and meets the needs of its users.

On the other hand, back end developers are responsible for building the parts of the software that run behind the scenes, including the server-side of web applications. This includes building the database, APIs (Application Programming Interfaces), and the software architecture that enables the application to function. Back end developers typically use programming languages such as Python, Ruby, and Java to build the server-side of the application. They are also responsible for ensuring that the application is scalable, reliable, and secure.
            </Essay>
            <Essay question='Q5: What are the different ways we can link files/resources to our application?'>
                Importing a document-relavent path in which points to a file within the application as well as absolute links such as a hyperlink to another page.
            </Essay>
            <Essay question='Q6: What is the difference between jpg, gif, png and svg images?'>
                <ul>
                    <li><b>JPG: </b>Lossy image format that is ideal for photographs and other complex images with many colors and gradients. It is widely used for web images and digital photography because it can compress large image files without significantly reducing image quality.</li>
                    <li><b>GIF: </b>Compressed image format that supports animations and transparency. It uses a limited color palette of up to 256 colors, making it ideal for simple graphics, logos, and animations with flat color areas. </li>
                    <li><b>PNG: </b>Lossless image format that supports transparency and is ideal for images with sharp edges or areas of solid color. It uses a compression algorithm that preserves image quality without loss, making it well-suited for web design and other applications where image quality is important.</li>
                    <li><b>SVG: </b>Vector-based image format that is resolution-independent, meaning it can be scaled to any size without losing image quality. It is ideal for logos, icons, and other images that need to be displayed at different sizes on different devices. Unlike other image formats, SVG is not made up of pixels, but rather of mathematical equations that define lines, shapes, and colors, which makes it ideal for responsive design and animation.</li>
                </ul>
            </Essay>
            <Essay question='Q7: Define the following Agile roles: Product Owner, Product Manager, Business Analyst, Scrum Master, UX designer, Developer/Engineer, QA/SDET, and DevOps.'>
                <ul>
                    <li><b>Product Owner: </b>Owns the project - optimizes and manages backlog</li>
                    <li><b>Product Manager: </b>Interfaces with clients to determine what would make a successful product</li>
                    <li><b>Business Analyst: </b>Develops business strategy for the project</li>
                    <li><b>Scrum Master: </b>Development team leader - facilitates communication between leadership and team members to meet project goals</li>
                    <li><b>UX Designer: </b>Designs the user experience - determines user journey, types of users, and interactions</li>
                    <li><b>Developer/Engineer: </b>Writes the code for the given designs</li>
                    <li><b>QA/SDET: </b>Ensures the functionality of the product</li>
                    <li><b>DevOps: </b>Supports the development process</li>
                </ul>
            </Essay>
        </EssaysStyled>
    );
}

export default Essays;

const EssaysStyled = styled.main`

`;