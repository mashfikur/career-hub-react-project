const getJobs = () => {
  const localJobs = localStorage.getItem("applied_jobs");

  if (localJobs) {
    return JSON.parse(localJobs);
  }

  return [];
};

const saveJob = (id) => {
  const localJobs = getJobs();

  if (!localJobs.includes(id)) {
    localJobs.push(id);
    localStorage.setItem("applied_jobs", JSON.stringify(localJobs));
  }
};

export { getJobs, saveJob };
