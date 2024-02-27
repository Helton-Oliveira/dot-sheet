class Services {
    constructor(model) {
        this.model = model
    }
    
    getAll = async (where = {}) => {
        return this.model.find(where);
    }
    
    getOne = async (query) => {
        return this.model.findById(query);
    }

    created = async (data) => {
        return this.model.create(data)
    }

    update = async(id, data) => {
        return this.model.findByIdAndUpdate(id, data);
    }

    deleting = async(where) => {
        return this.model.findByIdAndDelete(where);
    }
}


export default Services;