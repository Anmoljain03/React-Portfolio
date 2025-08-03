import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projectsGroup1 = [
  {
    id: 1,
    title: "Doctor Appointment Booking System with Admin Panel",
    description:
      "A secure Doctor Appointment System with role-based panels for patients, doctors, and admins, real-time scheduling, and profile management—ensuring smooth appointment booking and complete admin oversight.",
    image: "/projects/project2.png",
    tags: ["React", "TailwindCSS", "Node.js", "Express", "Razorpay", "Authentication"],
     demoUrl: "https://prescripto-frontend-ndl3.onrender.com",
    githubUrl: "https://github.com/Anmoljain03/Acuhealth-doctor-appointmet-booking",
  },


  {
    id: 2,
    title: "E-commerce Website with Admin Panel",
    description: "A full-featured e-commerce website with product listings, cart, checkout, Stripe/Razorpay/COD payments, order tracking, and a powerful admin panel for managing products and orders.",
    image: "/projects/e-commerce.png",
    tags: ["React", "Bootstap", "MongoDB", "Stripe/Razorpay", "Admin Dashboard", "Order Tracking"],
    demoUrl: "https://global-mart-frontend.onrender.com",
    githubUrl: "https://github.com/Anmoljain03/global-mart",
  },
];

const projectsGroup2 = [
  {
    id: 3,
    title: "College Placement Portal",
    description: "A full-stack college placement portal for managing student registrations, job postings, and recruitment workflows.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "MongoDB", "Node.js", "Express", "WebSocket"],
    demoUrl: "https://placement-poornima-frontend1.onrender.com",
    githubUrl: "https://github.com/Anmoljain03/Placement-poornima",
  },
  {
    id: 4,
    title: "Cryptex Frontend",
    description:
      "Responsive crypto website with a user-friendly UI showing currency and Bitcoin prices.",
    image: "/projects/project3.png",
    tags: ["HTML", "CSS", "JavaScript", "Framer-Motion", "Responsive Design"],
    demoUrl: "https://cryptexx.netlify.app",
    githubUrl: "https://github.com/Anmoljain03/frontend-crypto-website",
  },
];

export const ProjectsSection = () => (
  <section id="projects" className="py-24 px-4 relative">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Featured <span className="text-primary">Projects</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
      </p>

      {/* 2 rows, 2 cards per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto max-w-6xl">
        {[...projectsGroup1, ...projectsGroup2].map((project) => (
          <div
            key={project.id}
            className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-full"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <ExternalLink size={20} />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://github.com/Anmoljain03"
          target="_blank"
          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
        >
          Check My GitHub <ArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  </section>
);
