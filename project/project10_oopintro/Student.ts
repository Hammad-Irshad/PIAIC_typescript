import { Oops } from "./Person.js";

export namespace OopsS 
{

export class Student extends Oops.Person 
{
private _name : string="";
public constructor()
{
    super();
    this._name="";
}
public get name() {
return this._name;
}
public set name(name: string)
{
    this._name=name;
}

}
}