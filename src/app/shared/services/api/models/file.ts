export interface File {
  uuid?: string,
  fileType?: string,
  fileName?: string,
  fileUrl?: string,
  fileThumbnailUrl?: string,
  createdAt?: string,
  updatedAt?: string,
  deletedAt?: string,
  [prop: string]: any
}