import { File } from "./file";

export interface Presentation {
  id: number,
  name: string,
  qrCode?: string,
  shortKey: string,
  slideNumber: number,
  createdAt: string,
  updatedAt: string,
  deletedAt?: string,
  Files?: Array<File>,
  [prop: string]: any
}