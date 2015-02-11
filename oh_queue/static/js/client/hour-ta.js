// The table of the TA schedules. It is possible to change the schedule and
// the program still works. I made it general.
var timeta = [
  [{'time':[11, 12], 'ta':['Soumya', 'Timothy'], 'loc':'Garbarini Lounge'},
   {'time':[12, 13], 'ta':['Michelle', 'Sumukh'], 'loc':'Garbarini Lounge'},
   {'time':[13, 14], 'ta':['Rohan', 'Soumya'], 'loc':'Garbarini Lounge'}, 
   {'time':[15, 16], 'ta':['Joy', 'Soumya'], 'loc':'Garbarini Lounge'}, 
   {'time':[16, 17], 'ta':['Dickson', 'Joy'], 'loc':'Garbarini Lounge'}],
  [{'time':[11, 12], 'ta':['Michelle', 'Harold'], 'loc':'Garbarini Lounge'}, 
   {'time':[12, 13], 'ta':['Michelle'], 'loc':'Garbarini Lounge'}, 
   {'time':[13, 14], 'ta':['Austin', 'Robert'], 'loc':'Garbarini Lounge'}, 
   {'time':[14, 15], 'ta':['Brian', 'Marvin'], 'loc':'Garbarini Lounge'}, 
   {'time':[15, 16], 'ta':['Kevin'], 'loc':'Garbarini Lounge'}, 
   {'time':[16, 17], 'ta':['Alana', 'Kevin'], 'loc':'Garbarini Lounge'}, 
   {'time':[17, 18], 'ta':['Albert', 'Rohan'], 'loc':'Garbarini Lounge'}],
  [{'time':[11, 12], 'ta':['Timothy', 'Youri'], 'loc':'Garbarini Lounge'}, 
   {'time':[12, 13], 'ta':['Brian', 'Timothy'], 'loc':'Garbarini Lounge'}, 
   {'time':[13, 14], 'ta':['Albert', 'Harold'], 'loc':'Garbarini Lounge'}, 
   {'time':[15, 16], 'ta':['Austin', 'Sumukh'], 'loc':'Garbarini Lounge'}]
];

// Function that select the time and TA names and location based on the time
// on your local machine. The select function takes in 1 OR 2 arguments. If 
// one argument it will get the time from local machine, otherwise it used the
// second time argument given.
var d = new Date();
var select = function (time_table, time) {
  var dayta = time_table[d.getDay() - 1];
  if (dayta) {
    for (var i = 0; i < dayta.length; i += 1) {
      if (arguments.length === 2) {
        if (dayta[i].time[0] === time) {
          return dayta[i];
        }
      } else {
        if (dayta[i].time[0] === d.getHours()) {
          return dayta[i];
        }
      }
    }
  }
};

// Currently using 2 arguments for demonstration purpose.
var ta = select(timeta, 12);
if (ta) {
  var taName = document.getElementById("Ta name");
  if (ta.length < 2) {
    taName.innerHTML = "<b>" + ta.ta[0];
  } else {
    taName.innerHTML = "<b>" + ta.ta[0] + ' and ' + ta.ta[1];
  }
  document.getElementById("time").innerHTML = d.toDateString();
  document.getElementById("loc").innerHTML = ta.loc;
}

