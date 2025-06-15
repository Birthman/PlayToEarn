const challenges = [
  {
    id: 1,
    title: "Write a Hello World in JavaScript",
    description: "Use `console.log()` to print 'Hello, World!'",
    test: (code) => {
      let output = "";
      const originalLog = console.log;
      console.log = (msg) => output += msg;
      try {
        eval(code);
      } catch (e) {
        return false;
      }
      console.log = originalLog;
      return output.trim() === "Hello, World!";
    }
  }
];

