#include<stdio.h>
#include<string.h>
struct company
{
    char cname[50];
    char cadd[100];
    char clocat[100];
    int ccode;


};
 struct company c[10];
 int i;
void main()
{
    printf("Enter the company details:\n");
    for(i=0;i<=1;i++)
    {
    printf("Enter the company name\n");
    scanf("%s",c[i].cname);
    printf("Enter the company address\n");
    scanf("%s",c[i].cadd);
    
    printf("Enter the company location\n");
    scanf("%s",c[i].clocat);
    
    printf("Enter the company code\n");
    scanf("%d",&c[i].ccode);
    }
   compare();  

}    
void compare()
{
        char a[10]="hubli";
        for(i=0;i<=10;i++)
        {
        if (strcmp(c[i].clocat,a) == 0)
        printf("company name:%s\n",c[i].cname);
        }
   
}


   
