
import { Service } from 'typedi';
import { CustomerSchema, Customer } from './customer.model';

@Service()
export class CustomerService {

    constructor() { }
    async list(): Promise<any> {
        return await CustomerSchema.find().exec();
    }

    async create(user: Customer): Promise<any> {
        const customerSchema = new CustomerSchema(user);
        return await customerSchema.save();
    }

    async findById(userId: String): Promise<any> {
        return await CustomerSchema.findById(userId);
    }

    async delete(userId: String): Promise<any> {
        return await CustomerSchema.findByIdAndDelete(userId);
    }

    async update(userId: string, user: any): Promise<any> {
        return await CustomerSchema.findOneAndUpdate(userId, user, { new: true })
    }
}