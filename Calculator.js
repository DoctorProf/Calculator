class button{
	constructor(x,y,w,h,t,c){
		this.x=x
		this.y=y
		this.w=w
		this.h=h
		this.t=t
		this.c=c
	}
	draw(){
		ctx.fillStyle='black'
		ctx.fillRect(this.x,this.y,this.w,this.h)
		ctx.fillStyle='white'
		ctx.fillText(this.t, this.x,this.y+48,this.w)
	}
}
let canv = document.getElementById('canva')
	ctx=canv.getContext("2d")
	buttons=[]
	text=""
	canv.width=window.innerWidth
	canv.height=window.innerHeight
	
	canv.addEventListener('click',(e)=>{
		for(let i=0;i<buttons.length;i++){
		if(e.offsetX>=buttons[i].x && e.offsetX<=buttons[i].x+buttons[i].w && e.offsetY>=buttons[i].y && e.offsetY<=buttons[i].y+buttons[i].h){
			buttons[i].c()
		}
	}
		draw()
	})
	buttons.push(new button(210,270,50,50,'1',()=>{
		text+='1'
	}))
	buttons.push(new button(440,270,50,50,'C',()=>{
		text=''
	}))
	buttons.push(new button(440,390,50,50,'=',()=>{
		 text=eval(text)
		 text=String(text)
	}))
	buttons.push(new button(270,270,50,50,'2',()=>{
		text+='2'
	}))
	buttons.push(new button(330,270,50,50,'3',()=>{
		text+='3'
	}))
	buttons.push(new button(210,330,50,50,'4',()=>{
		text+='4'
	}))
	buttons.push(new button(270,330,50,50,'5',()=>{
		text+='5'
	}))
	buttons.push(new button(330,330,50,50,'6',()=>{
		text+='6'
	}))
	buttons.push(new button(210,390,50,50,'7',()=>{
		text+='7'
	}))
	buttons.push(new button(270,390,50,50,'8',()=>{
		text+='8'
	}))
	buttons.push(new button(330,390,50,50,'9',()=>{
		text+='9'
	}))
	buttons.push(new button(210,450,50,50,'0',()=>{
		text+='0'
	}))
	buttons.push(new button(270,450,50,50,'(',()=>{
		text+='('
	}))
	buttons.push(new button(270,510,50,50,')',()=>{
		text+=')'
	}))
	buttons.push(new button(440,450,50,50,'/',()=>{
		if(text[text.length-1]=='+' || text[text.length-1]=='-' || text[text.length-1]=='*' || text[text.length-1]=='/'){
			text=text.substring(0,text.length-1)
			text+='/'
		}
		text+=(text[text.length-1]!="/")?"/":""
	}))
	buttons.push(new button(210,510,50,50,'<',()=>{
		 text=text.substring(0,text.length-1)
	}))
	buttons.push(new button(440,510,50,50,'-',()=>{
		if(text[text.length-1]=='+' || text[text.length-1]=='*' || text[text.length-1]=='-' || text[text.length-1]=='/'){
			text=text.substring(0,text.length-1)
			text+='-'
		}
		text+=(text[text.length-1]!="-")?"-":""
	}))
	buttons.push(new button(380,510,50,50,'*',()=>{
		if(text[text.length-1]=='+' || text[text.length-1]=='/' || text[text.length-1]=='-'){
			text=text.substring(0,text.length-1)
			text+='*'
		}
		text+=(text[text.length-1]!="*")?"*":""
	}))
	buttons.push(new button(440,330,50,50,'+',()=>{
		if(text[text.length-1]=='/' || text[text.length-1]=='-' || text[text.length-1]=='*'){
			text=text.substring(0,text.length-1)
			text+='+'
		}
		text+=(text[text.length-1]!="+")?"+":""
	}))
	buttons.push(new button(330,450,50,50,'.',()=>{
		if(text[text.length-1]=='/' || text[text.length-1]=='-' || text[text.length-1]=='*' || text[text.length-1]=='+'){
			text=text.substring(0,text.length-1)
			text+='.'
		}
		text+=(text[text.length-1]!=".")?".":""
	}))
	draw()
function draw(){
	ctx.fillStyle='white'
	ctx.fillRect(0,0,canv.width,canv.height)
	ctx.fillStyle='magenta'
	ctx.fillRect(200,200,300,400)
	ctx.fillStyle='green'
	ctx.fillRect(210,210,280,50)
	ctx.fillStyle='black'
	ctx.font='bold 48px serif'
	ctx.fillText(text, 210,258,280)
	for(let i=0;i<buttons.length;i++){
		buttons[i].draw()
	}
}
