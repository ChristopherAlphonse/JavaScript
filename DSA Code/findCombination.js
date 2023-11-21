const enrollments1 = [
	['58', 'Linear Algebra'],
	['94', 'Art History'],
	['94', 'Operating Systems'],
	['17', 'Software Design'],
	['58', 'Mechanics'],
	['58', 'Economics'],
	['17', 'Linear Algebra'],
	['17', 'Political Science'],
	['94', 'Economics'],
	['25', 'Economics'],
	['58', 'Software Design'],
];

const enrollments2 = [
	['0', 'Advanced Mechanics'],
	['0', 'Art History'],
	['1', 'Course 1'],
	['1', 'Course 2'],
	['0', 'Computer Architecture'],
];

function getStudentIDs(enrollments) {
	const result = new Set();

	for (const [studentID, courseName] of enrollments) {
		result.add(studentID);
	}

	return result;
}

const allPairs = (enrollments) => {
	const studentIDs = [...getStudentIDs(enrollments)];
	const n = studentIDs.length;
	const result = [];

	for (let i = 0; i < n; ++i) {
		for (let j = i + 1; j < n; ++j) {
			result.push(`${[studentIDs[i], studentIDs[j]]}`);
		}
	}

	return result;
};

console.log(allPairs(enrollments1));
console.log(allPairs(enrollments2));
