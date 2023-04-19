export interface ITask {
  _id: string
  title: string
  description?: string
  section: ISection
}

export interface ISection {
  _id: string
  title: string
}

export interface IBoardColumn extends ISection {
  tasks: ITask[]
}

export type Media = {
  publicUrl: string
  filename: string
}
