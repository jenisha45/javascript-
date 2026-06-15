<!DOCTYPE html>
<html>
<body>

<script>
    let s1 = Number(prompt("Enter marks of Subject 1:"));
    let s2 = Number(prompt("Enter marks of Subject 2:"));
    let s3 = Number(prompt("Enter marks of Subject 3:"));
    let s4 = Number(prompt("Enter marks of Subject 4:"));
    let s5 = Number(prompt("Enter marks of Subject 5:"));

    let total = s1 + s2 + s3 + s4 + s5;
    let percentage = total / 5;
    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B+";
    } else if (percentage >= 60) {
        grade = "B";
    } else if (percentage >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    document.write("Total Marks: " + total + "<br>");
    document.write("Percentage: " + percentage + "%<br>");
    document.write("Grade: " + grade);
</script>

</body>
</html>
