function calculateTimeToWalk(stepsToUniversity,lenghtOfFootprints,studentSpeed){

    let distance = stepsToUniversity * lenghtOfFootprints;
    let speed = studentSpeed * 1000 / 3600;
    let time = distance / speed;
    let rest = Math.floor(distance / 500);

    let hours = Math.floor(time / 60 / 60);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time - minutes * 60);

    console.log((hours < 10 ? "0" : "") + hours + ":" + (minutes + rest < 10 ? "0" : "") + (minutes + rest) + ":" + (seconds < 10 ? "0" : "") + seconds);


}

calculateTimeToWalk(4000, 0.60, 5);