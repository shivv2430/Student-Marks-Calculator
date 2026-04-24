import './App.css'

function App() {

  function calculateResult() {

    let n = document.getElementById("subjects").value;
    let total = 0;

    for (let i = 1; i <= n; i++) {
      let marks = parseFloat(prompt("Enter marks for Subject " + i));
      total = total + marks;
    }

    let average = total / n;
    let grade;

    if (average >= 90) {
      grade = "A+";
    }
    else if (average >= 75) {
      grade = "A";
    }
    else if (average >= 60) {
      grade = "B";
    }
    else if (average >= 50) {
      grade = "C";
    }
    else {
      grade = "F";
    }

    let result = `
      Total Marks: ${total} <br>
      Average: ${average} <br>
      Grade: ${grade}
    `;

    document.getElementById("result").innerHTML = result;
  }

  return (
    <div className="container">

      <h1>Marks Calculator</h1>

      <input type="number" id="subjects" placeholder="Enter number of subjects" />

      <br /><br />

      <button onClick={calculateResult}>Calculate</button>

      <p id="result"></p>
      <div className="student-detail">
        <p>Developed by Shivani Pal</p>
        <p>B.Tech (ELCE), 1st Year , 2nd Semester</p>
        <p>Roll No: 2503202300062</p>
        <p>Admission No. : 2025B02310098</p>

      </div>
    </div>
  )
}

export default App