////////////////////////////////////////////////////////////////////////////////
var outAA = document.createElement('div');
outAA.setAttribute('id', 'styleOne');
document.body.appendChild(outAA);

////////////////////////////////////////////////////////////////////////////////
outAA.innerHTML += 'object lesson-aa review';


// Class for creating multi inheritance.
class multi
{
	// Inherit method to create base classes.
	static inherit(..._bases)
	{
		class classes {

			// The base classes
  			get base() { return _bases; }

			constructor(..._args)
			{
				var index = 0;

				for (let b of this.base)
				{
					let obj = new b(_args[index++]);
   					multi.copy(this, obj);
				}
			}

		}

		// Copy over properties and methods
		for (let base of _bases)
		{
   			multi.copy(classes, base);
   			multi.copy(classes.prototype, base.prototype);
		}

		return classes;
	}

	// Copies the properties from one class to another
	static copy(_target, _source)
	{
    		for (let key of Reflect.ownKeys(_source))
			{
        		if (key !== "constructor" && key !== "prototype" && key !== "name")
				{
	        	    let desc = Object.getOwnPropertyDescriptor(_source, key);
	        	    Object.defineProperty(_target, key, desc);
        		}
    		}
	}
}

class ages
{
	constructor(_age) {	this.age = _age; }
	set age(_a) { this._age = _a; }
	get age() { return this._age; }
	increase() { this.age++; }
}

class genders
{
	constructor(_gender) { this.gender = _gender; }
	set gender(_g) { this._gender = _g; }
	get gender() { return this._gender; }
	male() { this._gender = 'M'; }
	female() { this._gender = 'F'; }
}

class person extends multi.inherit(ages, genders)
{
	constructor(...args)
	{
		super(18, 'M');
		this.name = args[0];
	}

	set name(_n) { this._name = _n; }
	get name() { return this._name; }
}

var p = new person('Adam');
console.log(p.name, p.age, p.gender);
