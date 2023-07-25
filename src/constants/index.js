import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    logo,
    metaversus,
    tshirt
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React  Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Next Js Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "E-Commerce",

      icon: logo,
      iconBg: "#383E56",
      date: "",
      points: [
        " Utilize Next.js, a popular React framework, for server-side rendering, optimized routing, and performance benefits.",
        " Ensure the E-commerce site is fully responsive, providing a seamless user experience across various devices.",
        "Create a product details page with comprehensive information, images, and reviews.",
        " Develop a shopping cart functionality to allow users to add and manage their selected items.",
        "Design a smooth and secure checkout process, including payment gateway integration.",
        "Create an admin panel to manage products, orders, and customer data.",
        "Implement SEO best practices to improve search engine visibility and organic traffic."
      ],
    },
    {
      title: "Blog",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Ensure the blog is fully responsive, providing a seamless user experience across various devices..",
        " Single Post View: Create a single post view with the complete blog post content, author information, and comments (if applicable).",
        "Rich Text Editing: Include a rich text editor to make it easy for authors to format and style blog content.",
        "Social Sharing: Include social media sharing options to encourage readers to share blog posts.",
      ],
    },
    {
      title: "Landing Page",
      icon: logo,
      iconBg: "#383E56",
      date: "",
      points: [
        "Ensure the landing page is fully responsive, providing a seamless user experience across various devices.",
        "Hero Section: Create an attention-grabbing hero section with a clear and compelling call-to-action (CTA).",
        "Product/Service Showcase: Highlight your product or service with visually appealing images and engaging descriptions.",
        "Features and Benefits: Showcase the key features and benefits of your offering to entice users.",
        "Testimonials: Include testimonials or customer reviews to build trust and credibility.",
        "Call-to-Action Buttons: Use strategically placed CTA buttons to prompt users to take desired actions."
      ],
    },
    {
      title: "ThreeJS",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        " Create interactive interactions with 3D elements to improve user engagement.",
        "Use shaders and advanced visual effects to enhance aesthetics and user experience..",
        "Implement techniques to make 3D content crawlable by search engines.",
        "Add realistic 3D models to showcase products or represent concepts interactively.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "NextJs",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://car-hub-chi.vercel.app/",
    },
    {
      name: "Custom Threads",
      description:
      "3D T-shirt app with limitless customization. Choose colors, logos, and personalize using OpenAI API. Vite, React, and Three.js power it.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Three.Js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tshirt,
      source_code_link: "https://customthreads.vercel.app/",
    },
    {
      name: "Metaversus",
      description:
      "Metaverse-inspired landing page showcasing CSS, Framer Motion skills. Tailwind CSS, Next.js utilized for immersive experience.",
      tags: [
        {
          name: "NextJs",
          color: "blue-text-gradient",
        },
     ,
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: metaversus,
      source_code_link: "http://metaverse-landing-page-sigma.vercel.app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };