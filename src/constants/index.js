const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Projects",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  // {
  //   id: "trash",
  //   name: "Archive", // was "Trash"
  //   icon: "trash.png",
  //   canOpen: false,
  // },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title: "Job Board",
    image: "/images/blog1.png",
    link: "https://github.com/dipto3/Job-Board",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "Barta",
    image: "/images/blog1.png",
    link: "https://github.com/dipto3/Barta",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "Restful Api for URL shortener Service",
    image: "/images/blog1.png",
    link: " https://github.com/dipto3/RESTful-API-for-a-URL-shortener-service",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["Vue.js", "Nuxt.js", "React.js"],
  },
  // {
  //   category: "Mobile",
  //   items: ["React Native", "Expo"],
  // },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["PHP", "Laravel"],
  },
  {
    category: "Database",
    items: ["MySql"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/dipto3",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://dipto.dev.bd/",
  },
  // {
  //   id: 3,
  //   text: "Twitter/X",
  //   icon: "/icons/twitter.svg",
  //   bg: "#ff866b",
  //   link: "https://x.com/jsmasterypro",
  // },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/piyal-guho-dipto",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.jpg",
  },
  {
    id: 2,
    img: "/images/me.jpeg",
  },
  {
    id: 3,
    img: "/images/gal3.jpg",
  },
  // {
  //   id: 4,
  //   img: "/images/gal2.jpeg",
  // },
];

export {
  blogPosts,
  dockApps,
  gallery,
  navIcons,
  navLinks,
  photosLinks,
  socials,
  techStack,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Job Board",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Job Board.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Admin Login",
            "Admin Dashboard",
            "Company Dashboard",
            "Role & Permission Management",
            "Package Creation & Management",
            "Company Registration & Login",
            "Admin Company Approval System",
            "Free Job Posting Package",
            "Customizable Job Post Limits",
            "Premium Package Purchase",
            "SSL Payment Gateway Integration",
            "Job CRUD Management",
            "Job Expiration Date",
            "Job Visibility Control",
            "Apply Button Click Tracking",
            "Job View Tracking",
            "Candidate Registration & Login",
            "Job Category Subscription",
            "Email Job Notifications",
            "Candidate Job Search",
            "Tag-Based Job Search",
            "Location-Based Job Search",
            "Salary Range Filtering",
            "Public Job Listings",
            "Admin User Management",
            "Admin Job Management",
          ],
        },
        {
          id: 2,
          name: "job-board.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "#",
          position: "top-10 right-20",
        },
        // {
        //   id: 4,
        //   // name: "job-board.png",
        //   // icon: "/images/image.png",
        //   kind: "file",
        //   fileType: "img",
        //   position: "top-52 right-80",
        //   imageUrl: "",
        // },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Barta",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Barta Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "User Registration & Login System",
            "User Profile Management",
            "Profile Update Feature",
            "Authenticated User Post Creation",
            "Post CRUD Management",
            "Like Feature",
            "Comment Feature",
            "Comment CRUD Management",
            "Real-Time In-App Notifications",
            "Like & Comment Notifications",
            "Event-Triggered Notifications",
            "In-App & Email Notifications",
            "Home Feed with All User Posts",
            "User Search Functionality",
            "Search by Username",
            "Search by Email",
            "Find User Profiles",
          ],
        },
        {
          id: 2,
          name: "barta.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "#",
          position: "top-20 left-20",
        },
        // {
        //   id: 4,
        //   name: "barta.png",
        //   icon: "/images/image.png",
        //   kind: "file",
        //   fileType: "img",
        //   position: "top-52 left-80",
        //   imageUrl: "/images/project-2.png",
        // },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 left-5",
        // },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Restful Api for URL shortener Service",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Restful Api for URL shortener Service Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "User Registration & Login System",
            "Sanctum API Authentication",
            "API Key Generation & Management",
            "Authenticated URL Shortening Service",
            "Long URL to Short URL Conversion",
            "Duplicate URL Detection",
            "Existing Short URL Reuse",
            "API Key Validation",
            "User URL Listing Endpoint",
            "Registered URL Management",
            "Shortened URL Redirect System",
            "Automatic Redirect to Original URL",
            "RESTful API Endpoints",
          ],
        },
        {
          id: 2,
          name: "Restful Api for URL shortener Service.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "#",
          position: "top-10 right-20",
        },
        // {
        //   id: 4,
        //   name: "Restful Api for URL shortener Service.png",
        //   icon: "/images/image.png",
        //   kind: "file",
        //   fileType: "img",
        //   position: "top-52 right-80",
        //   imageUrl: "/images/project-3.png",
        // },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.jpeg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/gal3.jpg",
    },
    // {
    //   id: 3,
    //   name: "conference-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-52 left-80",
    //   imageUrl: "/images/gal1.jpg",
    // },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/me.jpeg",
      description: [
        "Hey! I’m Dipto 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in PHP, Laravel, JavaScript, React, and Vue, Nuxt.js—and I love making things feel smooth, fast, and just a little bit delightful.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    }
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
