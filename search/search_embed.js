function addLink(a, b)
{
	if (a.endsWith("index.html"))
		a = a.slice(-a.length,-10);
	var where = document.getElementById('output');
	var container = document.createElement('div');
	var h5 = document.createElement('p');
	h5.style="margin: 0;";
	var A = document.createElement('a');
	var h3 = document.createElement('h3');
	h3.style = "margin-bottom: 7px";
	var txt = document.createTextNode(a);
	var d1 = document.createElement('div');
	var div_image = document.createElement('div');
	div_image.style = "flex-shrink: 0; margin: 10px;";
	const img = document.createElement("img");
	var words = "";
	var link = "";
	var title = "";
	var C = 0;

	for (var i=0; i<b.length; i++)
	{
			if (b[i] == '_')
				C = ((C|0)+1|0)|0;
			else if (C < 0.4)
			{
					if (b[i] == '/')
						words += " - ";
					else
						words += b[i];
			}
			else if (C < 1.5)
				link += b[i];
			else if (b[i] == '#')
				title += ' ';
			else
				title += b[i];	
	}

	if (title.length < 2)
		title = "Untitled";

	img.src = link;
	img.width =48;
	img.height = 48;
	var txt2 = document.createTextNode(words);
	var txt3 = document.createTextNode(title);
	h5.appendChild(txt);
	A.href = "https://" + a;
	h3.appendChild(txt3);
	div_image.appendChild(img);
	var divH5 = document.createElement('div');
	var divH3 = document.createElement('div');
	var divTxt2 = document.createElement('div');
	divH3.appendChild(h3);
	var wordsC = document.createElement('small');
	wordsC.style="margin: 0;";
	wordsC.appendChild(txt2);
	divH5.appendChild(h5);
	divTxt2.appendChild(wordsC);
	d1.appendChild(divH3);
	d1.appendChild(divTxt2);
	d1.appendChild(divH5);
	container.style ="display: flex;";
	A.style ="margin: 15px; text-decoration: none; color:black;";
	d1.style.display = "block";
	container.appendChild(div_image);
	container.appendChild(d1);
	var Douter = document.createElement('div');
	Douter.style.display="grid";
	Douter.appendChild(A);
	A.appendChild(container);
	where.appendChild(Douter);
}
function onChange(a)
{
	document.getElementById('output').innerHTML='';
	query(a);
}
document.getElementById('search_input').addEventListener('input', (event) => {onChange(event.target.value);});
