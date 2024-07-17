import { ProjectType } from '@types'

type ProjectProps = {
  project: ProjectType
}

export const Project = ({project}: ProjectProps) => {
  return (
    <div>{project.name}</div>
  )
}
