export interface Images {
    image_id: number;
    src: string
}
export interface BigImage {
    src: string
}
export interface Comment {
    name: string,
    id: number,
    image_id: number,
    description: string
}

export interface IAction {
    type: string,
    payload: Images[],
}

export interface IGalleryState {
    isloading: boolean,
    data: Images[],
}
export interface IModalState {
    isloading: boolean,
    data: {
        linkToImage: BigImage,
        comments: Comment[]
    },
}
export interface State {
    gallery: IGalleryState,
    modal: IModalState,
}