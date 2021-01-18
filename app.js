new Vue({
    el:'#vue-app',
    data:{
       name:'Shaun',
       job: 'Ninja',
       website: 'https://twitter.com/',
       websiteTag:'<a href ="https://twitter.com/">The Twitter</a>',
       age:'25',
       x: 0,
       y: 0
    },
    el:'#keyboard-events',

    methods:{
        greet:function(time){
            return'Good '+ time + ' ' + this.name;
        },
        add:function(inc){
            this.age+= inc;
        },
        subtract:function(dec){
            this.age-= dec;
        },
        updateXY:function(event){
            this.x= event.offsetX;
            this.y= event.offsetY;
        },
        click:function(){
            alert('you clicked me');
        }
    }
});