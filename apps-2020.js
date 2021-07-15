/**
    The best running EARTH (WORLD) ONLINE APPS runs PHLETON!
    Author: DARTH VADER aka DARK VADOR /oo\
    Version: 1.0.0
    Initial : 09.01.2019 (v0.0.0)
    Update 1: 15.01.2019 (v0.0.1)
	Update 2: 24.09.2019 (v1.0.0)
	8 months ago.
	Bador /oo7 lost his computer and escaped from Europe.
    In case you find a better application, let vador knows.
    Here is what will happen to the provider : /oo\ -> /xx\
    Be a good citizen of the EMPIRE, always report to DARK VADOR : PROTECT, UNIFY, AND CONQUER!!!
    
	(c) 2019 LICENSED under the EARTH LICENSE - Version 1.0.
	    http://phleton.com/license/earth-license-v1.0.html

    I got a message for you from my heavently father!
    Everybody out there: "Live long and prosper! and die /ooöö\ fullfilled!!!"
    UNITED for peace, love, joy, and happiness!
	
	/oo.o.öö\ : /oo.öö\ : /ooöö\ : /oö\ : o
	/ooöö\ : /oo./öö : -> /.. ................/öö
	-> /.. : /~~ : /^^
	anakin : create alias darth vader /oo
	anakin : prompt /oo : 
	/oo : echo ig hben eine Mission!
	/oo : shutdown /s /t 600
**/
// Constants
const pics = 'pico/';
function https()      {return 'https://'}
function http()       {return 'http://'}
function w3()         {return 'www.'}
function urlsw(site)  {return https()+w3()+site+'.com';} // https://www.site.com
function urls1(site)  {return https()+w3()+site;}        // https://www.site
function urls(site)   {return https()+site+'.com';}      // https://site.com
function urlw(site)   {return http()+w3()+site+'.com';}  // http://www.site.com
function url(site)    {return http()+site+'.com';}       // http://site.com
const appsLink = [
	urlw('phleton'),url('darthvader.phleton'),urls1('khanacademy.org'),
	urlsw('youtube'),urlsw('facebook'),urlsw('twitter'),
	urlsw('google'),urlsw('bing'),urls('translate.google')
];
const appsPics = [
	'phleton.png','darkvador.png','khanacademy.png',
	'youtube.png','facebook.png','twitter.png',
	'google.png','bing.png','gtranslate.png'
];
const appsDescr = [
	'PHLETON the earth company','betobe be DARTH VADER /oo','?','?','?','?','?','?','?'
];
// Creating the EARTH APPS
function loadApps() {buildApps();}
function buildApps() {
	row(['f','F','K','Y','f','T','G','B','G','0','F']); // 1
	row(['Y','F','K','T','Y','f','B','G','B','F','F']); // 2
	row(['T','F','K','f','T','Y','G','B','G','F','0']); // 3
	row(['F','F','0','F','0','F','0','F','0','F','0']); // 4
	row(['F','F','F','F','F','F','F','F','F','F','F']); // 5
	row(['0','0','0','0','0','0','0','0','0','0','0']); // 6
	row(['0','0','0','0','0','0','0','0','0','0','0']); // 7
	row(['0','0','0','0','0','0','0','0','0','0','0']); // 8
	row(['0','0','0','0','0','0','0','0','0','0','0']); // 9
	row(['F','F','F','F','F','F','F','F','F','F','F']); // 10
	row(['0','0','0','0','0','0','0','0','0','0','0']); // 11
	row(['0','0','0','0','0','0','0','0','0','0','0']); // 12
	row(['0','0','0','0','0','0','0','0','0','0','0']); // 13
	row(['0','0','0','0','0','0','0','0','0','0','0']); // 14
	row(['F','F','F','F','F','F','F','F','F','F','F']); // 15
	//row(['F','F','F','F','F','F','F','F','F','F','F']);
	//row(['0','0','0','0','0','0','0','0','0','0','0']);
}
function get(tag) { return document.getElementById(tag);}
function create(tag) { return document.createElement(tag);}
// Generate a Row
function row(matrix) {
	var app; var apps = get('apps'); var row = create('tr');
	for (var i=0; i<11; i++) {
		app = create('td');	
		     if (matrix[i]=='0') {app.innerHTML = earth();}
		else if (matrix[i]=='F') {app.innerHTML = vador();}
		else if (matrix[i]=='K') {app.innerHTML = khanacademy();}
		else if (matrix[i]=='Y') {app.innerHTML = youtube();}
		else if (matrix[i]=='f') {app.innerHTML = facebook();}
		else if (matrix[i]=='T') {app.innerHTML = twitter();}
		else if (matrix[i]=='G') {app.innerHTML = google();}
		else if (matrix[i]=='B') {app.innerHTML = bing();}
		else                     {app.innerHTML = earth();}
		row.appendChild(app);
	} apps.appendChild(row);
}
/**
 * Predefined Apps
 **/
function earth()       {return gApp(0);} function vador()       {return gApp(1);}
function khanacademy() {return gApp(2);} function youtube()     {return gApp(3);}
function facebook()    {return gApp(4);} function twitter()     {return gApp(5);}
function google()      {return gApp(6);} function bing()        {return gApp(7);}
function gTranslate()  {return gApp(8);}
// Repeat functions
// function repeatAppEarth(count) {var i=0;while(i<count){earth();i++;}}
// function repeatAppVador(count) {var i=0;while(i<count){vador();i++;}}
// Generate an app given the index number
function gApp(idx) { return createApp(appsLink[idx],getAppImage(idx),appsDescr[idx]); }
// Creating the APP
function getAppImage(idx) { path=pics;
	if (idx>0){path+=appsPics[idx];}else{path+=appsPics[0];} return path;
}
// Creating the APP
function createApp(url,src,alt) {return buildApp(url,src,alt,'80px','80px').trim();}
// Building the APP
function buildApp(url,src,alt,width,height) {
	var tagA   = "<a href='" + url + "' target='_blank'>";
	var tagIMG = "<img src='" + src + "'" + " alt='" + alt + "' "
			   + "width='" + width + "' height='" + height + "'/>"
	var app    = tagA + tagIMG + "</a>";
	return app;
}