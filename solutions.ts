const multiplyValue = (value: number, multiplier?: number) => {
    if(multiplier !== undefined) {
        return value * multiplier;
    } else {
        return value * 2;
    }
}


const processInput = (input: string | number | boolean) : string | number => {
    if(typeof input === 'string') {
        return input.trim().toLowerCase();
    } else if(typeof input === 'number') {
        return input * 10;
    } else{
        if(input===true) {
            return "Active";
        } else {
            return "Inactive";
        }
    } 
}


const formatCoordinate = ([latitude, longitude, locationName]: readonly [number, number, string]) : string => {
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}


const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    const output: T[] = [];
    for(const arr of arrays) {
        output.push(...arr);
    }
    return output;
}

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}
const getPopularCourses = (courses: Course[], minStudents: number) => {
    const newCourses: Course[] = [];
    for (const course of courses) {
        if(course.isPublished === true && course.students >= minStudents){
            newCourses.push(course);
        }
    }
    return newCourses;
}


const pluckValues =<T,k extends keyof T>(items: T[], key: k): T[k][] => {
    return items.map(item => item[key]);
}


class Employee {
    constructor(protected name: string, private baseSalary: number) {}
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    constructor(name: string, baseSalary: number, private department: string) {
        super(name, baseSalary);
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`
    }
}


const validateAgeAsync = async (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
            return;
        }

        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    });
};