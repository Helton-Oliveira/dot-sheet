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

    update = async(id, data) => {
        return this.model.findByIdAndUpdate(id, data);
    }

    deleting = async(where) => {
        return this.model.findOneAndDelete({ _id: where });
    }
}


export default Services;