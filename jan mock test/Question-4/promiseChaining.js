// Promise p1
function p1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("p1 resolved");
      resolve("Result from p1");
    }, 1000);
  });
}

// Promise p2 (executes after p1)
function p2(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("p2 resolved with:", data);
      resolve("Result from p2");
    }, 1000);
  });
}

// Promise p3 (executes after p2)
function p3(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("p3 resolved with:", data);
      resolve("Result from p3");
    }, 1000);
  });
}

// Promise p4 (executes after p3)
function p4(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("p4 resolved with:", data);
      resolve("All promises completed");
    }, 1000);
  });
}

p1()
  .then((res1) => {
    return p2(res1).catch((err) => {
      console.error("p2 failed:", err);
    });
  })
  .then((res2) => {
    return p3(res2).catch((err) => {
      console.error("p3 failed:", err);
    });
  })
  .then((res3) => {
    return p4(res3).catch((err) => {
      console.error("p4 failed:", err);
    });
  })
  .then((finalResult) => {
    console.log(finalResult);
  })
  .catch((error) => {
    console.error("p1 failed:", error);
  });
