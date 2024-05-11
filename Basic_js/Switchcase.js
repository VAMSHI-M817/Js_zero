//javascript Switch case Method
var grade = prompt("Enter Grade");
var result;

switch (grade) {
    case 'A': result = "A Passed";
        break;
    case 'B': result = "B Passed";
        break;
    case 'C': result = "C Detained";
        break;
    case 'D': result = "D Failed";
        break;
    default: result = "Invalid Grade"
}
document.write(result);