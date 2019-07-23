export class UserListModel {
    public error: any;
    public msg: String;
    public data: any;
    constructor(error: any, msg: String, data: any) {
        this.error = error;
        this.msg = msg;
        this.data = data;
    }
}