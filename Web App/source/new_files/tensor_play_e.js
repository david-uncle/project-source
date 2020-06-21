var video=document.querySelector("#videoElement");navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then(function(e){video.srcObject=e}).catch(function(e){$("#videoElement").hide(),$("#overlay").hide(),$("#camera_missing").removeAttr("hidden")});let f_ok=!1;function update_f(e){f_ok=1==e}async function form_submitted(){var e=new SpeechSynthesisUtterance("Your coding interview is finished. Here is your final score.");e.lang="en-US",window.speechSynthesis.speak(e);for(var t=0,n=0,i=0,c=0,a=0,o=0;o<summary_confidence.length;o++)t+=parseInt(summary_confidence[o],10);var s=t/elmt.length;s>4.5?($("#confidence_level").text("Very Good"),c=40):s>3.5?($("#confidence_level").text("Good"),c=35):s>2.5?($("#confidence_level").text("Above Average"),c=30):s>2?($("#confidence_level").text("Average"),c=25):s>1?($("#confidence_level").text("Below Average"),c=20):($("#confidence_level").text("Low"),c=15),"Structured Query Language"==$("#question_2").text()?n++:i++,"It is a server side scripting language"==$("#question_3").text()?n++:i++,"Longest common subsequence"==$("#question_4").text()?n++:i++,"structural language"==$("#question_5").text()?n++:i++,"SAP"==$("#question_6").text()?n++:i++,"It is client side scripting language"==$("#question_7").text()?n++:i++,"cin.get(ch)"==$("#question_8").text()?n++:i++,"Inheritance"==$("#question_9").text()?n++:i++,$("#correct_ans").text(n),$("#wrong_ans").text(i),$("#time_taken").text(clock.getTime().time),time_full=clock.getTime().time,a=time_full<30?20:time_full<59?15:time_full<89?10:time_full<119?5:0,$("#interview_score").html(5*n+a+c)}async function draw_detection(){const e=$("#overlay").get(0);await Promise.all([faceapi.nets.tinyFaceDetector.loadFromUri("https://d1fxj45sgc9t4v.cloudfront.net/ai_process/tensor_cnn/weights"),faceapi.nets.faceLandmark68Net.loadFromUri("https://assets.hirecream.com/ai_process/tensor_cnn/weights")]),video_el=document.getElementById("videoElement"),detections_new=await faceapi.detectAllFaces(video_el,new faceapi.TinyFaceDetectorOptions).withFaceLandmarks();const t=faceapi.matchDimensions(e,video_el,!0),n=faceapi.resizeResults(detections_new,t);faceapi.draw.drawDetections(e,n),faceapi.draw.drawFaceLandmarks(e,n),setTimeout(()=>draw_detection_2())}async function draw_detection_2(){const e=$("#overlay").get(0);video_el=document.getElementById("videoElement"),detections_new=await faceapi.detectAllFaces(video_el,new faceapi.TinyFaceDetectorOptions(224)).withFaceLandmarks();const t=faceapi.matchDimensions(e,video_el,!0),n=faceapi.resizeResults(detections_new,t);faceapi.draw.drawDetections(e,n),faceapi.draw.drawFaceLandmarks(e,n),setTimeout(()=>draw_detection_2())}$(document).ready(function(e){draw_detection();let t=1,n=0;e("#click_next").click(async function(){if(1==f_ok){t+=1,n+=1;var i=e("#ques_screen")[0];e("#ques_screen_src").attr("src",`https://d1fxj45sgc9t4v.cloudfront.net/uncle_jon/media/ques${n}.mp4`),i.load(),i.play(),f_ok=!1,4==n&&(f_ok=!0)}}),e("#click_prev").click(async function(){t-=1,n-=1,f_ok=!0;var i=e("#ques_screen")[0];n>0?e("#ques_screen_src").attr("src",`https://d1fxj45sgc9t4v.cloudfront.net/uncle_jon/media/ques${n}.mp4`):e("#ques_screen_src").attr("src","https://d1fxj45sgc9t4v.cloudfront.net/uncle_jon/media/intro.mp4"),i.load(),i.play()})});
