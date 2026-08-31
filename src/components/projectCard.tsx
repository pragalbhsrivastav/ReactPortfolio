import { ArrowUpRight } from 'react-bootstrap-icons';

interface ProjectCardProps {
  link: string;
  title: string;
  blurb: string;
  imgUrl: string;
  stack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
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
      className="card card-hover group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-16/10 overflow-hidden border-b border-line bg-surface">
        <img
          src={imgUrl}
          alt={`${title} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-lg bg-ink/70 text-soft opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
          <ArrowUpRight size={14} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {blurb}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
