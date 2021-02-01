import { JSONSchema } from 'class-validator-jsonschema';
import { IsOptional, IsMongoId, IsString, IsEnum } from 'class-validator';
import { Schema, Document } from 'mongoose';
import * as mongoose from 'mongoose';

export enum CustomerStatus {
    Active = 'Active',
    Inactive = 'Inactive'
}

export interface Current {
    customer: Customer;
}

export enum Occupation {
    Employed = 'Employed',
    Business = 'Business',
    Student = 'Student'
}


@JSONSchema({ description: 'Customer' })
export class Customer {

    @IsOptional()
    @IsMongoId()
    _id?: string;

    @IsString()
    firstName!: String;

    @IsString()
    lastName!: String;

    @IsOptional()
    @IsEnum(Occupation)
    occupation!: Occupation;

    @IsString()
    dob!: String;

    @IsOptional()
    @IsEnum(CustomerStatus)
    status!: CustomerStatus;

    @IsString()
    bio!: String;

    @IsString()
    profilePicture!: String;

}

/*
 Customer Schema
*/
const customerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    occupation: {
        type: String,
        default: Occupation.Employed,
        enum: Object.keys(Occupation)
    },
    dob: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: CustomerStatus.Active,
        enum: Object.keys(CustomerStatus)
    },
    bio: {
        type: String
    },
    profilePicture: {
        type: String,
    }
}, {
    timestamps: true,
    collection: 'customers'
});


export type MCustomer = Document & Customer;
export const CustomerSchema = mongoose.model('Customer', customerSchema);

