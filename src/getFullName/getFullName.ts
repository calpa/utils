export type Name = {
    firstName: string, lastName: string, middleName?: string
}

function getFullName(name: Name): string {
    let fullName = `${name.firstName} ${name.lastName}`;
    if (name.middleName) {
        fullName = `${name.firstName} ${name.middleName} ${name.lastName}`;
    }
    return fullName;
}


export default getFullName