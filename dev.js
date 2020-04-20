//start script here
	
	var first, second ,pat,third;
	(()=>{
	   //auto run cases
	   pat=document.querySelector(".patient");
	   first=document.querySelector(".total");
	   second=document.querySelector(".rec");
	   third=document.querySelector(".death");
	   		//function for action
	   		(()=>{
	   			let url="https://covidnigeria.herokuapp.com/api";
	   				fetch(url).then(info=>info.json())
	   				.then(covid=>{
	   					//handle the action
	   			first.innerHTML=`Total Cases: ${covid.data.totalConfirmedCases}`;
	   			second.innerHTML=`Recovered : ${covid.data.discharged}`;
	   			third.innerHTML=`Death Toll: ${covid.data.death}`;
	   			pat.innerHTML=`Tested people ${covid.data.totalSamplesTested}`;
	   			
	   			//now datas for the 3 states 
	   			//cases for lagos
	   			
	   			var lagCase, lagRec, lagDeath;
	   				lagCase=document.querySelector(".lagCase");
	   				lagRec=document.querySelector(".lagRec");
	   				lagDeath=document.querySelector(".lagDeath");
	   				lagCase.innerHTML=`${covid.data.states[0].confirmedCases}`;
	   				lagRec.innerHTML=`${covid.data.states[0].discharged}`;
	   				lagDeath.innerHTML=`${covid.data.states[0].death}`;
	   				
	   				//cases for ogun
	   				ogCase=document.querySelector(".ogCase");
	   				ogRec=document.querySelector(".ogRec");
	   				ogDeath=document.querySelector(".ogDeath");
	   				//oya display the result 
	   				ogCase.innerHTML=`${covid.data.states[5].confirmedCases}`;
	   				ogRec.innerHTML=`${covid.data.states[5].discharged}`;
	   				ogDeath.innerHTML=`${covid.data.states[5].death}`;
	   				
	   				//fct cases
	   				fctCases=document.querySelector("#abj").innerHTML=covid.data.states[1].confirmedCases;
	   				fct=document.querySelector("#abjrec").innerHTML=covid.data.states[1].discharged;
	   				abj=document.querySelector("#abjdeath").innerHTML=covid.data.states[1].death;
	   				//oya display the result 
					
	   				}).catch(dev=>{
	   					swal("Ooops","something went wrong pls check your internet connection");
	   					
	   				});
	   		})();
	})();
	
	//btn action 
	var btn=document.querySelector("button");
	btn.addEventListener('click',event=>{
		if(event)
			document.querySelector("#state").style.display="block";
		else
			swal("covid-19","is real pls stay safe ");
			
		//cancel button
		cancel=document.querySelector(".cancel");
		cancel.onclick=()=>{
	
			document.querySelector("#state").style.display="none";
			
		}
	});
	//btn action for stay safe 
document.querySelector("#safe").addEventListener('click',()=>{
	swal("STAY SAFE","and protect your self ")
});
	