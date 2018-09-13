function toggler(event) {
  var element = event.target;
  switch(element.style.animationPlayState) {
    case 'running':
      element.style.animationPlayState = "paused";
      break;
    case 'paused':
      element.style.animationPlayState = "running";
      break;
    default:
      element.style.animationPlayState = "paused";
      break;
  }
}
