export default function getStudentIdsSum(getListStudents) {
  const sumIds = getListStudents.reduce((accumulator, student) => {
    return accumulator + student.id;
  }, 0);
  return sumIds;
}