Webcam.set({
    width:300,
  height:300,
  image_format:"png",
png_quaility:90,

})

camera=document.getElementById("camera")

Webcam.attach("#camera")

function take_snapshot(){
     Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>"   
     })
}
    console.log("ml5 version:",ml5.version)
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/KolEC0Ina/");
    function modelLoaded(){
        console.log("modelLoaded")
    }

    function speak(){
   var synth=window.speechSynthesis;
    speak_data= toSpeak;
   var utterthis= new SpeechSynthesisUtterance(speak_data);
synth.speak(utterthis)
    }

    function check(){

      img = document.getElementById("captured_image")
      classifier.classify(img,gotResult)

    }
    function gotResult(error,results){
      if (error) {
        console.error(error) 
      }
      else{
        console.log(results)
        document.getElementById("result_emotion_name").innerHTML=results[0].label
        gesture= results[0].label;
        toSpeak= "";
        
        speak();

        if (gesture== "amazing") {
            toSpeak="this is looking amazing";
          document.getElementById("update_emoji").innerHTML="&#128077;"
        }
        else if (gesture== "best") {
            toSpeak="this is looking all the best";
          document.getElementById("update_emoji").innerHTML="&#9996;"
        }
        else if (gesture== "victory") {
            toSpeak="this is looking like victory";
          document.getElementById("update_emoji").innerHTML="&#128076;"
        }
       
        }
      
    }
 
