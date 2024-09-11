const Error = () => {
  const error = document.createElement("section");
  error.innerHTML = `
<div>Error 404: Page Not Found</div>
</section>`;

  return error;
};

export default Error;
