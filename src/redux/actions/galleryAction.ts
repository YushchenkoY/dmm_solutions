export const GALLERY_FETCHING = 'GALLERY_FETCHING';
export const GALLERY_SUCCESS = 'GALLERY_SUCCESS';
export const GALLERY_ERROR = 'GALLERY_ERROR';

export const IMAGE_FETCHING = 'IMAGE_FETCHING';
export const IMAGE_SUCCESS = 'IMAGE_SUCCESS';
export const IMAGE_ERROR = 'IMAGE_ERROR';

export const COMMENT_FETCHING = 'COMMENT_FETCHING';
export const COMMENT_SUCCESS = 'COMMENT_SUCCESS';
export const COMMENT_ERROR = 'COMMENT_ERROR';

export const SEND_COMMENT_REQ = 'SEND_COMMENT_REQ';
export const SEND_COMMENT_SUCCESS = 'SEND_COMMENT_SUCCESS';
export const SEND_COMMENT_ERROR = 'SEND_COMMENT_ERROR';



// GALLERY
export function fetchingGallery() {
    return {
        type: GALLERY_FETCHING,
        payload: ''
    }
};
export function successGallery(data_gallery: any) {
    return {
        type: GALLERY_SUCCESS,
        payload: data_gallery
    }
};
export function errorGallery() {
    return {
        type: GALLERY_ERROR,
        payload: ''
    }
}

// BIG IMAGE
export function fetchingImage(image_id: string) {
    return {
        type: IMAGE_FETCHING,
        payload: image_id
    }
};
export function successImage(data_image: any) {
    return {
        type: IMAGE_SUCCESS,
        payload: data_image
    }
};
export function errorImage() {
    return {
        type: IMAGE_ERROR,
        payload: ''
    }
}

// COMMENT 
export function fetchingComment(image_id: string) {
    return {
        type: COMMENT_FETCHING,
        payload: image_id
    }
};
export function successComment(data_comment: any) {
    return {
        type: COMMENT_SUCCESS,
        payload: data_comment
    }
};
export function errorComment() {
    return {
        type: COMMENT_ERROR,
        payload: ''
    }
}

// SEND COMMENT 
export function sendCommentRequest(image_id: string, name: string, body: string) {
    return {
        type: SEND_COMMENT_REQ,
        payload: {
            image_id: image_id,
            name: name,
            body: body
        }
    }
};
export function sendCommentSuccess(response: any) {
    return {
        type: SEND_COMMENT_SUCCESS,
        payload: response
    }
};
export function sendCommentError() {
    return {
        type: SEND_COMMENT_ERROR,
        payload: ''
    }
}

