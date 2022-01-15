import { ProjectPreview } from './ProjectPreview'

export const ProjectList = ({ projects }) => {
	return (
		<>
			{projects.map((project, key) => (
				<ProjectPreview key={project.title + key} project={project} />
			))}
		</>
	)
}
