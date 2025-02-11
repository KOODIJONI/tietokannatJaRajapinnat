const person ={
    personData:[
        {'fname':'John', 'lname':'Doe'},
        {'fname':'Jane', 'lname':'Doe'},
        {'fname':'Jim', 'lname':'Doe'},
        {'fname':'Jill', 'lname':'Doe'}
    ],
    showData: function(){
        console.log("Henkilötiedot ovat:");
        this.personData.forEach(row => {    
            console.log("Etunimi on " + row.fname+ " ja sukunimi on "+ row.lname);
        });
    },
    addData: function(fname,lname){
        console.log("Lisätään henkilö " + fname + " " + lname);
        this.personData.push({'fname':fname, 'lname':lname});

    },
    showOne: function(index){
        console.log("Henkilö on " + this.personData[index].fname + " " + this.personData[index].lname);
    }

}

person.showData();
person.addData('Jack','Doe');
person.showData();
person.showOne(2);

