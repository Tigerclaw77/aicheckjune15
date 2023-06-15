// const currentURL = window.location.href;

// const RedirectUtil = (props) => {
//     const newURL = new URL(props.thisURL, currentURL); // Declare newURL inside the function

//     window.location.href = newURL.href; // Update the location.href

//     // You could also return a boolean indicating whether the redirection was successful or not, e.g.:
//     // return window.location.href === newURL.href;
// }

// export default RedirectUtil;

// const RedirectUtil = (props) => {
//   const newURL = new URL(props.thisURL, window.location.href).href;
//   window.location.href = newURL;
//   return null;
// };

const RedirectUtil = (props) => {
  console.log(props.thisURL); // Debugging code

  const newURL = new URL(props.thisURL, window.location.href).href;
  console.log(newURL) // Debugging code
  window.location.href = newURL;
  return null;
};
  export default RedirectUtil;