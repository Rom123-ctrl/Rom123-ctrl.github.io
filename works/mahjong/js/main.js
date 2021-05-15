'use strict'
{
  let mainYama = [
    {"No":0,"Name":"一萬","String":"man1"},{"No":1,"Name":"一萬","String":"man1"},{"No":2,"Name":"一萬","String":"man1"},{"No":3,"Name":"一萬","String":"man1"},
    {"No":4,"Name":"二萬","String":"man2"},{"No":5,"Name":"二萬","String":"man2"},{"No":6,"Name":"二萬","String":"man2"},{"No":7,"Name":"二萬","String":"man2"},
    {"No":8,"Name":"三萬","String":"man3"},{"No":9,"Name":"三萬","String":"man3"},{"No":10,"Name":"三萬","String":"man3"},{"No":11,"Name":"三萬","String":"man3"},
    {"No":12,"Name":"四萬","String":"man4"},{"No":13,"Name":"四萬","String":"man4"},{"No":14,"Name":"四萬","String":"man4"},{"No":15,"Name":"四萬","String":"man4"},
    {"No":16,"Name":"赤五萬","String":"aka1"},
    {"No":17,"Name":"五萬","String":"man5"},{"No":18,"Name":"五萬","String":"man5"},{"No":19,"Name":"五萬","String":"man5"},
    {"No":20,"Name":"六萬","String":"man6"},{"No":21,"Name":"六萬","String":"man6"},{"No":22,"Name":"六萬","String":"man6"},{"No":23,"Name":"六萬","String":"man6"},
    {"No":24,"Name":"七萬","String":"man7"},{"No":25,"Name":"七萬","String":"man7"},{"No":26,"Name":"七萬","String":"man7"},{"No":27,"Name":"七萬","String":"man7"},
    {"No":28,"Name":"八萬","String":"man8"},{"No":29,"Name":"八萬","String":"man8"},{"No":30,"Name":"八萬","String":"man8"},{"No":31,"Name":"八萬","String":"man8"},
    {"No":32,"Name":"九萬","String":"man9"},{"No":33,"Name":"九萬","String":"man9"},{"No":34,"Name":"九萬","String":"man9"},{"No":35,"Name":"九萬","String":"man9"},

    {"No":36,"paiName":"一筒","String":"pin1"},{"No":37,"paiName":"一筒","String":"pin1"},{"No":38,"paiName":"一筒","String":"pin1"},{"No":39,"paiName":"一筒","String":"pin1"},
    {"No":40,"paiName":"二筒","String":"pin2"},{"No":41,"paiName":"二筒","String":"pin2"},{"No":42,"paiName":"二筒","String":"pin2"},{"No":43,"paiName":"二筒","String":"pin2"},
    {"No":44,"paiName":"三筒","String":"pin3"},{"No":45,"paiName":"三筒","String":"pin3"},{"No":46,"paiName":"三筒","String":"pin3"},{"No":47,"paiName":"三筒","String":"pin3"},
    {"No":48,"paiName":"四筒","String":"pin4"},{"No":49,"paiName":"四筒","String":"pin4"},{"No":50,"paiName":"四筒","String":"pin4"},{"No":51,"paiName":"四筒","String":"pin4"},
    {"No":52,"paiName":"赤五筒","String":"aka2"},
    {"No":53,"paiName":"五筒","String":"pin5"},{"No":54,"paiName":"五筒","String":"pin5"},{"No":55,"paiName":"五筒","String":"pin5"},
    {"No":56,"paiName":"六筒","String":"pin6"},{"No":57,"paiName":"六筒","String":"pin6"},{"No":58,"paiName":"六筒","String":"pin6"},{"No":59,"paiName":"六筒","String":"pin6"},
    {"No":60,"paiName":"七筒","String":"pin7"},{"No":61,"paiName":"七筒","String":"pin7"},{"No":62,"paiName":"七筒","String":"pin7"},{"No":63,"paiName":"七筒","String":"pin7"},
    {"No":64,"paiName":"八筒","String":"pin8"},{"No":65,"paiName":"八筒","String":"pin8"},{"No":66,"paiName":"八筒","String":"pin8"},{"No":67,"paiName":"八筒","String":"pin8"},
    {"No":68,"paiName":"九筒","String":"pin9"},{"No":69,"paiName":"九筒","String":"pin9"},{"No":70,"paiName":"九筒","String":"pin9"},{"No":71,"paiName":"九筒","String":"pin9"},

    {"No":72,"paiName":"一索","String":"sou1"},{"No":73,"paiName":"一索","String":"sou1"},{"No":74,"paiName":"一索","String":"sou1"},{"No":75,"paiName":"一索","String":"sou1"},
    {"No":76,"paiName":"二索","String":"sou2"},{"No":77,"paiName":"二索","String":"sou2"},{"No":78,"paiName":"二索","String":"sou2"},{"No":79,"paiName":"二索","String":"sou2"},
    {"No":80,"paiName":"三索","String":"sou3"},{"No":81,"paiName":"三索","String":"sou3"},{"No":82,"paiName":"三索","String":"sou3"},{"No":83,"paiName":"三索","String":"sou3"},
    {"No":84,"paiName":"四索","String":"sou4"},{"No":85,"paiName":"四索","String":"sou4"},{"No":86,"paiName":"四索","String":"sou4"},{"No":87,"paiName":"四索","String":"sou4"},
    {"No":88,"paiName":"赤五索","String":"aka3"},
    {"No":89,"paiName":"五索","String":"sou5"},{"No":90,"paiName":"五索","String":"sou5"},{"No":91,"paiName":"五索","String":"sou5"},
    {"No":92,"paiName":"六索","String":"sou6"},{"No":93,"paiName":"六索","String":"sou6"},{"No":94,"paiName":"六索","String":"sou6"},{"No":95,"paiName":"六索","String":"sou6"},
    {"No":96,"paiName":"七索","String":"sou7"},{"No":97,"paiName":"七索","String":"sou7"},{"No":98,"paiName":"七索","String":"sou7"},{"No":99,"paiName":"七索","String":"sou7"},
    {"No":100,"paiName":"八索","String":"sou8"},{"No":101,"paiName":"八索","String":"sou8"},{"No":102,"paiName":"八索","String":"sou8"},{"No":103,"paiName":"八索","String":"sou8"},
    {"No":104,"paiName":"九索","String":"sou9"},{"No":105,"paiName":"九索","String":"sou9"},{"No":106,"paiName":"九索","String":"sou9"},{"No":107,"paiName":"九索","String":"sou9"},
  
    {"No":108,"paiName":"東","String":"ji1"},{"No":109,"paiName":"東","String":"ji1"},{"No":110,"paiName":"東","String":"ji1"},{"No":111,"paiName":"東","String":"ji1"},
    {"No":112,"paiName":"南","String":"ji2"},{"No":113,"paiName":"南","String":"ji2"},{"No":114,"paiName":"南","String":"ji2"},{"No":115,"paiName":"南","String":"ji2"},
    {"No":116,"paiName":"西","String":"ji3"},{"No":117,"paiName":"西","String":"ji3"},{"No":118,"paiName":"西","String":"ji3"},{"No":119,"paiName":"西","String":"ji3"},
    {"No":120,"paiName":"北","String":"ji4"},{"No":121,"paiName":"北","String":"ji4"},{"No":122,"paiName":"北","String":"ji4"},{"No":123,"paiName":"北","String":"ji4"},
    {"No":124,"paiName":"白","String":"ji5"},{"No":125,"paiName":"白","String":"ji5"},{"No":126,"paiName":"白","String":"ji5"},{"No":127,"paiName":"白","String":"ji5"},
    {"No":128,"paiName":"發","String":"ji6"},{"No":129,"paiName":"發","String":"ji6"},{"No":130,"paiName":"發","String":"ji6"},{"No":131,"paiName":"發","String":"ji6"},
    {"No":132,"paiName":"中","String":"ji7"},{"No":133,"paiName":"中","String":"ji7"},{"No":134,"paiName":"中","String":"ji7"},{"No":135,"paiName":"中","String":"ji7"}

  ];

  let yama = new Array(135);

  function makeYama(){
    let i;
    for(i=0;i<136;i++){
      yama[i] = mainYama[i].No;
    }
  }

  function shuffleYama(){
    let mt = new MersenneTwister();
	  let i,j,k;
	for(i=135;i>0;i--){
    	j = mt.nextInt(0, 135);
        k = yama[i];
		yama[i] = yama[j];
		yama[j] = k;
	}
}

$("#ShuffleBtn").click(function() {
	makeYama();
	shuffleYama();

	(function (){
		let i,j;
		let syama="";
    let tehai="";
		$("#Yama").empty();
		for(i=14;i<136;i++){
			syama = "<span class=\"" + mainYama[yama[i]].String + "\"></span>";
			$("#Yama").append(syama);
		}

    $("#Tehai").empty();
    for(i=0;i<14;i++){
      tehai = "<span class=\"" + mainYama[yama[i]].String + "\"></span>";
      $("#Tehai").append(tehai);
    }
	})();
});

}