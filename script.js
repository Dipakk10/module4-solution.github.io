var names=new Array();
names[0]="intaz";
names[1]="John";
names[2]="paula";
names[3]="jason";
names[4]="patlu";
names[5]="frank";
names[6]="larry";
names[7]="Jan";
names[8]="laura";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
