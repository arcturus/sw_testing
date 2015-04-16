/*
  This file will install the SW, and get the environment ready for the tests
*/
if (navigator.serviceWorker) {
  // Content from karma is served from /base
  navigator.serviceWorker.register('/base/src/sw.js');
} else {
  console.info('No SW present :(');
}
