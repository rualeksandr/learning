
function learnJS(lang, callback){
    console.log("Я учу " + lang);
    callback();
}
function done(){
    console.log("Выполниться четко после первой, а не раньше!");
}
learnJS("JavaScript", done);