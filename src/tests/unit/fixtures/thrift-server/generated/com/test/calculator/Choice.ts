/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v{{VERSION}}
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "test-lib";
import * as FirstName from "./FirstName";
import * as LastName from "./LastName";
export interface IChoice {
    __name: "Choice";
    firstName?: FirstName.IFirstName;
    lastName?: LastName.ILastName;
}
export interface IChoiceArgs {
    firstName?: FirstName.IFirstNameArgs;
    lastName?: LastName.ILastNameArgs;
}
export const ChoiceCodec: thrift.IStructCodec<IChoiceArgs, IChoice> = {
    encode(args: IChoiceArgs, output: thrift.TProtocol): void {
        let _fieldsSet: number = 0;
        const obj = {
            firstName: args.firstName,
            lastName: args.lastName
        };
        output.writeStructBegin("Choice");
        if (obj.firstName != null) {
            _fieldsSet++;
            output.writeFieldBegin("firstName", thrift.TType.STRUCT, 1);
            FirstName.FirstNameCodec.encode(obj.firstName, output);
            output.writeFieldEnd();
        }
        if (obj.lastName != null) {
            _fieldsSet++;
            output.writeFieldBegin("lastName", thrift.TType.STRUCT, 2);
            LastName.LastNameCodec.encode(obj.lastName, output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        if (_fieldsSet > 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion cannot have more than one value");
        }
        else if (_fieldsSet < 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion must have one value set");
        }
        return;
    },
    decode(input: thrift.TProtocol): IChoice {
        let _fieldsSet: number = 0;
        let _returnValue: any = null;
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.TType.STRUCT) {
                        _fieldsSet++;
                        const value_1: FirstName.IFirstName = FirstName.FirstNameCodec.decode(input);
                        _returnValue = { firstName: value_1 };
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRUCT) {
                        _fieldsSet++;
                        const value_2: LastName.ILastName = LastName.LastNameCodec.decode(input);
                        _returnValue = { lastName: value_2 };
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        if (_fieldsSet > 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion cannot have more than one value");
        }
        else if (_fieldsSet < 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion must have one value set");
        }
        if (_returnValue !== null) {
            if (_returnValue.firstName !== undefined) {
                return {
                    __name: "Choice",
                    firstName: _returnValue.firstName
                };
            }
            else {
                return {
                    __name: "Choice",
                    lastName: _returnValue.lastName
                };
            }
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read data for TUnion");
        }
    }
};
export class Choice extends thrift.StructLike implements IChoice {
    public firstName?: FirstName.IFirstName;
    public lastName?: LastName.ILastName;
    public readonly __name = "Choice";
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IChoiceArgs = {}) {
        super();
        let _fieldsSet: number = 0;
        if (args.firstName != null) {
            _fieldsSet++;
            const value_3: FirstName.IFirstName = new FirstName.FirstName(args.firstName);
            this.firstName = value_3;
        }
        if (args.lastName != null) {
            _fieldsSet++;
            const value_4: LastName.ILastName = new LastName.LastName(args.lastName);
            this.lastName = value_4;
        }
        if (_fieldsSet > 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion cannot have more than one value");
        }
        else if (_fieldsSet < 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion must have one value set");
        }
    }
    public static read(input: thrift.TProtocol): Choice {
        return new Choice(ChoiceCodec.decode(input));
    }
    public static write(args: IChoiceArgs, output: thrift.TProtocol): void {
        return ChoiceCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return ChoiceCodec.encode(this, output);
    }
}
