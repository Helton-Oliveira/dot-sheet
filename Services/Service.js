class Services {
    constructor(model) {
        this.model = model
    }
    
    getAll = async (where = {}) => {
        return this.model.find(where);
    }
    
    getOne = async (query) => {
        return this.model.findOne({ _id: query});
    }

    created = async (data) => {
        return this.model.create(data)
    }

    Update = async(id, data) => {
        return this.model.findOneAndUpdate(id, data);
    }

    deleting = async(where) => {
        return this.model.findOneAndDelete(where);
    }
}


export default Services;