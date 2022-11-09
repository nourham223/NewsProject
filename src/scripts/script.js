
$(".header-links").on('click',function(){
     $(".header-links").removeClass("active"); 
     $(this).addClass("active");
});

var clicks = 1;
$("#like").click(function(){ clicks++; $('#figure').html(clicks);});
   
$(document).ready(function() {
	$(".active").show();
	$(".btn-carousel").on('click',function(){
		var id = $(this).attr('id');
		var nav;
		if(id=="previous") {
			nav = $("img.active").prev('img');
			if(nav.length == 0) nav = $("img").last();
		} else if(id=="next") {
			nav = $("img.active").next('img');
			if(nav.length == 0) nav = $("img").first();
		}
		$("img.active").hide();
		$("img.active").removeClass("active");
		nav.addClass("active");
		nav.fadeIn(1000);
	});	
});

const feauturedArticles = [
    {
        img: `../assets/images/news.jpeg`,
        caption: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, sunt`,
    },
    {
        img: `../assets/images/paper.jpeg`,
        caption: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, sunt`,
    },
    {
        img: `../assets/images/images.jpeg`,
        caption: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, sunt`,
    },
    {
        img: `../assets/images/sport.jpeg`,
        caption: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, sunt`,
    },
]


$(function(){
	$(document).ready( function(){
        $.map( feauturedArticles, function( val, i ){
            const appended = `
            <object data="../assets/images/dashred.svg" type="image/svg+xml" class="dash"></object>
             <li class="list-style">
             <div class='width-feature-mobile'>
             <img src=${val.img} class='top-img'/>
             <p class="font-caption font-roboto-15">${val.caption}</p>
             </div>
            </li> `
            const appendedObject = `
             <li class="list-style">
             <div class='width-feature-mobile'>
             <img src=${val.img} class='top-img'/>
             <p class="font-caption font-roboto-15">${val.caption}</p>
             </div>
            </li>`
             return $('.d-flex').append(i !=0 ? appended : appendedObject);
        });
	});
});


const randomArticles = [
    {
        img: `../assets/images/flag.jpeg`,
        title:`Lorem Ipsum`,
        caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolores eligendi hic veniam molestias quam laboriosam exercitationem voluptas dolore impedit.`,
    },
    {
        img: `../assets/images/random.jpeg`,
        title:`Lorem Ipsum`,
        caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolores eligendi hic veniam molestias quam laboriosam exercitationem voluptas dolore impedit.`,
    },
    {
        img: `../assets/images/football.jpeg`,
        title:`Lorem Ipsum`,
        caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolores eligendi hic veniam molestias quam laboriosam exercitationem voluptas dolore impedit.`,
    },
    {
        img: `../assets/images/cnbc.jpeg`,
        title:`Lorem Ipsum`,
        caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolores eligendi hic veniam molestias quam laboriosam exercitationem voluptas dolore impedit.`,
    },
]

$(function(){
	$(document).ready( function(){
        $.map( randomArticles, function( val, i ){
            const row= `
            <div class="news-item column">
            <a href="../pages/article.html" class="link-style">
          <img src=${val.img} alt="image" class="news-img"/>
            <h4 class="news-title font-roboto-18">${val.title}</h4>
            <p class="newsText font-roboto-15">${val.caption}<p>
            </a>
             </div> `

             return $('#news-stream').append(row);
        });
	});
});

const newsTable = [
    {
        img: `../assets/images/arrowRight.svg`,
        caption: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo deleniti quod consequatur iste, eaque explicabo consectetur? Repellat eos vel optio.`,
        date: `20/2/2021`
    },
    {
        img: `../assets/images/arrowRight.svg`,
        caption: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo deleniti quod consequatur iste, eaque explicabo consectetur? Repellat eos vel optio.`,
        date: `20/2/2021`
    },
    {
        img: `../assets/images/arrowRight.svg`,
        caption: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo deleniti quod consequatur iste, eaque explicabo consectetur? Repellat eos vel optio.`,
        date: `20/2/2021`
    },
    {
        img: `../assets/images/arrowRight.svg`,
        caption: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo deleniti quod consequatur iste, eaque explicabo consectetur? Repellat eos vel optio.`,
        date: `20/2/2021`
    },

{
        img: `../assets/images/arrowRight.svg`,
        caption: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo deleniti quod consequatur iste, eaque explicabo consectetur? Repellat eos vel optio.`,
        date: `20/2/2021`
    },
    {
        img: `../assets/images/arrowRight.svg`,
        caption: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo deleniti quod consequatur iste, eaque explicabo consectetur? Repellat eos vel optio.`,
        date: `20/2/2021`
    }
    
    

]
$(function(){
	$(document).ready( function(){
        $.map( newsTable, function( val, i ){
            const news= `
          <img src=${val.img} alt="arrow" />
         <span>${val.caption}</span>
         <p class="sidebar-text font-roboto-15">${val.date}</p>`
            
             return $('.sidebar').append(news);
        });
	});
});

