public class Main {
    public static void main(String[] args) {
        SavingsAccount savings = new SavingsAccount(101, "Rahul", 10000);
        savings.deposit(2000);
        System.out.println("----- Savings Account -----");
        System.out.println("Account Number: " + savings.getAccountNumber());
        System.out.println("Account Holder Name: " + savings.getAccountHolderName());
        System.out.println("Balance: " + savings.getBalance());
        System.out.println("Savings Account Interest: " + savings.calculateInterest());

        CurrentAccount current = new CurrentAccount(102, "Anita", 20000);
        current.deposit(3000);
        System.out.println("----- Current Account -----");
        System.out.println("Account Number: " + current.getAccountNumber());
        System.out.println("Account Holder Name: " + current.getAccountHolderName());
        System.out.println("Balance: " + current.getBalance());
        System.out.println("Current Account Interest: " + current.calculateInterest());
    }
}
