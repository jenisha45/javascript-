<!DOCTYPE html>
<html>
<head>
    <title>String Methods</title>
</head>
<body>

<h2>JavaScript String Methods</h2>
<p id="output"></p>

<script>
    let text = "Hello JavaScript";

    let result = `
        Original: ${text}<br>
        Length: ${text.length}<br>
        Uppercase: ${text.toUpperCase()}<br>
        Lowercase: ${text.toLowerCase()}<br>
        Slice(0,5): ${text.slice(0, 5)}<br>
        Substring(6,16): ${text.substring(6, 16)}<br>
        Replace: ${text.replace("JavaScript", "World")}<br>
        Includes 'Java': ${text.includes("Java")}<br>
        Starts With 'Hello': ${text.startsWith("Hello")}<br>
        Ends With 'Script': ${text.endsWith("Script")}<br>
        Index Of 'Java': ${text.indexOf("Java")}<br>
        Trim: ${"   Hello   ".trim()}
    `;

    document.getElementById("output").innerHTML = result;
</script>

</body>
</html>
