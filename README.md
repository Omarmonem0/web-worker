Usefull Links:
https://blog.angularindepth.com/improve-performance-with-web-workers-497931fdef1b
https://medium.com/@ganeshsurfs/non-blocking-performant-web-worker-in-your-angular-application-808fb9ab98c2
https://angular.io/guide/web-worker
https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API

Brief:
Web Workers allow you to run CPU intensive computations in a background thread, freeing the main thread to update the user interface.

This example is an expriement of the performance of the web worker the expriement is looping through array of 600 numbers and checks  wheather a number is prime or not one time in the main thread and the other time in another thread (worker thread)