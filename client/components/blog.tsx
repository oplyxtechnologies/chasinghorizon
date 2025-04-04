import { ReactNode } from "react";

export type Module = {
  title: string;
  lectures: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Instructor = {
  profilePicUrl: string;
  name: string;
  role: string;
  rating: number;
};

export type blog = {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: ReactNode;
  lastUpdatedDate: Date;
  keyLearnings: string[];
  modules: Module[];
  faqs: FaqItem[];
  price: number;
  language: string;
  videoUrl: string;
  rating: number;
  enrolledCount: `${number}k`;
  image: string;
  slug: string;
  duration: `${number}h ${number}min`;
  isCertificateAvailable: boolean;
  lectures: number;

  instructor: Instructor;
};

export const blog: blog[] = [
  {
    id: 1,
    title: "Frontend Workshop",
    shortDescription: "Learn the fundamentals of front-end development.",
    longDescription: (
      <>
        <p>
          Embark on a comprehensive journey to master front-end development.
          This blog is designed to teach you the essentials of HTML, CSS, and
          JavaScript, ensuring a strong foundation for your web development
          career.
        </p>
        <p>
          By diving into real-world projects, you&apos;ll understand how to
          create interactive and visually appealing web pages. The blog also
          covers the latest trends and tools in front-end development.
        </p>
        <p>
          Explore topics like responsive design, accessibility, and basic
          JavaScript programming to enhance user experience. Yo&apos;ll learn to
          debug and optimize your code using developer tools and gain insights
          into performance optimization.
        </p>
        <p>
          Build a portfolio-ready project by the end of the blog to showcase
          your skills. This workshop is perfect for beginners or anyone looking
          to solidify their front-end development expertise.
        </p>
      </>
    ),
    lastUpdatedDate: new Date("2024-06-12"),
    keyLearnings: [
      "Understand HTML semantics.",
      "Master CSS layouts and responsive design.",
      "Learn JavaScript fundamentals, including ES6 features.",
      "Create interactive and accessible web pages.",
      "Work with developer tools to debug and optimize code.",
      "Build a small project to consolidate learning.",
      "Understand the basics of web performance optimization.",
    ],
    modules: [
      {
        title: "HTML Basics",
        lectures: ["What is HTML?", "Tags and Attributes", "Creating Forms"],
      },
      {
        title: "CSS Fundamentals",
        lectures: ["Styling Basics", "Box Model", "Flexbox and Grid"],
      },
      {
        title: "JavaScript Essentials",
        lectures: [
          "Variables and Data Types",
          "Functions and Events",
          "DOM Manipulation",
        ],
      },
      {
        title: "Responsive Design",
        lectures: ["Media Queries", "Mobile-First Approach"],
      },
      {
        title: "Project: Simple Portfolio",
        lectures: ["Creating HTML Structure", "Styling with CSS"],
      },
    ],
    faqs: [
      {
        question: "Do I need prior coding experience?",
        answer: "No, this blog is designed for beginners.",
      },
      {
        question: "What tools are required?",
        answer: "A web browser and a code editor like VSCode.",
      },
      {
        question: "Will there be hands-on projects?",
        answer: "Yes, you will create a portfolio project by the end.",
      },
      {
        question: "Is there a certificate provided?",
        answer: "Yes, a certificate is provided upon completion.",
      },
    ],
    price: 1499,
    language: "Eng & Nep",
    videoUrl: "youtube/_cMxraX_5RE",
    rating: 4.5,
    enrolledCount: "1.2k",
    image: "/hero.png",
    slug: "frontend-workshop",
    duration: "12h 56min",
    isCertificateAvailable: true,
    lectures: 17,

    instructor: {
      profilePicUrl: "https://avatars.githubusercontent.com/u/12345678",
      name: "Binamra Lamsal",
      role: "Web Developer",
      rating: 4.8,
    },
  },
  {
    id: 2,
    title: "Python Workshop",
    shortDescription: "Master Python basics and start coding confidently.",
    longDescription: (
      <>
        <p>
          This workshop introduces you to Python, one of the most popular
          programming languages in the world. Designed for beginners, it covers
          everything from setting up Python to writing your first program.
        </p>
        <p>
          You&apos;ll learn about data types, variables, control structures, and
          Python&apos;s versatile libraries. The blog includes practical
          examples and exercises to solidify your understanding.
        </p>
        <p>
          Explore foundational programming concepts like loops, functions, and
          debugging techniques, gaining the confidence to create scripts and
          applications.
        </p>
        <p>
          The blog also dives into using third-party libraries, enabling you to
          extend Python&apos;s functionality for various use cases. By the end,
          you&apos;ll be equipped with the skills needed to start building
          real-world Python applications.
        </p>
      </>
    ),
    lastUpdatedDate: new Date("2024-05-10"),
    keyLearnings: [
      "Understand Python syntax and structure.",
      "Learn to use variables and data types effectively.",
      "Master control structures like loops and conditions.",
      "Explore Python's built-in libraries and functions.",
      "Write basic scripts and programs.",
      "Understand debugging techniques in Python.",
      "Learn how to install and use third-party libraries.",
    ],
    modules: [
      {
        title: "Getting Started with Python",
        lectures: ["Installing Python", "Writing Your First Program"],
      },
      {
        title: "Data Types and Variables",
        lectures: ["Numbers", "Strings", "Lists and Dictionaries"],
      },
      { title: "Control Flow", lectures: ["If Statements", "Loops"] },
      {
        title: "Working with Functions",
        lectures: ["Defining Functions", "Using Parameters"],
      },
      {
        title: "Introduction to Libraries",
        lectures: ["Using Math and Random Libraries"],
      },
    ],
    faqs: [
      {
        question: "Is Python suitable for beginners?",
        answer: "Yes, it's beginner-friendly and widely used.",
      },
      {
        question: "What IDE should I use?",
        answer: "You can use PyCharm, VSCode, or any text editor.",
      },
      {
        question: "Are there any projects in this blog?",
        answer: "Yes, you'll build small Python scripts during the blog.",
      },
    ],
    price: 39.99,
    language: "English",
    videoUrl: "youtube/_cMxraX_5RE",
    rating: 4.7,
    enrolledCount: "900k",
    image: "/hero.png",
    slug: "python-workshop",
    duration: "10h 30min",
    isCertificateAvailable: true,
    lectures: 15,

    instructor: {
      profilePicUrl: "https://avatars.githubusercontent.com/u/12345678",
      name: "Jane Smith",
      role: "Software Engineer",
      rating: 4.9,
    },
  },
  {
    id: 3,
    title: "Graphic Design Workshop",
    shortDescription: "Learn the essentials of graphic design.",
    longDescription: (
      <>
        <p>
          Unlock your creativity and master the principles of graphic design in
          this hands-on workshop. Perfect for beginners, this blog explores
          typography, color theory, and layout design.
        </p>
        <p>
          With practical projects and real-world examples, you&apos;ll learn to
          create visually appealing designs. You&apos;ll gain an understanding
          of the importance of composition, white space, and responsive design.
        </p>
        <p>
          Discover the basics of digital and print design, along with tools like
          Figma and Adobe XD to create professional-grade graphics.
        </p>
        <p>
          By the end, you&apos;ll have the skills to design logos, posters, and
          digital graphics confidently, along with a portfolio to showcase your
          expertise.
        </p>
      </>
    ),
    lastUpdatedDate: new Date("2024-04-15"),
    keyLearnings: [
      "Understand typography and its role in design.",
      "Master color theory and create appealing palettes.",
      "Learn the fundamentals of layout and composition.",
      "Create responsive designs for different platforms.",
      "Understand the basics of digital and print design.",
    ],
    modules: [
      {
        title: "Introduction to Graphic Design",
        lectures: ["What is Graphic Design?", "Design Tools Overview"],
      },
      {
        title: "Typography and Fonts",
        lectures: ["Choosing Fonts", "Combining Typography"],
      },
      {
        title: "Colors and Palettes",
        lectures: ["Color Psychology", "Working with Palettes"],
      },
      {
        title: "Layouts and Composition",
        lectures: ["Grids", "White Space and Balance"],
      },
    ],
    faqs: [
      {
        question: "Do I need design software?",
        answer: "Yes, tools like Figma or Adobe XD are recommended.",
      },
      {
        question: "Can I use this blog to create a portfolio?",
        answer: "Yes, you'll design projects to showcase.",
      },
    ],
    price: 29.99,
    language: "English",
    videoUrl: "youtube/_cMxraX_5RE",
    rating: 4.6,
    enrolledCount: "700k",
    image: "/hero.png",
    slug: "graphic-design-workshop",
    duration: "8h 45min",
    isCertificateAvailable: true,
    lectures: 12,

    instructor: {
      profilePicUrl: "https://avatars.githubusercontent.com/u/12345678",
      name: "Alex Lee",
      role: "Graphic Designer",
      rating: 4.7,
    },
  },
  {
    id: 4,
    title: "UI/UX with Nexorith",
    shortDescription:
      "Master the art of creating intuitive and visually appealing user interfaces.",
    longDescription: (
      <>
        <p>
          Dive deep into the fascinating world of UI/UX design and learn how to
          craft designs that are both visually stunning and highly functional.
          This blog introduces the fundamental principles of user interface and
          user experience design, equipping you with skills to create
          user-centered applications and websites.
        </p>
        <p>
          Through real-world projects and hands-on exercises, you&apos;ll
          explore the intricacies of design thinking, user research,
          wireframing, and prototyping. This workshop ensures that you not only
          understand the theoretical concepts but also gain practical experience
          in applying them to solve real-world problems.
        </p>
        <p>
          Learn how to conduct effective usability testing, analyze user
          feedback, and iterate designs to meet user needs and business goals.
          The blog also delves into responsive and adaptive design, enabling you
          to create interfaces optimized for various devices and screen sizes.
        </p>
        <p>
          Discover cutting-edge tools like Figma and Adobe XD to bring your
          ideas to life. You&apos;ll learn to create high-fidelity wireframes
          and interactive prototypes, gaining insights into modern design
          workflows and techniques.
        </p>
        <p>
          With Nexorith as the foundation, this blog introduces advanced topics
          like integrating AI into UX research and incorporating UX practices
          into agile workflows. These skills will prepare you to tackle the
          challenges of the ever-evolving design landscape.
        </p>
        <p>
          By the end of the blog, you&apos;ll have the expertise to design
          seamless user experiences and visually compelling interfaces, along
          with a portfolio to showcase your skills to potential employers or
          clients.
        </p>
        <p>
          Whether you&apos;re a beginner eager to explore design or a
          professional seeking to enhance your skills, this blog offers
          something valuable for everyone. Embark on this journey and redefine
          your understanding of great design!
        </p>
      </>
    ),
    lastUpdatedDate: new Date("2024-05-20"),
    keyLearnings: [
      "Understand the basics of UI/UX design and its importance.",
      "Learn design thinking and user-centered design principles.",
      "Conduct user research and create user personas.",
      "Design wireframes and prototypes for web and mobile applications.",
      "Master usability testing and iterative design processes.",
      "Explore tools like Figma and Adobe XD for prototyping.",
      "Learn to design responsive interfaces for different devices.",
      "Understand the integration of UI/UX in development workflows.",
    ],
    modules: [
      {
        title: "Introduction to UI/UX",
        lectures: [
          "What is UI/UX?",
          "The Importance of Good Design",
          "Understanding User Needs",
        ],
      },
      {
        title: "Design Thinking and User Research",
        lectures: [
          "Empathy Mapping",
          "Creating User Personas",
          "Defining User Goals",
        ],
      },
      {
        title: "Wireframing and Prototyping",
        lectures: ["Basics of Wireframing", "Creating Prototypes with Figma"],
      },
      {
        title: "Usability Testing",
        lectures: [
          "Conducting Tests",
          "Analyzing Feedback",
          "Improving Designs",
        ],
      },
      {
        title: "Responsive and Adaptive Design",
        lectures: [
          "Media Queries and Breakpoints",
          "Designing for Different Devices",
        ],
      },
      {
        title: "Advanced Topics with Nexorith",
        lectures: [
          "Integrating UX into Agile Workflows",
          "Using AI in UX Research",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need prior design experience?",
        answer: "No, this blog is suitable for beginners.",
      },
      {
        question: "What tools are required for this blog?",
        answer: "You'll need access to Figma or Adobe XD.",
      },
      {
        question: "Will this blog help me build a portfolio?",
        answer:
          "Yes, you'll work on real-world projects to showcase your skills.",
      },
      {
        question: "Is this blog suitable for developers?",
        answer:
          "Absolutely! Developers can gain insights into the design process to work better with design teams.",
      },
      {
        question: "What industries can benefit from UI/UX skills?",
        answer:
          "UI/UX is essential for web, mobile, and software design across industries.",
      },
    ],
    price: 59.99,
    language: "English",
    videoUrl: "youtube/_cMxraX_5RE",
    rating: 4.8,
    enrolledCount: "1.5k",
    image: "/hero.png",
    slug: "ui-ux-with-nexorith",
    duration: "9h 20min",
    isCertificateAvailable: true,
    lectures: 14,

    instructor: {
      profilePicUrl: "https://avatars.githubusercontent.com/u/12345678",
      name: "Emily Johnson",
      role: "UI/UX Designer",
      rating: 4.9,
    },
  },
];
