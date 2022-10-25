import dom from "./domCollection";

const domFunctions = (() => {
  const newTask = () => {
    dom.taskBtn.style.display = "none";
  };

  return { newTask };
})();

export default domFunctions;
