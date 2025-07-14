async function checkScore() {
  const id = document.getElementById("studentId").value.trim();
  const resultDiv = document.getElementById("result");

  if (!id) {
    resultDiv.textContent = "กรุณากรอกรหัสนักเรียน";
    return;
  }

  try {
    const res = await fetch("scores.json");
    const data = await res.json();
    const student = data.students.find(s => s.id === id);

    if (student) {
      resultDiv.textContent = `ชื่อ: ${student.name}, คะแนน: ${student.score}`;
    } else {
      resultDiv.textContent = "ไม่พบรหัสนักเรียนนี้";
    }
  } catch (error) {
    resultDiv.textContent = "ไม่สามารถโหลดข้อมูลได้";
    console.error(error);
  }
}
