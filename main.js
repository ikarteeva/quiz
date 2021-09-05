
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;

	var web = 0;
	var analysis = 0;
	var design = 0;
	var manager = 0;
	var programmer = 0;
	var pie=5;

if (question1 == "New") {
		web++;
		analysis++;
		design++;
		programmer++;
}
else if (question1=="Old"){
	manager++;
};

if (question2 == "Money") {
		web++;
		design++;
		analysis++;;
}
else if (question2=="Soul") {
	manager++;
}
else if(question2=="Stabil"){
	programmer++;
};

if (question3 == "Yep") {
		web++;
		programmer++;
	}
	else if (question3 == "No"){
		manager++;
		design++;
		analysis++;
	};

if (question4 == "Fu") {
		programmer++;
	}
	else if(question4=="Norm"){
		manager++;
		web++;
		analysis++;
	}
	else if(question4 == "Kaif"){
		design++;
	};

if (question5 == "Friend") {
		design++;
	}
	else if(question5=="Code"){
		web++;
	}
	else if(question5=="Team"){
		manager++;
	}
	else if(question5=="Game"){
		analysis++;
	}
	else if(question5=="Work"){
		programmer++;
	};

	if(web == 0 && programmer == 0 && design == 0 && analysis == 0 && manager == 0){
		alert("ты чо нажала на кнопку не ответив?");
	}
	else {
	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("number_correct").innerHTML = "Иии скинь мне это:";

	var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Веб", "Проджект", "Аналитик", "Дизайнер", "Разработчик", "Хлебушек"],
        datasets: [{
            label: 'Твой результат',
            data: [ web, manager, analysis, design, programmer, pie],
            backgroundColor: [
                'rgba(216, 27, 96, 0.6)',
                'rgba(3, 169, 244, 0.6)',
                'rgba(255, 152, 0, 0.6)',
                'rgba(29, 233, 182, 0.6)',
                'rgba(156, 39, 176, 0.6)',
                'rgba(84, 110, 122, 0.6)'
            ],
            borderColor: [
                'rgba(216, 27, 96, 1)',
                'rgba(3, 169, 244, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(29, 233, 182, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(84, 110, 122, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Твой результат <3',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
										max: 5
                }
            }]
        }
    }

})
	}
	}
