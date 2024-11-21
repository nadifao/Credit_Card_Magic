import java.util.regex.*;

public class Main {
    public static void main(String[] args) {
        // make methods for cvv, expiration date, credit card number, cardholder name FIRST LAST

        //cardnumber

        Scanner input = new Scanner(System.in);
        boolean success = false;
        System.out.println("enter a visa or mastercard number, no spaces!");



        while (!success) {



            try {

                String cardNumber = "" + input.nextLong();

                if (Pattern.matches(("^4[0-9]{12}(?:[0-9]{3})?$|^5[1-5][0-9]{14}$"), cardNumber)) {
                    System.out.println("thank you!");
                    success = true;
                } else {
                    System.out.println("invalid card number.");
                }




            } catch (InputMismatchException e) {
                System.out.println("invalid input.");
                input.next();
            }

        }

        success = false;

        System.out.println("enter those three silly letters on the back!");

        while (!success) {
            try {
                String cvv = "" + input.nextInt();

                if (Pattern.matches(("[1-9][0-9]{2}$"), cvv)) {
                    System.out.println("thank you!!!");
                    success = true;

                } else {
                    System.out.println("invalid cvv.");
                }
            } catch (InputMismatchException e) {
                System.out.println("invalid input.");
                input.next();

            }


        }

        success = false;










        while (!success) {

            try {





                    System.out.println("now enter the expiration date!");
                String fullExpDate = input.next();
                String month = "" + fullExpDate.charAt(0) + fullExpDate.charAt(1);
                String year = "" + fullExpDate.charAt(3) + fullExpDate.charAt(4);

                    if (!(Pattern.matches(("^1[0-2]$|^0[1-9]$"), month))) {

                        System.out.println("invalid month.");

                    } else if (!(Pattern.matches(("[/]"), fullExpDate.charAt(2) + ""))) {
                        System.out.println("missing slash between date and month.");
                    } else if (!(Pattern.matches(("[2-9][5-9]"), year))) {
                        System.out.println("invalid year");
                    } else {
                        success = true;
                    }


            } catch (StringIndexOutOfBoundsException e) {
                System.out.println("invalid input.");
                input.next();
            }

        }





    }
}