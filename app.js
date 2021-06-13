const formInput = document.querySelectorAll("input");
// console.log(formInput);

const toggleClasses = function (event) {
  event.preventDefault();

  const addWarnings = function (errIcon, errMessage, input) {
    errIcon.classList.remove("hidden");
    errMessage.classList.remove("hidden1");
    input.classList.add("warning");
  };

  const removeWarnings = function (errIcon, errMessage, input) {
    errIcon.classList.add("hidden");
    errMessage.classList.add("hidden1");
    input.classList.remove("warning");
  };

  formInput.forEach((input) => {
    console.log(input.nextElementSibling);
    const errIcon = input.nextElementSibling;
    const errMessage = errIcon.nextElementSibling;
    if (!input.value) {
      if (input.id === "email" && !input.value.includes("@" && ".")) {
        input.value = "";
        input.placeholder = "email@example/com";
        input.classList.add("warningemail");
      }
      addWarnings(errIcon, errMessage, input);
      return;
    }
    if (input.id === "email" && !input.value.includes("@" && ".")) {
      input.value = "";
      input.placeholder = "email@example/com";
      input.classList.add("warningemail");
      addWarnings(errIcon, errMessage, input);
      return;
    }

    removeWarnings(errIcon, errMessage, input);
  });
};

document.querySelector("button").addEventListener("click", toggleClasses);
