function createAssemblyLine(){
    let obj = {
        hasClima: function(carObj){
            carObj[`temp`] = 21;
            carObj[`tempSettings`] = 21;
            carObj[`adjustTemp`] = function(){
                if (this.temp < this.tempSettings) {
                    this.temp += 1;
                } else if (this.temp > this.tempSettings) {
                    this.temp -= 1;
                }
            }
            

        },
        hasAudio: function(carObj) {
            carObj[`currentTrack`] = {
                name: null,
                artist: null
            };
            carObj[`nowPlaying`] = function (){
                if(!this.currentTrack.name || !this.currentTrack.artist ){
                    return;
                }
                console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`); 
            }

        },
        hasParktronic: function(carObj) {
            carObj[`checkDistance`] = function(distance){
                distance = Number(distance);
                if(distance< 0.1){
                    console.log("Beep! Beep! Beep!");
                }else if(distance>=0.1 && distance<0.25){
                    console.log("Beep! Beep!");
                }else if(distance>=0.25 && distance<0.5){
                    console.log("Beep!");
                }else{
                    console.log("");
                }
            } 
        }
    }
    return obj;
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
console.log(myCar);

