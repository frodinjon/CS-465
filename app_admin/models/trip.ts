import { SystemJsNgModuleLoaderConfig } from "@angular/core";

export interface Trip {
    _id: string,    // internal MongoDB primary key
    code: string,
    name: string,
    length: string,
    stgart: Date,
    resort: string,
    perPerson: string,
    image: string,
    description: string
}