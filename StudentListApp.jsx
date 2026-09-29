import React from 'react';

// Child component for displaying single student details
function StudentItem(props) {
  const { student } = props;
  return (
    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
      <td style={{ padding: '12px 16px', fontWeight: 'bold' }}>{student.rollNo}</td>
      <td style={{ padding: '12px 16px', color: 'var(--text-main)', fontWeight: '500' }}>{student.name}</td>
      <td style={{ padding: '12px 16px', color: 'var(--text-muted)' }}>{student.stream}</td>
      <td style={{ padding: '12px 16px', color: 'var(--text-muted)' }}>{student.gpa}</td>
      <td style={{ padding: '12px 16px' }}>
        <span style={{
          backgroundColor: student.status === 'Active' ? '#dcfce7' : '#fee2e2',
          color: student.status === 'Active' ? '#15803d' : '#b91c1c',
          padding: '4px 10px',
          borderRadius: '12px',
          fontSize: '0.8rem',
          fontWeight: '600'
        }}>
          {student.status}
        </span>
      </td>
    </tr>
  );
}

// Parent component rendering the student list using map()
function StudentListApp() {
  const students = [
    { id: 1, rollNo: '101', name: 'Alice Smith', stream: 'T.Y. B.Sc.IT', gpa: '3.9', status: 'Active' },
    { id: 2, rollNo: '102', name: 'Bob Jones', stream: 'T.Y. B.Sc.IT', gpa: '3.7', status: 'Active' },
    { id: 3, rollNo: '103', name: 'Charlie Brown', stream: 'T.Y. B.Sc.IT', gpa: '3.5', status: 'Active' },
    { id: 4, rollNo: '104', name: 'Diana Prince', stream: 'T.Y. B.Sc.IT', gpa: '4.0', status: 'Active' },
    { id: 5, rollNo: '105', name: 'Ethan Hunt', stream: 'T.Y. B.Sc.IT', gpa: '3.8', status: 'Active' },
  ];

  return (
    <div>
      <h3 style={{ marginBottom: '16px', color: 'var(--text-main)' }}>Dynamic Student Directory</h3>
      <div style={{ overflowX: 'auto', border: '1px solid var(--border-color)', borderRadius: '10px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid var(--border-color)' }}>
              <th style={{ padding: '12px 16px', color: '#475569' }}>Roll No</th>
              <th style={{ padding: '12px 16px', color: '#475569' }}>Student Name</th>
              <th style={{ padding: '12px 16px', color: '#475569' }}>Class</th>
              <th style={{ padding: '12px 16px', color: '#475569' }}>GPA</th>
              <th style={{ padding: '12px 16px', color: '#475569' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((studentItem) => (
              <StudentItem key={studentItem.id} student={studentItem} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentListApp;
