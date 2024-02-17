async function processQuery(query, model = {}) {
    const { initialDate, finalDate, employeeName } = query;

    let search = {}

    if(initialDate || finalDate) search.date = {};

    if(initialDate) search.date.$gte = initialDate;
    if(finalDate) search.date.$lte = finalDate;

    if(employeeName) {
        const employee = await model.find({ name: {$regex: employeeName, $options: 'i'} });
        console.log(employee)
        if(employee !== null) {
            search.employe = employee[0];
        } else {
            search.employe = null
        }
    }

    return search
}


export default processQuery;