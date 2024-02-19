async function processQuery(query) {
    const { initialDate, finalDate, employeeName } = query;

    let search = {}

    if(initialDate || finalDate) search.date = {};

    if(initialDate) search.date = {$gte: initialDate};
    if(finalDate) search.date= {$lte: finalDate};

    if(employeeName) search.employe = employeeName;

    return search;

}


export default processQuery;