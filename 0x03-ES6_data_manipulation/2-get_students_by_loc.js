import getListStudents from './0-get_list_students';

export default function getStudentsByLocation(getListStudents, city) {
  const studentsLoc = getListStudents.filter((student) => student.location === city);
  return studentsLoc;
}
