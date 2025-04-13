

const studentInfo = document.getElementById("student-info");
studentInfo.textContent = "Student Name: Saad Zaidi | Student ID: 1226354";


async function getCatFact() {
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();

  const factBox = document.getElementById("fact-box");
  factBox.textContent = data.fact;
}

document.getElementById("get-fact").addEventListener("click", getCatFact);
