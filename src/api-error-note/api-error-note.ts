export class ApiErrorNote {
    apiErrorNote: string;
    serviceErrorNote: string;

    constructor(apiErrorNote?: string, serviceErrorNote?: string) {
        this.apiErrorNote = apiErrorNote;
        this.serviceErrorNote = serviceErrorNote;
    }
}

