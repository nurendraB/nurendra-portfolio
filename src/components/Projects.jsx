import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <p className="text-green-400 uppercase tracking-widest text-sm">
            Projects
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Featured Security Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-green-500 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="flex justify-between items-center mb-4">

                <span className="text-green-400 text-sm">
                  {project.category}
                </span>

                <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                  {project.status}
                </span>

              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">

                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-800 px-3 py-1 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300"
              >
                <FaGithub />
                View Repository
              </a>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}