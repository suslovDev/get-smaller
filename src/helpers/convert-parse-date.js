export const convertDateToPath = (date) => {
  return date.toLocaleDateString("en-En").split("/").join("_");
};

export const parseDateFromPath = (path) => {
  return new Date(path.split("_").join("/"));
};
