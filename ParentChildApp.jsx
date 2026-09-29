import React from 'react';
import CourseCard from './CourseCard';

// Parent Component
function ParentChildApp() {
  const departmentName = "Department of Computer Science & IT";

  return (
    <div>
      <div style={{ marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-color)' }}>
        <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>{departmentName}</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          The parent component passes data to multiple child course components.
        </p>
      </div>

      <div className="grid-3">
        <CourseCard
          code="USIT501"
          title="Software Engineering"
          credits={4}
          instructor="Prof. Mehta"
          description="Covers software development life cycles, agile methodologies, and architectural design patterns."
        />
        <CourseCard
          code="USIT502"
          title="Advanced Web Technologies"
          credits={4}
          instructor="Prof. Sharma"
          description="Focuses on modern front-end frameworks, REST APIs, asynchronous JavaScript, and SPA development."
        />
        <CourseCard
          code="USIT503"
          title="Database Management"
          credits={3}
          instructor="Prof. Verma"
          description="Explores relational databases, SQL query optimization, normalization, and database security."
        />
      </div>
    </div>
  );
}

export default ParentChildApp;
