function disp(name1, name2, name3) {
  arguments[0] = "Somu";
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log(arguments.length);
}

disp("Gaurav", "Shalini", "Siya", "Hello");
