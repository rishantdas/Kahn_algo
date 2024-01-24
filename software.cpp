#include <iostream>
#include <string>

using namespace std;

class PaymentGateway {
public:
    bool makeCardPayment(string cardNumber, string cardHolderName, string expiryDate, int cvv, double amount) {
        // Simulating a successful card payment
        return true;
    }

    bool makeUpiPayment(string upiId, double amount) {
        // Simulating a successful UPI payment
        return true;
    }
};

class CollageFeePayment {
private:
    PaymentGateway paymentGateway;

public:
    bool payWithCard(string cardNumber, string cardHolderName, string expiryDate, int cvv, double amount) {
        return paymentGateway.makeCardPayment(cardNumber, cardHolderName, expiryDate, cvv, amount);
    }

    bool payWithUpi(string upiId, double amount) {
        return paymentGateway.makeUpiPayment(upiId, amount);
    }

    void generateReceipt(string paymentMethod, double amount) {
        cout << "\n----- Receipt -----\n";
        cout << "Payment Method: " << paymentMethod << endl;
        cout << "Amount Paid: $" << amount << endl;
        cout << "Thank you for your payment!\n";
        cout << "-------------------\n";
    }
};

int main() {
    CollageFeePayment paymentSystem;

    int paymentChoice;
    cout << "Choose Payment Method:\n";
    cout << "1. Card\n";
    cout << "2. UPI\n";
    cout << "Enter choice (1 or 2): ";
    cin >> paymentChoice;

    if (paymentChoice == 1) {
        string cardNumber, cardHolderName, expiryDate;
        int cvv;
        double amount;

        cout << "\nEnter Card Number: ";
        cin >> cardNumber;
        cout << "Enter Cardholder Name: ";
        cin.ignore();
        getline(cin, cardHolderName);
        cout << "Enter Expiry Date (MM/YY): ";
        cin >> expiryDate;
        cout << "Enter CVV: ";
        cin >> cvv;
        cout << "Enter Amount: ";
        cin >> amount;

        if (paymentSystem.payWithCard(cardNumber, cardHolderName, expiryDate, cvv, amount)) {
            cout << "Card payment successful!\n";
            paymentSystem.generateReceipt("Credit/Debit Card", amount);
        } else {
            cout << "Card payment failed!\n";
        }
    } else if (paymentChoice == 2) {
        string upiId;
        double upiAmount;

        cout << "\nEnter UPI ID: ";
        cin >> upiId;
        cout << "Enter Amount: ";
        cin >> upiAmount;

        if (paymentSystem.payWithUpi(upiId, upiAmount)) {
            cout << "UPI payment successful!\n";
            paymentSystem.generateReceipt("UPI", upiAmount);
        } else {
            cout << "UPI payment failed!\n";
        }
    } else {
        cout << "Invalid choice! Please select 1 or 2.\n";
    }

    return 0;
}
