

const studentInfo = document.getElementById("student-info");
studentInfo.textContent = "Student Name: John Doe | Student ID: 123456789";


async function getCatFact() {
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();

  const factBox = document.getElementById("fact-box");
  factBox.textContent = data.fact;
}

document.getElementById("get-fact").addEventListener("click", getCatFact);
