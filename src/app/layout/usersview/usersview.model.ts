export class UsersViewModel {
    public id: Number
    public FirstName: String;
    public LastName: String;
    public Mobile: String;
    public Email: String;
    public BalanceAmount: Number;        
    public Dob: String;
    public Gender: String;
    public TotalAmount: any;
    constructor(
        id: Number,
        FirstName: String,
        LastName: String,
        Mobile: String,
        Email: String,
        BalanceAmount: Number,
        Dob: String,
        Gender: String,
        TotalAmount: any
    ) {
    this.id = id;
    this.FirstName =  FirstName;
    this.LastName = LastName;
    this.Mobile = Mobile;
    this.Email = Email;
    this.BalanceAmount = BalanceAmount;
    this.Dob = Dob;
    this.Gender = Gender;
    this.TotalAmount = TotalAmount;
    }
}