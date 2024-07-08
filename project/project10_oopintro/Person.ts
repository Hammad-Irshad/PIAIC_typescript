export namespace Oops
{
export class Person 
{
    private personality : string ;
    public constructor() 
    {
       this.personality="Mystery";
    }
public AskedQuestion(pvalue : number)
{
    if (pvalue==1)
        this.personality="Extravert";
    else if (pvalue==2) 
        this.personality="Intravert";
    else 
    this.personality="You are still a Mystery";

}
public GetPersonality():string
{
    return this.personality ; 
}
}

}