function main(){
    window.setTimeout(function(){

        console.log("triggered");
        // Turn off autoplay
        try{
            var autoplayCheckbox = document.getElementById('autoplay-checkbox');
            if(autoplayCheckbox.checked)
                autoplayCheckbox.click();
        }
        catch(err){

        }

        // Remove 'choose your language' alert box on top of page
        try{
            document.getElementById('yt-lang-alert-container').style.display = 'none';
        }
        catch(err){

        }

    }, 3000);
}

// select the target node
var target = document.body;
 
// create an observer instance
var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
        console.log(mutation.type);
    });
    main();    
});
 
// configuration of the observer:
var config = { childList: true};
 
// pass in the target node, as well as the observer options
observer.observe(target, config);