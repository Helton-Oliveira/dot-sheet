class Services {
    constructor(model) {
        this.model = model
    }
    
    getAll = async () => {
        return this.model.find({})
    }
    
    getOne = async (query) => {
        return this.model.find({ ...query });
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