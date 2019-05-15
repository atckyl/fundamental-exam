var user = [{
    "name": "Huntington Heare",
    "age": 27,
    "sex": "Wanita",
    "job": "Fullstack"
  }, {
    "name": "Teddy De'Vere - Hunt",
    "age": 45,
    "sex": "Pria",
    "job": "Backend"
  }, {
    "name": "Merill Barfield",
    "age": 48,
    "sex": "Pria",
    "job": "Frontend"
  }, {
    "name": "Venus Alliot",
    "age": 52,
    "sex": "Wanita",
    "job": "Frontend"
  }, {
    "name": "Melodee Stallybrass",
    "age": 56,
    "sex": "Pria",
    "job": "Fullstack"
  }, {
    "name": "Giulio Maycey",
    "age": 61,
    "sex": "Wanita",
    "job": "Fullstack"
  }, {
    "name": "Correy Peyto",
    "age": 49,
    "sex": "Wanita",
    "job": "DevOps"
  }, {
    "name": "Garwin Matthensen",
    "age": 38,
    "sex": "Wanita",
    "job": "DevOps"
  }, {
    "name": "Eleanore Roark",
    "age": 36,
    "sex": "Pria",
    "job": "Fullstack"
  }, {
    "name": "Gusta Whitfeld",
    "age": 31,
    "sex": "Pria",
    "job": "Frontend"
  }, {
    "name": "Fidel Tenman",
    "age": 45,
    "sex": "Pria",
    "job": "Frontend"
  }, {
    "name": "Lacy Wardrope",
    "age": 31,
    "sex": "Wanita",
    "job": "Fullstack"
  }, {
    "name": "Wyatan Liverseege",
    "age": 21,
    "sex": "Wanita",
    "job": "Backend"
  }, {
    "name": "Mattie Iseton",
    "age": 62,
    "sex": "Wanita",
    "job": "Frontend"
  }, {
    "name": "Ines Lineham",
    "age": 46,
    "sex": "Pria",
    "job": "Backend"
  }, {
    "name": "Ara Westwell",
    "age": 44,
    "sex": "Pria",
    "job": "DevOps"
  }, {
    "name": "Adolphe Whitehair",
    "age": 40,
    "sex": "Wanita",
    "job": "DevOps"
  }, {
    "name": "Jacquelin Wolstencroft",
    "age": 28,
    "sex": "Pria",
    "job": "Fullstack"
  }, {
    "name": "Ofilia Siley",
    "age": 26,
    "sex": "Pria",
    "job": "Frontend"
  }, {
    "name": "Adrien Hearty",
    "age": 31,
    "sex": "Pria",
    "job": "Fullstack"
  }, {
    "name": "Corbet Lowre",
    "age": 54,
    "sex": "Pria",
    "job": "Fullstack"
  }, {
    "name": "Salvidor Lievesley",
    "age": 36,
    "sex": "Wanita",
    "job": "Backend"
  }, {
    "name": "Bary MacIver",
    "age": 29,
    "sex": "Wanita",
    "job": "Backend"
  }, {
    "name": "Meara Calloway",
    "age": 21,
    "sex": "Wanita",
    "job": "Fullstack"
  }, {
    "name": "Isabelle Budcock",
    "age": 64,
    "sex": "Pria",
    "job": "Frontend"
  }, {
    "name": "Lenette Woolsey",
    "age": 37,
    "sex": "Wanita",
    "job": "Frontend"
  }, {
    "name": "Sharline Kingsworth",
    "age": 34,
    "sex": "Wanita",
    "job": "Backend"
  }, {
    "name": "Kellen Galiford",
    "age": 32,
    "sex": "Pria",
    "job": "Fullstack"
  }, {
    "name": "Elston Jowett",
    "age": 27,
    "sex": "Pria",
    "job": "Fullstack"
  }, {
    "name": "Kellsie Fortin",
    "age": 40,
    "sex": "Pria",
    "job": "Backend"
  }, {
    "name": "Lillian Maghull",
    "age": 38,
    "sex": "Pria",
    "job": "Frontend"
  }, {
    "name": "Natal Dechelette",
    "age": 34,
    "sex": "Pria",
    "job": "DevOps"
  }, {
    "name": "Bambi Di Giacomettino",
    "age": 29,
    "sex": "Wanita",
    "job": "Frontend"
  }, {
    "name": "Laurena Bonus",
    "age": 20,
    "sex": "Wanita",
    "job": "Backend"
  }, {
    "name": "Drew Leaf",
    "age": 20,
    "sex": "Pria",
    "job": "DevOps"
  }, {
    "name": "Abra Rodden",
    "age": 51,
    "sex": "Pria",
    "job": "DevOps"
  }, {
    "name": "Saul Rosi",
    "age": 30,
    "sex": "Pria",
    "job": "DevOps"
  }, {
    "name": "Vivyanne Varne",
    "age": 29,
    "sex": "Pria",
    "job": "Fullstack"
  }, {
    "name": "Marcela Eggle",
    "age": 64,
    "sex": "Pria",
    "job": "DevOps"
  }, {
    "name": "Cymbre Girton",
    "age": 44,
    "sex": "Pria",
    "job": "DevOps"
  }];

var jobList = ["All", "Frontend", "Backend", "DevOps", "Fullstack"]

var dropList = () => {
    var list = '';
    
    for(i in jobList){
        list += `
        <option value=${jobList[i]}> ${jobList[i]} </option>
        `
    }
    
    document.getElementById("job").innerHTML = list;

}

var view = (userf) => {
    var list = '';
    
    for(i in userf){
        list += `
        <tr>
            <td>${userf[i].name}</td>
            <td>${userf[i].age}</td>
            <td>${userf[i].sex}</td>
            <td>${userf[i].job}</td>
        </tr>
        `
    }
    
    document.getElementById("here").innerHTML = list;
}

var pushUser = () => {
    var name = document.getElementById("nama").value;
    var age = document.getElementById("umur").value;
    var job = document.getElementById("jobs").value;
    var genders = document.getElementsByName("sexInput");
    var sex;

    for(i in genders){
        if(genders[i].checked == true)
            sex = genders[i].value;
    }

    for(i in jobList){
      if(jobList[i].toUpperCase().includes(job.toUpperCase()))
        job = jobList[i];
    }

    if(!jobList.includes(job)){
        jobList.push(job);
    }

    user.push({
        name: name,
        age: age,
        sex: sex,
        job: job
    });

    view(user);
    dropList();
}

var filterGender = () => {
    var genders = document.getElementsByName("sex");
    var sex;

    for(i in genders){
        if(genders[i].checked == true)
            sex = genders[i].value;
    }

    var userf = [];

    for(i in user){
        if(user[i].sex == sex)
            userf.push(user[i]);
    }

    view(userf);
}

var filterName = () => { 
    var name = document.getElementById("search").value;
    var userf = [];

    for(i in user){
        if(user[i].name.toUpperCase().includes(name.toUpperCase()) == true)
            userf.push(user[i]);
    }

    view(userf);
}

var filterJob = () => {
    var job = document.getElementById("job").value;
    var userf = [];

    for(i in user){
        if(job == user[i].job)
            userf.push(user[i]);
    }

    view(userf);

    if(job == 'All')
        view(user);
}

var filterAge = () => {
    var age1 = document.getElementById("num1").value;
    var age2 = document.getElementById("num2").value;
    var userf = [];

    if(age1 != 0 && age2 != 0){
        for(i in user){
            if(user[i].age >= age1 && user[i].age <= age2)
                userf.push(user[i]);
        }

        if(userf != ''){
          view(userf);
        }else{
          view([{name: "no", age: "result", job: "found"}]);
        }
        
    }else{
      view(user);
    }
}

var compareName = (a,b) => {
    if(a.name.toUpperCase() < b.name.toUpperCase()){
        return -1;
    }
    if(a.name.toUpperCase() > b.name.toUpperCase()){
        return 1;
    }
    return 0;
}

var compareAge = (a,b) => {
    if(a.age < b.age){
        return -1;
    }
    if(a.age > b.age){
        return 1;
    }
    return 0;
}

var compareSex = (a,b) => {
    if(a.sex < b.sex){
        return -1;
    }
    if(a.sex > b.sex){
        return 1;
    }
    return 0;
}

var compareJob = (a,b) => {
    if(a.job.toUpperCase() < b.job.toUpperCase()){
        return -1;
    }
    if(a.job.toUpperCase() > b.job.toUpperCase()){
        return 1;
    }
    return 0;
}

var sortBy = (what) => {
    user.sort(what);
    view(user);
}

view(user);
dropList();