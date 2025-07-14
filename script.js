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
      let workStatus = student.works.map(work => 
        `- ${work.title}: ${work.submitted ? 'ส่งแล้ว ✅' : 'ยังไม่ส่ง ❌'}`).join("\n");
      
      resultDiv.textContent = `ชื่อ: ${student.name}\nคะแนน: ${student.score}\nงานที่ส่ง:\n${workStatus}`;
    } else {
      resultDiv.textContent = "ไม่พบรหัสนักเรียนนี้";
    }
  } catch (error) {
    resultDiv.textContent = "ไม่สามารถโหลดข้อมูลได้";
    console.error(error);
  }
}
