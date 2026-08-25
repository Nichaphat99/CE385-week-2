const WORKSHOP_FULL_SCORE = 60;
const WORKSHOP_WEIGHT = 20;
const FULL_SCORE = 100;
const PASSING_SCORE = 80;

const workshopRaw = 48;
const attendance = 9;
const project = 17;
const midterm = 15;
const finalExam = 24;

const workshopScore = (workshopRaw / WORKSHOP_FULL_SCORE) * WORKSHOP_WEIGHT;

const totalScore =
  workshopScore + attendance + project + midterm + finalExam;

const percentage = (totalScore / FULL_SCORE) * 100;

const scoreNeeded = Math.max(PASSING_SCORE - totalScore, 0);

console.log(`Workshop: ${workshopScore.toFixed(2)} คะแนน`);
console.log(`คะแนนรวม: ${totalScore.toFixed(2)} คะแนน`);
console.log(`คิดเป็น: ${percentage.toFixed(2)}%`);
console.log(`ขาดอีก: ${scoreNeeded.toFixed(2)} คะแนน`);
