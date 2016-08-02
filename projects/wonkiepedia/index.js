/* global $ _ */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('#section-quotes').prependTo('#sections');
        $('#section-quotes').css('background-color', 'grey').css('border-radius', '4px');
        $('.heading-quotes').css('color', 'white').css('padding-left', '10px');
        $('.quote').css('color', 'white').css('font-style', 'italic'); $('#quotes').css('padding-right', '10px').css('padding-left', '10px');
        $('#quotes:last-child').css('padding-bottom', '4px');
        $('#section-bio p:last-child').remove();
        
        
        
           
        $('#pic-billy').click(function(){  
        var billyPics = data.images.billy;
        var randomPicture = data.images.billy[Math.floor(Math.random() * billyPics.length)];
        $('#pic-billy').attr('src', randomPicture);
        });
        // console.log(data);
        /*
         * Style the #section-bio and #section-quotes as per some of the 
         * examples we tried in the console.
         */
        
        /*
         * 1. Populate the #list-top-rated <ul>:
         *
         * Loop through the top rated recordings of Billy Higgins, and, 
         * using lodash, add a styled <li> for each recording. Inspect a 
         * recording object in the console to view its available properties.
         *
         * How can you use _.map() to your advantage here?
         */
        let topRated = data.discography.topRated;
        //_.forEach(topRated, function(recording) {
        //    console.log(recording);
     
        let listItems = _.map(topRated,function(recording){
          return $('<li>')
            .append($('<div>').addClass('title').text(recording.title))
            .append($('<div>').addClass('artist').text(recording.artist ));
        });
        $('#list-top-rated').append(listItems);
        
        /*
         * 2. Create a discography <section>:
         *      a. Create a discography <section id="section-disc"> and add it 
         *         below the and add it below the #section-quotes on the 
         *         index.html page.
         * 
         *      b. Create a <ul id="list-disc">, style it, and add it to the 
         *         <section id="section-disc">.
         * 
         *      c. Add a styled <li class="recording"> for every recording in 
         *         the recordings Array. What lodash methods can help you here?
         *
         *      d. Add CSS styling rules to the site.css file to style the list
         *
         *      The resulting HTML should look something like this:
         *
         *         <section id="section-disc">
         *           <ul id="list-disc">
         *               <li class="recording">
         *                   <div class="title">Title: Eastern Rebellion</div>
         *                   <div class="artist">Artist: Cedar Walton</div>
         *                   <div class="release">Release: Timeless</div>
         *                   <div class="year">Year: 1976</div>
         *               </li>
         *           </ul>
         *       </section>
         */
         let recordings = data.discography.recordings;
         let disc = _.map(recordings ,function(record) {
             return $('<li>')
                //got to add an accessor right here to get there
                .attr('art', record.art)
                .append($('<div>').addClass('title').text("Title: " + record.title))
                .append($('<div>').addClass('artists').text("Artist: " + record.artist))
                .append($('<div>').addClass('release').text("Release: " + record.release))
                .append($('<div>').addClass('year').text("Year: " + record.year));
        });
        $('#disc').append(disc);
       
       //stuff below works when u click on the picture; leave it alone
       // now figure out how to get picture element by id and change it
       //$('#album-covers').click(function(){
       //     var soulFoo = "images/album/soul-food.jpg";
       //    $('#album-covers').attr('src',soulFoo);
       //});
       var titles = $('.title');
       titles.on('click', function(event){
           console.log(event.currentTarget);
            let artPath = $(event.currentTarget).closest('li').attr('art');
            
            console.log(artPath);
            $('#album-covers').attr('src', artPath);
       });
         
        let zzz = data.discography.topRated;
        let aaa = _.map(zzz,function(record){
            return $('<li>')
            .append($('<div>').addClass('title').text("Title: " + record.title))
            .append($('<div>').addClass('artists').text("Artist: " + record.artist))
            .append($('<div>').addClass('release').text("Release: " + record.release))
            .append($('<div>').addClass('year').text("Year: " + record.year));
            
        });
        $('#disc').append(aaa); 
         /*
          * 3. Below the <section id="section-disc">, create a new section for 
          * Billy's rider. Use jQuery to assemble a table to display the rider 
          * data. The rider data is at data.rider
          */
         
        let gear = data.rider;
        let equipment = _.map(gear,function(skins){
           // console.log(gear);
            return $('<table>')
            .append($('<td>').addClass('drums').text(skins.type))
            .append($('<td>').addClass('desc').text(skins.desc));
        });
        $('#rider').append(equipment);
       
                // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


