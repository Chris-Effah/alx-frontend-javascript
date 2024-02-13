import getListStudents from "./0-get_list_students";

export default function getStudentsByLocation(ListStudents, city) {
  const studentsLoc = ListStudents.filter((student) => student.location === city);
  return studentsLoc;
}