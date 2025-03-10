
export interface IPost {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  tagId: string?;
}

export interface IPostCardProp {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    tag : {
        name : string
    }
}
