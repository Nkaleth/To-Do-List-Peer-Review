export const loadDataLs = () => {
  const data = localStorage.getItem('library');
  const library = data ? JSON.parse(data) : [];
  return library;
};

export const saveDataLs = (library) => {
  const libraryStringify = JSON.stringify(library);
  localStorage.setItem('library', libraryStringify);
};
