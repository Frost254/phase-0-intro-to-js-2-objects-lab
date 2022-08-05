// Write your solution in this file!
const employee = {
    name: 'John Doe',
    streetAddress: '123 Main St',
}

const updateEmployeeWithKeyAndValue = (obj, key, value) => {
    return {
        ...employee,
        [key]: value,
    }
}

const destructivelyUpdateEmployeeWithKeyAndValue = (obj, key, value) => {
    obj[key] = value;
    return obj;
}

const deleteFromEmployeeByKey = (obj, key) => {
    return {
        ...employee,
        [key]: undefined,

    }
}

const destructivelyDeleteFromEmployeeByKey = (obj, key) => {
    delete obj[key];
    return obj;
}