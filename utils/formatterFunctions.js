const dataFormatter = () => {
    const date = new Date()
    const formated = date.toLocaleString('pt-br').split(',')[0];

    return formated;
}

const hoursFormatter = () => {
    const date = new Date()
    const hours = date.toLocaleString('pt-br').split(',')[1];

    return hours;
}

export  { dataFormatter, hoursFormatter };