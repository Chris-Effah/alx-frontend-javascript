export default function getStudentIdsSum(getListStudents) {
  const sumIds = getListStudents.reduce((accumulator, student) => accumulator + student.id, 0);
  return sumIds;
}
