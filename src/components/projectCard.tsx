import { ArrowUpRight } from 'react-bootstrap-icons';

interface ProjectCardProps {
  index: number;
  link: string;
  title: string;
  blurb: string;
  imgUrl: string;
  stack: string[];
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  featured = false,
  link,
  title,
  blurb,
  imgUrl,
  stack,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`group block ${featured ? 'md:col-span-2' : ''}`}
      data-reveal
    >
      <div
        className={`relative overflow-hidden bg-paper-2 ${
          featured ? 'aspect-16/10 md:aspect-21/9' : 'aspect-16/10'
        }`}
      >
        <img
          src={imgUrl}
          alt={`${title} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.05]"
        />
        <span className="orb absolute bottom-5 right-5 h-16 w-16 scale-0 group-hover:scale-100">
          <ArrowUpRight size={20} />
        </span>
      </div>

      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <h3 className="display text-3xl transition-colors group-hover:text-accent sm:text-4xl">
            {title}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-graphite">
            {blurb}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <span className="text-sm font-semibold tabular-nums text-fog">
          {String(index).padStart(2, '0')}
        </span>
      </div>
    </a>
  );
};

export default ProjectCard;
