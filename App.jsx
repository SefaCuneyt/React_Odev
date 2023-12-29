import React, { useState } from 'react';

const ClassAttendance = () => {
  const [students, setStudents] = useState([]);
  const [newStudentName, setNewStudentName] = useState('');

  const addStudent = () => {
    if (newStudentName.trim() !== '') {
      setStudents([...students, newStudentName]);
      setNewStudentName('');
    }
  };
  
  const deleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  const saveAttendance = () => {
    console.log('Öğrenci yoklaması kaydedildi:', students);
  };

  return (
    <div
      className="container"
      style={{ marginLeft: '100px', backgroundColor: 'gray' }}
    >
      <h1>Sınıf Yoklama Sayfası</h1>
      <div>
        <label>Öğrenci Ekle:</label>
        <input
          type="text"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
        />
        <button onClick={addStudent}>Ekle</button>
      </div>
      <div>
        <h2>Öğrenci Listesi</h2>
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student}
              <button onClick={() => deleteStudent(index)}>Sil</button>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={saveAttendance}>Yoklamayı Kaydet</button>
    </div>
  );
};

export default ClassAttendance;
