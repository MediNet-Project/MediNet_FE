export const convertObjectToFormData = (values) => {
  let newPost = new FormData();
  if (values.File === null) {
    for (const key in values) {
      if (key !== "Image") {
        newPost.append(key, values[key]);
      }
    }
  } else {
    for (const key in values) {
      if (key !== "image") {
        if (key !== "Image") {
          newPost.append(key, values[key]);
        } else {
          newPost.append("Image", values.Image, values.Image.name);
        }
      }
    }
  }
  return newPost;
};
