var Button = Cycle.UIComponent.extends({  
        initialize: function(){  
            alert("Oh hey! ");  
        },
        render:function(){
        	'<p>Button</p>';
        }
        options: {
            label: 'Click me',  
            clickHandler: function (){ alert('get up')},
            width: 'auto',
            height:100
        }

});  