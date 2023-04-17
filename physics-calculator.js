  function calculateForce() {
    var mass = document.getElementById("mass-force").value;

    var acc = document.getElementById("acceleration-force").value;

    var force = mass * acc;
    document.getElementById("force-force").value = force;
  }

  function calculateAcc() {
    var velocity = document.getElementById("velocity-acc").value;
    var time = document.getElementById("time-acc").value;
    var acc = velocity / time;
    document.getElementById("acceleration-acc").value = acc;
  }

  function calculateE() {
    var m = document.getElementById('mass-E').value;

    var c = document.getElementById('c-E').value;
    var E = m * c * c;

    document.getElementById('E-E').value = E;
  }

  function calculatePower() {

    var watt = document.getElementById('watt-power').value;
    var time = document.getElementById('time-power').value;

    power = watt / time;

    document.getElementById('power-power').value = power;

  }


  function calculatePressure() {
    var force = document.getElementById('force-pressure').value;
    var time = document.getElementById('time-pressure').value;

    pressure = force / time;

    document.getElementById('pressure-pressure').value = pressure;

  }
  
  
  function calculateVelocity() {
    
var distance = document.getElementById('distance-velocity').value;
   var time = document.getElementById('time-velocity').value;
   
   velocity = distance/time;
   
   document.getElementById('velocity-velocity').value = velocity;    
  }
  
  
  function calculatePD () {
    var W = document.getElementById("W-PD").value;

    var Q = document.getElementById("Q-PD").value;

    var V = W / Q;
    document.getElementById("PD-PD").value = V;
  
  }
  
  
  function calculateEC()  {
    
    var Q = document.getElementById("Q-EC").value;

    var t = document.getElementById("t-EC").value;

    var I = Q / t;
    document.getElementById("EC-EC").value = I;
  }
  
  
  function calculateR() {
    
    var V = document.getElementById("V-R").value;

    var I = document.getElementById('I-R').value;

    var R = V/ I;
    document.getElementById("R-R").value = R;
  }
  
  function calculateC() {

var Q = document.getElementById("charge-C").value;

    var V = document.getElementById("V-C").value;

    var C = Q / V;
    document.getElementById("C-C").value = C;    
    
  }
  
  function calculateMF() {
 var f = document.getElementById("F-MF").value;
  
      var q = document.getElementById("q-MF").value;
      
  var v = document.getElementById('velocity-MF').value;
  
      var mf = f/q*v ;
      document.getElementById('MF-MF').value = mf;
    
  
  }
  
  
  function calculateEF()  {
    
    var F = document.getElementById("f-EF").value;
  
      var Q = document.getElementById("q-EF").value;
  
      var E = F / Q;
      document.getElementById('EF-EF').value = E;
    
  }
  
  