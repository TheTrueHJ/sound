function start(){
    navigator.mediaDevices.getUserMedia({audio:true});

    classifier = ml5.classifier("https://storage.googleapis.com/tm-model/CTvvmOqvO/model.json", modelReady);

}
 
function modelReady(){
    console.log("ready")
    classifer.classify(gotResults());
}

function gotResults(error, results){
    
}