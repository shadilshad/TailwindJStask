class College{
    String name="";
}
class Location extends College{
    int far=0;
    String location="";
}
public class Inheritence{

    public static void main(String []args){
        Location clg = new Location();
        clg.name="Excel Engineering College, Komarapalayam";
        System.out.println(clg.name);
    }
}