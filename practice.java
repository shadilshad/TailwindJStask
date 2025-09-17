public class practice{

    String lap="";
    int price=0;
    String place="";
    int kms=0;

    public static void main(String []args){

        practice item1= new practice();

    item1.lap="Lenovo";
    item1.price=8000;
    item1.place="kozhikode";
    item1.kms=35;

    System.out.println("The price of laptop is "+ item1.price);

    practice item2 = new practice();
    item2.lap="Asus";
    item2.price=50000;
    item2.place="kochi";
    item2.kms=765;

    System.out.println("The place of laptop the laptop is "+ item2.place + " which is " + item2.kms+" far Kms" );

    }
}