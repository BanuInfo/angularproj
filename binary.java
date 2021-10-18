import java.io.*;
import java.util.*;
public class binary
{
	public static void main(String[] args)
	{
		int a,r;
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the decimal number");
		a=sc.nextInt();
		String binary="";
		while (a>0)
		{
			r=a%2;
			binary=r+binary;
			a=a/2;
		}
		System.out.println("the binary value is "+binary);
	}
}
	     
			