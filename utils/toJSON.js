function toJson(params) {
    const convertData = JSON.stringify(params)
    const res = JSON.parse(convertData)
    console.log(res)
    return res;
}

export default toJson;