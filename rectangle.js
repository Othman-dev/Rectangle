var fs = require('fs');
var c1 = process.argv[2];
var data1 = fs.readFileSync(c1, "utf8").split('\n');

var c2 = process.argv[3];
var data2 = fs.readFileSync(c2, "utf8").slice(0,3);

console.log('data1 is\n' + data1.join('\n') +'data2 is ' +  data2);


function lookFor(){

	for(y = 0; data1[y] != undefined; y++){
		
		var locat = data1[y].indexOf(data2);
		
		if(locat != -1){
			console.log('location is (' +  locat + ',' + y + ')');
			break;
		
		};

	};
};

lookFor();
