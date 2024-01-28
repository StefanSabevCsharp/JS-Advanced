function attachEventsListeners() {
    let distanceUnits = document.getElementById('inputUnits');
    let distance = document.getElementById('inputDistance');
    let convertBtn = document.getElementById('convert');
    let outputUnits = document.getElementById('outputUnits');
    let outputDistance = document.getElementById('outputDistance');
    convertBtn.addEventListener('click', convert);

   
    let units = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }
    function convert(e) {
        let inputUnit = distanceUnits.value;
        let outputUnit = outputUnits.value;
        let inputDistance = distance.value;
        let outputDistance = inputDistance * units[inputUnit] / units[outputUnit];
        document.getElementById('outputDistance').value = outputDistance;
    }
    
}