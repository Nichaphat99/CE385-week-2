//ชนิดข้อมูลพื้นฐาน
- "Nicha" เป็น String = ข้อความ typeof text → "string"
- 15 เป็น Number = ตัวเลข typeof number → "number"
- true เป็น Boolean = จริง/เท็จ typeof student → "boolean"
- let undefinedValue; ยังไม่ได้กำหนดค่าให้ตัวแปร ค่าคือ undefined typeof undefinedValue → "undefined"
- const result = null; null หมายถึง ไม่มีค่า / ตั้งใจให้ว่าง แต่ JavaScript มีกรณีพิเศษคือ typeof null → "object"
- const colors = ["red", "pink", "black"]; เป็น Array = เก็บข้อมูลหลายค่า แต่ typeof colors จะได้ "object"

//Number() ใช้แปลงเป็นตัวเลข
Number("abc") จะได้ NaN
NaN ย่อมาจาก Not a Number หมายถึงไม่สามารถแปลงข้อความ "abc" ให้เป็นตัวเลขได้

//แปลงอายุจากข้อความเป็นตัวเลข
const inputAge = "20";
const age = Number(inputAge) + 5;
ตอนแรก "20" เป็น String ใช้ Number(inputAge) แปลง "20" → 20 จากนั้น 20 + 5 = 25 ดังนั้นผลลัพธ์คือ 25

//แปลงคะแนน
แปลง "85.5" จาก String → Number ได้ 85.5 
จากนั้น score.toFixed(1) หมายถึง แสดงทศนิยม 1 ตำแหน่ง ดังนั้น 85.5 → "85.5" 

//===
inputAge คือ "20" เป็น String ส่วน 20 เป็น Number ดังนั้นชนิดไม่เหมือนกัน → false
แต่
console.log(Number(inputAge) === 20); เราแปลง "20" เป็น 20 ก่อน จึงกลายเป็น 20 === 20 ผลลัพธ์ → true