const day = "sunday";

switch (day) {
  case "monday": //switch does a strict comparision so here it is day ==='monday'
    console.log("plan my course structure");
    console.log("go to codig meetup");
    break;

  case "tuesday":
    console.log("prepare theory");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code");
    break;

  case "friday":
    console.log("enjoy friday");
    break;
  default:
    console.log("not a valid day");
}
