var beach = `<strong>Returning in 2021 at Wings Etc. (11480 McKinley Hwy, Osceola)</strong><br>Registration opens at 12:30 pm and the tournament starts at 1:00 pm.  
Live music by The Sandbar Bums is FREE and OPEN TO THE PUBLIC beginning at 5:30 pm.  For more info, contact Tom Ross at 574-298-4491 or 
email development@chiarahomerespite.org.`;

var golf = `<strong>June 7, 2021 at Knollwood Country Club (16333 Baywood Lane, Granger, IN)</strong><br><a href="../2021_Golf_Classic_Application.pdf" target="_blank">Registration form</a><br><em> Rain or Shine</em></strong><br>Registration
and box lunch at 11:00 a.m., shotgun start at noon, awards and dinner to follow golf. If you have any questions call Andy Schaefer at 
574-276-1615 or email development@chiarahomerespite.org.`;

var wedding = `<strong>Returning in 2022 at St. Hedwig Memorial Hall (331 S. Scott St, South Bend, IN)</strong><br><em>
<a href="https://app.etapestry.com/onlineforms/ChiaraHomeInc/polishwedding.html">Purchase Tickets Here</a></em><br>What could be better than a night of 
dancing and all you can eat delicious Polish food? It’s A Polish Wedding!   Join us for this unique fundraiser benefiting Chiara Home. We skip 
the nuptials and enjoy a wedding reception dinner complete with all you can eat Polish food (chicken and sausage, noodles, and mashed potatoes, 
sauerkraut, and cake), open bar, along with along with lots of dancing (including some Polkas). The evening will feature a surprise bride and 
groom chosen from the crowd, honeymoon cash, wedding gifts drawn from the "hopper," music by the DJ Sound FX, and much, much more! Email 
development@chiarahomerespite.org for more info.`;

function beachText() {
    document.getElementById('beach-text').innerHTML = beach;
}

function golfText() {
    document.getElementById('golf-text').innerHTML = golf;
}

function weddingText() {
    document.getElementById('wedding-text').innerHTML = wedding;
}

function runAll() {
    beachText();
    golfText();
    weddingText();
}