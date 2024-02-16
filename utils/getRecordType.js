const getRecordType = () => {
    const data = new Date();
    const hours = data.getHours()
    const min = data.getMinutes()

    const hhmm = [hours, min].join(':');

    if(hhmm >= '07:00' && hhmm <= '09:00') {
        return 'entrada';
    }

    if(hhmm >= '11:00' && hhmm <= '12:30') {
        return 'almoço'
    }

    if(hhmm >= '12:00' && hhmm <= '13:30') {
        return 'volta'
    } 
   
    return 'saida';
}

export default getRecordType;